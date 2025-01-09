<script lang="ts">
    // @ts-nocheck
    import { techLogos } from './TechLogos';
    
interface Technology {
  name: string;
  logo: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: Technology[];
}

export let project: Project;

const externalLinkIcon = `<svg class="w-5 h-5 ml-2 inline text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`;
</script>

<div class="relative">
  <div class="absolute inset-0 bg-white/10 rounded-lg blur-xl"></div>
  <a 
    href={project.link}
    class="block w-full max-sm:aspect-square aspect-video rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style="background-image: url({project.image})"></div>
    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent h-full md:h-2/3 lg:h-2/5">
      <div class="p-6 h-full flex flex-col justify-end">
        <div class="flex items-center mb-2">
          <h2 class="text-2xl font-bold text-white group-hover:underline inline-flex items-center">
            {project.title}
            {@html externalLinkIcon}
          </h2>
        </div>
        <p class=" text-gray-200 mb-4">{project.description}</p>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-sm text-gray-300 mr-2 max-sm:hidden">Made with:</span>
          {#each project.technologies as tech}
            <div class="flex items-center gap-1 bg-white bg-opacity-10 backdrop-blur-sm px-2 py-1 rounded">
              <span class=" w-4 text-center">{@html techLogos[tech.name]}</span>
              <span class=" text-sm text-white">{tech.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </a>
</div>