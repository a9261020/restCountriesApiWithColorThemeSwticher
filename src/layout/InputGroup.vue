<template>
    <div class="inputGroup">
        <search-input />
        <Filter />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    "search-input":defineAsyncComponent(() => import("@/components/SearchInput.vue")),
    Filter: defineAsyncComponent(() => import("@/components/Filter.vue")),
};

export default {
    components,
};
</script>
