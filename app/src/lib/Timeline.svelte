<script lang="ts">
    type TimelineItem = {
        link: string;
        url: string;
        date: string;
        title: string;
        description: string;
    };
  
    export let items: TimelineItem[] = [];

    const externalLinkIcon = `<svg class="w-5 h-5 ml-2 inline text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`;

  </script>
  
  <div class="relative container mx-auto py-8 translate-y-7">
    {#each items as item, index}
      <div class="relative mb-8 flex">
        {#if index !== items.length - 1}
          <div class="absolute left-2 w-1 bg-gray-600" style="height: calc(100% + 2rem); top: 3rem;"></div>
        {/if}
        <div class="absolute left-0 transform translate-x-0">
          <div class="w-5 h-5 bg-gray-600 rounded-full mt-8 flex items-center justify-center">
            <div class="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        <div class="ml-8">
            {#if item.link}
            <a href={item.url} class="text-xl absolute no-underline hover:underline" >{item.link}{@html externalLinkIcon}</a>
            
            {/if}
            
            <h3 class="text-xl font-bold mt-7 mb-0">{item.title}</h3>
            <div class="text-md mb-0.5 text-white">{item.date}</div>
            <p class="text-xl mt-0">{item.description}</p>
        </div>
      </div>
    {/each}
  </div>