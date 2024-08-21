<script setup>

// functions
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<template>
    <div id="toTop" style="display: block;" @click="scrollToTop"><i class="fa fa-chevron-up"></i></div>
</template>