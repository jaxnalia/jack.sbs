<script>
import "../app.css";
import Nav from "$lib/Nav.svelte";
</script>
<div class="flex flex-col md:flex-row">
    <Nav /> 
    <slot></slot>
</div>


