<template>
    <div class="cardsGroup">
        <Card
            @click="sayHi"
            v-for="home in homeComputed"
            :home="home"
            :isDetail="isDetail"
            :key="home.capital"
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
    setup() {
        const sayHi = () => {
            console.log("Hello");
        };
        return {
            sayHi,
        };
    },
};
</script>