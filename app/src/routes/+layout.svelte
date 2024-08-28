<script>
import "../app.css";
import Nav from "$lib/Nav.svelte";
</script>
<div class="flex flex-col md:flex-row md:pt-16 md:pb-16">
    <Nav /> 
    <slot></slot>
</div>


