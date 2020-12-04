<template>
    <div class="container">
        <div class="inputGroup">
            <search-input />
            <Filter />
        </div>
        <div class="cards">cards</div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    SearchInput: defineAsyncComponent(() =>
        import("@/components/SearchInput.vue")
    ),
    Filter: defineAsyncComponent(() => import("@/components/Filter.vue")),
};

export default {
    components,
};
</script>
