<script>
import "../app.css";
import Nav from "$lib/Nav.svelte";
</script>
<div class="flex flex-col md:flex-row md:pt-16 md:pb-16 bg-white dark:bg-black">

    <div class="" style=""><Nav /> </div>    
    

    
    <div class="flex flex-col flex-grow p-4">
        <slot></slot>
    </div>
    
</div>


