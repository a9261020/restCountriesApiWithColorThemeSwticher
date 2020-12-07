<template>
    <div class="home">
        <input-group />
        <cards-group />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    "input-group": defineAsyncComponent(() => import("@/layout/InputGroup.vue")),
    "cards-group": defineAsyncComponent(() => import("@/layout/CardsGroup.vue")),
};

export default {
    components,
};
</script>