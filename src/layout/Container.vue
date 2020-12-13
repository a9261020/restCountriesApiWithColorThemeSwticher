<template>
    <div class="container">
        {{state.isDetail}}
        <Home
            v-show="true"
            :homeComputed="homeComputed"
            v-model:isDetail="state.isDetail"
        />
        <Detail v-show="false" />
    </div>
</template>

<script>
import { defineAsyncComponent, ref, computed } from "vue";

const components = {
    Home: defineAsyncComponent(() => import("@/layout/Home.vue")),
    Detail: defineAsyncComponent(() => import("@/layout/Detail.vue")),
};

export default {
    props: {
        countries: Array,
    },
    components,
    setup(props) {
        const state = ref({
            home: [],
            detail: [],
            isDetail: false,
        });

        const homeComputed = computed(() =>
            props?.countries.map((country) => {
                const homeObj = {
                    name: country?.name,
                    flag: country?.flag,
                    population: country?.population,
                    region: country?.region,
                    capital: country?.capital,
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
