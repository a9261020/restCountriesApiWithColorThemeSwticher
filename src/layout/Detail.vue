<template>
    <div class="detail">
        <Tag />
        <Card />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    Tag: defineAsyncComponent(() => import("@/components/Tag.vue")),
    Card: defineAsyncComponent(() => import("@/components/Card.vue")),
};

export default {
    components,
};
</script>

<style>
</style>