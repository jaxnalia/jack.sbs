<script>
import "../app.css";
import Nav from "$lib/Nav.svelte";
</script>
<div class="flex flex-col tablet:flex-row tablet:pt-16 tablet:pb-16 bg-black">

    <div class="" style=""><Nav /> </div>    
    

    
    <div class="flex flex-col flex-grow p-4">
        <slot></slot>
    </div>
    
</div>


