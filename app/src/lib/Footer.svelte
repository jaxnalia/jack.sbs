<script lang="ts">
    let formData = {
      name: '',
      email: '',
      message: ''
    };
  
    const handleSubmit = () => {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
      // Reset form
      formData = {
        name: '',
        email: '',
        message: ''
      };
    };
  </script>
  
  <footer class="bg-black prose prose-invert">
    <div class="max-w-2xl mx-auto">
      <div class="">
        <!-- <h1 class="font-bold text-white mt-8">
          Let's Cook
        </h1> -->
        <p class="text-gray-300 text-xl mb-8">
          Ready to bring your idea to life? Let's talk about your project.<br><br> <!-- Email me at <a href="mailto:hello@jack.sbs">hello@jack.sbs</a> or fill in the form. -->
          Send me a message at <a href="http://t.me/bigjaxcapital">t.me/bigjaxcapital</a> or fill in the form below.
        </p>
        
      </div>
  
      <form 
        on:submit|preventDefault={handleSubmit}
        class="space-y-6"
      >
        <div>
          <label 
            for="name"
            class="block text-sm font-medium text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            required
            placeholder="Your name"
            class="w-full px-4 py-3 rounded-lg border border-gray-400 
                   
                   bg-black text-white
                   placeholder-gray-500"
          />
        </div>
  
        <div>
          <label 
            for="email"
            class="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            required
            placeholder="your@email.com"
            class="w-full px-4 py-3 rounded-lg border border-gray-400 
                   
                   bg-black text-white
                   placeholder-gray-500"
          />
        </div>
  
        <div>
          <label 
            for="message"
            class="block text-sm font-medium text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            bind:value={formData.message}
            required
            rows="4"
            placeholder=""
            class="w-full px-4 py-3 rounded-lg border border-gray-400 
                   
                   bg-black text-white
                   placeholder-gray-500"
          ></textarea>
        </div>
  
        <button
          type="submit"
          class="w-full bg-black group hover:bg-white border border-gray-400 py-3 px-6 rounded-lg
                 "
        >
          <h3 class="m-0 text-white font-bold group-hover:text-black">Send Message</h3>
          
        </button>
      </form>
    </div>
  </footer>