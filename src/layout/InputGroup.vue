<template>
    <div class="inputGroup">
        <search-input v-bind="$attrs" />
        <Filter v-bind="$attrs" :countryListComputed="countryListComputed"/>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    "search-input": defineAsyncComponent(() =>
        import("@/components/SearchInput.vue")
    ),
    Filter: defineAsyncComponent(() => import("@/components/Filter.vue")),
};

export default {
    components,
    props: {
        countryListComputed: Array,
    },
};
</script>
