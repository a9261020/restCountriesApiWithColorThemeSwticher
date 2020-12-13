<template>
    <Header />
    <Container :countries="state.countries" />
</template>

<script>
import { defineAsyncComponent, reactive } from "vue";
import axios from "axios";

const components = {
    Header: defineAsyncComponent(() => import("@/components/Header.vue")),
    Container: defineAsyncComponent(() => import("@/layout/Container.vue")),
};

export default {
    name: "App",
    components,
    setup() {
        let state = reactive({
            countries: [],
        });
        const countiresAPI = "DEU;USA;BRA;ISL;AFG;ALA;ALB;DZA";
        const url = `https://restcountries.eu/rest/v2/alpha?codes=${countiresAPI}`;
        axios.get(url).then((res) => (state.countries = res.data));

        return {
            state,
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
</style>