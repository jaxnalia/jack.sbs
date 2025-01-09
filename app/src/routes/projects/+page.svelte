<script lang="ts">
    import ProjectCard from "$lib/ProjectCard.svelte";
    
    const projects = [
      {
        title: "Task Manager",
        description: "A full-featured task management application with real-time updates and collaborative features.",
        link: "https://example.com/task-manager",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        technologies: [
          { name: "React", logo: "react" },
          { name: "TypeScript", logo: "typescript" }
        ]
      },
      {
        title: "Weather Dashboard",
        description: "Real-time weather monitoring dashboard with interactive maps and forecast visualization.",
        link: "https://example.com/weather",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        technologies: [
          { name: "JavaScript", logo: "javascript" },
          { name: "Svelte", logo: "svelte" }
        ]
      },
      {
        title: "Portfolio Website",
        description: "Personal portfolio showcasing projects and skills with a modern, responsive design.",
        link: "https://example.com/portfolio",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        technologies: [
          { name: "Svelte", logo: "svelte" },
          { name: "TypeScript", logo: "typescript" }
        ]
      }
    ];
  </script>
  
  <main class="min-h-screen px-4">
    <div class="max-w-4xl mx-auto space-y-6">
      <h1 class="font-bold text-4xl text-white mb-8">Projects</h1>
      <div class="space-y-6">
        {#each projects as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  </main>
  