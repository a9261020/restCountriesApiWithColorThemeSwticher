<template>
    <Header />
    <Container />
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    Header: defineAsyncComponent(() => import("@/components/Header.vue")),
    Container: defineAsyncComponent(() => import("@/layout/Container.vue"))
};

export default {
    name: "App",
    components,
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
</style>