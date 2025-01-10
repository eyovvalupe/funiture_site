<template>
    <router-view></router-view>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<style lang="css">
@media screen and (min-width: 1600px) {
    .responsible_container {
        width: 1400px;
        margin: 0 auto;
    }
}

@media screen and (max-width: 1600px) {
    .responsible_container {
        width: 1200px;
        margin: 0 auto;
    }
}

@media screen and (max-width: 1400px) {
    .responsible_container {
        width: 1100px;
        margin: 0 auto;
    }
}
</style>