<template>
    <div class="container">
        <Home />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    Home: defineAsyncComponent(() => import("@/layout/Home.vue")),
};

export default {
    components,
};
</script>
