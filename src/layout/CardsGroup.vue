<template>
    <div class="cardsGroup">
        <Card />
        <Card />
        <Card />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    Card: defineAsyncComponent(() => import("@/components/Card.vue")),
};

export default {
    components,
};
</script>