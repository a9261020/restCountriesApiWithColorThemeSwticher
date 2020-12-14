<template>
    <div class="cardsGroup">
        <Card
            v-for="home in homeComputed"
            :home="home"
            :isDetail="isDetail"
            :key="home.capital"
            @click="isDetailHandler"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    Card: defineAsyncComponent(() => import("@/components/Card.vue")),
};

export default {
    components,
    props: {
        homeComputed: Array,
        isDetail: Boolean,
    },
    setup(props, { attrs }) {
        const isDetailHandler = () => attrs.onIsDetailHandler();
        return {
            isDetailHandler,
        };
    },
};
</script>