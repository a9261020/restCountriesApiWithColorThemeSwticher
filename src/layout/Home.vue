<template>
    <div class="home">
        <input-group />
        <cards-group :homeComputed="homeComputed" :isDetail="isDetail" />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    "input-group": defineAsyncComponent(() =>
        import("@/layout/InputGroup.vue")
    ),
    "cards-group": defineAsyncComponent(() =>
        import("@/layout/CardsGroup.vue")
    ),
};

export default {
    props: {
        homeComputed: Array,
        isDetail: Boolean,
    },
    components,
};
</script>