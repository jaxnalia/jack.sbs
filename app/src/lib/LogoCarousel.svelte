<script lang="ts">
    import { logos } from './logos';
    import { onMount } from 'svelte';
    
    let carouselContent: HTMLDivElement;
    let position = 0;
    
    // Create 3 sets of logos for seamless scrolling
    function getLogos() {
      return [...logos, ...logos, ...logos];
    }
    
    onMount(() => {
      const animate = () => {
        if (carouselContent) {
          position -= 1;
          const maxScroll = carouselContent.scrollWidth / 3;
          
          if (Math.abs(position) >= maxScroll) {
            position = 0;
          }
          
          carouselContent.style.transform = `translateX(${position}px)`;
        }
      };
    
      const interval = setInterval(animate, 30);
      return () => clearInterval(interval);
    });
    </script>
    
    <div class="carousel-container">
      <div class="carousel">
        <div class="carousel-content" bind:this={carouselContent}>
          {#each getLogos() as logo}
            <div class="logo-item">
              {@html logo.svg}
              <span class="logo-name font-semibold">{logo.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
    
    <style>
      .carousel-container {
        width: 100%;
        overflow: hidden;
        /* background: black; */
        padding: 0.5rem 0;
        position: relative;
      }
    
      .carousel-container::before,
      .carousel-container::after {
        content: '';
        position: absolute;
        top: 0;
        width: 10%;
        height: 100%;
        z-index: 2;
        pointer-events: none;
      }
    
      .carousel-container::before {
        left: 0;
        background: linear-gradient(to right, black, transparent);
      }
    
      .carousel-container::after {
        right: 0;
        background: linear-gradient(to left, black, transparent);
      }
    
      .carousel {
        position: relative;
        padding: 1rem;
        overflow: hidden;
      }
    
      .carousel-content {
        display: flex;
        gap: 1.5rem;
        will-change: transform;
      }
    
      .logo-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
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