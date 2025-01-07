<script lang="ts">
    import { logos } from './logos';
    import { onMount } from 'svelte';
    
    let scrollContainer: HTMLDivElement;
    
    // Create 3 sets of logos for seamless scrolling
    function getLogos() {
      return [...logos, ...logos, ...logos];
    }
    
    onMount(() => {
      const scroll = () => {
        if (scrollContainer) {
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
            scrollContainer.style.scrollBehavior = 'auto';
            scrollContainer.scrollLeft = 0;
            setTimeout(() => {
              scrollContainer.style.scrollBehavior = 'smooth';
            }, 1);
          } else {
            scrollContainer.scrollLeft += 1;
          }
        }
      };
    
      const interval = setInterval(scroll, 30);
      return () => clearInterval(interval);
    });
    </script>
    
    <div class="carousel-container bg-gray-900 rounded-xl border-gray-900 border-2">
      <div class="carousel" bind:this={scrollContainer}>
        {#each getLogos() as logo}
          <div class="logo-item">
            {@html logo.svg}
            <span class="logo-name font-semibold">{logo.name}</span>
          </div>
        {/each}
      </div>
    </div>
    
    <style>
      .carousel-container {
        width: 100%;
        overflow: hidden;
        /* background: black; */
        padding: 1.5rem 0;
        position: relative;
      }
    
      .carousel-container::before,
      .carousel-container::after {
        content: '';
        position: absolute;
        top: 0;
        width: 100px;
        height: 100%;
        z-index: 2;
      }
    
      .carousel-container::before {
        left: 0;
        background: linear-gradient(to right, #000000, transparent);
      }
    
      .carousel-container::after {
        right: 0;
        background: linear-gradient(to left, #000000, transparent);
      }
    
      .carousel {
        display: flex;
        gap: 2rem;
        
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        scroll-behavior: smooth;
      }
    
      .carousel::-webkit-scrollbar {
        display: none;
      }
    
      .logo-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex: 0 0 auto;
      }
    
      .logo-item :global(svg) {
        width: 2.5rem;
        height: 2.5rem;
      }
    
      .logo-name {
        color: white;
        font-size: 1rem;
        white-space: nowrap;
      }
    </style>