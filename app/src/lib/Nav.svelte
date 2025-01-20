<script>
    import { page } from '$app/stores';
</script>

<div 
  class="p-4 list-none flex flex-row tablet:flex-col mt-0 gap-4 tablet:gap-2 items-center tablet:items-start text-white" 
  style="position: sticky; top: 4rem;"
>
  <a href="/" aria-label="Home">
    <p class="text-2xl font-bold whitespace-nowrap">Jack Sendall</p>
  </a>
  <a href="/">
    <li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="text-xl hover:bg-white hover:text-black rounded-sm px-1">
        About
    </li>
  </a>
  <a href="/projects">
    <li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined} class="text-xl hover:bg-white hover:text-black rounded-sm px-1">
        Projects
    </li>
  </a>
</div>

<style>
    li[aria-current='page'] {
        background-color: white;
        color:black
    }
    </style>