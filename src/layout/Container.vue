<template>
    <div class="container">
        <router-view />
    </div>
</template>

<script>
import { defineAsyncComponent, ref, computed } from "vue";
import axios from "axios";

const components = {
    Home: defineAsyncComponent(() => import("@/layout/Home.vue")),
    Detail: defineAsyncComponent(() => import("@/layout/Detail.vue")),
};

export default {
    components,
    setup() {
        const state = ref({
            countries: [],
            home: [],
            detail: [],
        });

        const countiresAPI = "DEU;USA;BRA;ISL;AFG;ALA;ALB;DZA";
        const url = `https://restcountries.eu/rest/v2/alpha?codes=${countiresAPI}`;
        axios.get(url).then((res) => (state.value.countries = res.data));

        const homeComputed = computed(() =>
            state.value?.countries.map((country) => {
                const homeObj = {
                    name: country?.name,
                    flag: country?.flag,
                    population: country?.population,
                    region: country?.region,
                    capital: country?.capital,
                    alpha3Code: country?.alpha3Code,
                };
                return homeObj;
            })
        );

        return {
            state,
            homeComputed,
        };
    },
};
</script>
