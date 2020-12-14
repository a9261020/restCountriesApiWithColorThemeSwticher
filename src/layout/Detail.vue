<template>
    <div class="container">
        <div class="detail">
            <router-link to="/">
                <Tag />
            </router-link>
            <Card :home="state?.home" :isDetail="true" />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const components = {
    Tag: defineAsyncComponent(() => import("@/components/Tag.vue")),
    Card: defineAsyncComponent(() => import("@/components/Card.vue")),
};

export default {
    components,
    setup() {
        const route = useRoute();
        const state = ref({
            home: {},
        });
        const alpha3Code = route.params.alpha3Code;
        const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;
        axios.get(url).then((res) => {
            state.value.home = res.data;
            console.log(res.data);
        });
        return {
            state,
        };
    },
};
</script>

<style>
</style>