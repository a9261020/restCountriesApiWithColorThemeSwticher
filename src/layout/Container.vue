<template>
    <div class="container">
        <Home v-show="true" />
        <Detail />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    Home: defineAsyncComponent(() => import("@/layout/Home.vue")),
    Detail: defineAsyncComponent(() => import("@/layout/Detail.vue")),
};

export default {
    components,
};
</script>
