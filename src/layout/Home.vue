<template>
    <div class="home">
        <input-group />
        <cards-group
            :homeComputed="homeComputed"
            :isDetail="isDetail"
            @isDetailHandler="isDetailHandler"
        />
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
    inheritAttrs: false,
    props: {
        homeComputed: Array,
        isDetail: Boolean,
        isDetailHandler: Function,
    },
    components,
};
</script>