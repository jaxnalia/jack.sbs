<script lang="ts">
    let formData = {
      name: '',
      email: '',
      businessType: '',
      message: ''
    };

    let dropdownOpen = false;
    let selectedOption = '';

    const businessTypes = [
      { value: 'ecommerce', label: '🛍️ Ecommerce' },
      { value: 'service', label: '🤝 Service' },
      { value: 'finance', label: '💸 Finance' },
      { value: 'education', label: '📚 Education' },
      { value: 'business', label: '💼 Business' },
      { value: 'crypto', label: '🪙 Crypto' },
      { value: 'gaming', label: '🎮 Gaming' },
      { value: 'other', label: '⚡Other' }
    ];

    const toggleDropdown = () => {
      dropdownOpen = !dropdownOpen;
    };

    const selectOption = (value: string, label: string) => {
      formData.businessType = value;
      selectedOption = label;
      dropdownOpen = false;
    };

     const handleSubmit = async () => {
       try {
         const response = await fetch('/api/contact', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             name: formData.name,
             email: formData.email,
             businessType: formData.businessType,
             message: formData.message
           })
         });

         const result = await response.json();
         
         if (result.success) {
           console.log('Form submitted successfully:', result);
           // Reset form
           formData = {
             name: '',
             email: '',
             businessType: '',
             message: ''
           };
           selectedOption = '';
           alert(result.message);
         } else {
           console.error('Form submission failed:', result);
           alert(result.message);
         }
       } catch (error) {
         console.error('Error submitting form:', error);
         alert('An error occurred. Please try again.');
       }
     };
  </script>
  
   <style>
     .dropdown-scroll::-webkit-scrollbar {
       width: 8px;
     }
     
     .dropdown-scroll::-webkit-scrollbar-track {
       background: transparent;
     }
     
     .dropdown-scroll::-webkit-scrollbar-thumb {
       background: #374151;
       border-radius: 4px;
     }
     
     .dropdown-scroll::-webkit-scrollbar-thumb:hover {
       background: #4b5563;
     }
     
     .arrow-down {
       width: 12px;
       height: 8px;
       position: relative;
     }
     
     .arrow-down::before,
     .arrow-down::after {
       content: '';
       position: absolute;
       width: 2px;
       height: 6px;
       background-color: currentColor;
       top: 1px;
     }
     
     .arrow-down::before {
       left: 5.5px;
       transform: rotate(-45deg);
       transform-origin: bottom;
     }
     
     .arrow-down::after {
       right: 5.5px;
       transform: rotate(45deg);
       transform-origin: bottom;
     }
   </style>
  
  <footer class="bg-black prose prose-invert">
    <div class="max-w-2xl mx-auto">
      <div class="">
        <!-- <h1 class="font-bold text-white mt-8">
          Let's Cook
        </h1> -->
        <!-- <p class="text-gray-300 text-xl mb-8">
          Ready to bring your idea to life? Let's talk about your project.<br><br>
          Send me a message at <a href="http://t.me/bigjaxcapital">t.me/bigjaxcapital</a> or fill in the form below.
        </p> -->
        
      </div>
  
       <form 
         on:submit|preventDefault={handleSubmit}
         class="space-y-6"
       >
        <div>
          <!-- <label 
            for="name"
            class="block text-sm font-medium text-gray-300 mb-2"
          >
            Name
          </label> -->
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            required
            placeholder="Your Name *"
            class="w-full px-4 py-3 rounded-lg border border-gray-800 
                   
                   bg-black text-white
                   placeholder-gray-500"
          />
        </div>
  
        <div>
          <!-- <label 
            for="email"
            class="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label> -->
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            required
            placeholder="Your Email *"
            class="w-full px-4 py-3 rounded-lg border border-gray-800 
                   
                   bg-black text-white
                   placeholder-gray-500"
          />
        </div>
  
        <div class="relative">
          <!-- <label 
            for="businessType"
            class="block text-sm font-medium text-gray-300 mb-2"
          >
            Business Type
          </label> -->
           <div 
             class="w-full px-4 py-3 rounded-lg border border-gray-800 
                    bg-black {formData.businessType ? 'text-white' : 'text-gray-500'} 
                    cursor-pointer flex justify-between items-center
                    focus:border-white focus:outline-none"
             on:click={toggleDropdown}
             on:keydown={(e) => e.key === 'Enter' && toggleDropdown()}
             tabindex="0"
             role="button"
             aria-expanded={dropdownOpen}
             aria-haspopup="listbox"
           >
            <span>{selectedOption || 'Business Type *'}</span>
             <span class="transform transition-transform {dropdownOpen ? 'rotate-180' : ''} select-none pointer-events-none arrow-down"></span>
          </div>
          
          {#if dropdownOpen}
             <div class="absolute top-full left-0 right-0 mt-1 bg-black border border-gray-800 rounded-lg z-10">
              {#each businessTypes as option}
                 <div 
                   class="px-4 py-3 text-white hover:bg-gray-700 cursor-pointer rounded-lg mx-2 my-1"
                   on:click={() => selectOption(option.value, option.label)}
                   role="option"
                 >
                  {option.label}
                </div>
              {/each}
            </div>
          {/if}
        </div>
  
        <div>
          <!-- <label 
            for="message"
            class="block text-sm font-medium text-gray-300 mb-2"
          >
            Message
          </label> -->
          <textarea
            id="message"
            bind:value={formData.message}
            required
            rows="4"
            placeholder="Tell us about your project *"
            class="w-full px-4 py-3 rounded-lg border border-gray-800 
                   
                   bg-black text-white
                   placeholder-gray-500"
          ></textarea>
        </div>
  
        <button
          type="submit"
          class="w-full bg-black group hover:bg-white border border-gray-800 py-3 px-6 rounded-lg
                 "
        >
          <h3 class="m-0 text-white font-bold group-hover:text-black">Send Message</h3>
          
        </button>
      </form>
    </div>
  </footer>