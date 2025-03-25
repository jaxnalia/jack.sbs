<script lang="ts">
    import ProjectCard from "$lib/ProjectCard.svelte";
    import Footer from "$lib/Footer.svelte";
    
    const projects = [
      {
        title: "LEAN Staking App",
        description: "Liquidity staking protocol for an ERC20 token that mints 'Incentive Tokens' as a reward.",
        link: "https://app.leantoken.org/",
        image: "leantoken.png",
        technologies: [
          { name: "Solidity", logo: "solidity" },
          { name: "Svelte", logo: "svelte" },
          { name: "TypeScript", logo: "typescript" }
          
        ]
      },
      {
        title: "Stripe Ecommerce Boilerplate",
        description: "Template for an e-commerce website with a shopping cart, product pages, and checkout functionality.",
        link: "https://ecommerce-boilerplate-omega.vercel.app/",
        image: "ecommerce.png",
        technologies: [
          { name: "Svelte", logo: "svelte" },
          { name: "TypeScript", logo: "typescript" },
          { name: "Stripe", logo: "stripe" }
        ]
      },
      {
        title: "Web Solutions Business",
        description: "Website for a web solutions business, showcasing services and client testimonials.",
        link: "https://web-solutions-tau.vercel.app/",
        image: "web-solutions.png",
        technologies: [
          { name: "Svelte", logo: "svelte" },
          { name: "TypeScript", logo: "typescript" },
          { name: "PostgreSQL", logo: "postgresql" }
        ]
      },
      {
        title: "Robinson's Road Ready",
        description: "Website for a driving school based in Norwich. Includes a custom CMS, booking system, and other information.",
        link: "https://robinsons-road-ready.vercel.app/",
        image: "robinsons.png",
        technologies: [
          { name: "Svelte", logo: "svelte" },
          { name: "TypeScript", logo: "typescript" },
          { name: "PostgreSQL", logo: "postgresql" }
        ]
      },
      {
        title: "Millions Trading",
        description: "Website for an online trading course with Discord user authentication and Stripe payment integration.",
        link: "https://millionstrading.com/",
        image: "millionstrading.png",
        technologies: [
          { name: "Svelte", logo: "svelte" },
          { name: "TypeScript", logo: "typescript" },
          { name: "PostgreSQL", logo: "postgresql" },
          { name: "Stripe", logo: "stripe" },
          { name: "n8n", logo: "n8n" }
        ]
      },
      {
        title: "Personal Website",
        description: "Portfolio showcasing projects and experience with a modern, responsive design.",
        link: "https://jack.sbs",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        technologies: [
          { name: "Svelte", logo: "svelte" },
          { name: "TypeScript", logo: "typescript" },
          { name: "PostgreSQL", logo: "postgresql" }
        ]
      }
    ];
  </script>
  
  <main class="">
    <div class="max-w-4xl mx-auto space-y-8">
      <h1 class="font-bold text-4xl text-white mb-8">Projects</h1>
      <div class="space-y-8">
        {#each projects as project}
          <ProjectCard {project} />
        {/each}
      </div>
      
      <div class="max-w-screen-sm mx-auto prose prose-invert pt-20">
        <h1 class="mb-0 mt-8 font-bold">Let's Cook.</h1>
        <Footer />
      </div>
    </div>
    
  </main>
  
 
  