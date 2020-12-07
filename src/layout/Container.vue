<template>
    <div class="container">
        <div class="inputGroup">
            <search-input />
            <Filter />
        </div>
        <div class="cardsGroup">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    SearchInput: defineAsyncComponent(() =>
        import("@/components/SearchInput.vue")
    ),
    Filter: defineAsyncComponent(() => import("@/components/Filter.vue")),
    Card: defineAsyncComponent(() => import("@/components/Card.vue")),
};

export default {
    components,
};
</script>
