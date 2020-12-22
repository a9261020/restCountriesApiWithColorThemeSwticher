<template>
    <Header />
    <router-view />
</template>

<script>
import Header from "@/components/Header.vue";
import Container from "@/layout/Container.vue";

const components = {
    Header,
    Container,
};

export default {
    components,
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
</style>
