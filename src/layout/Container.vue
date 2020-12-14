<template>
    <div class="container">
        <Home
            v-show="!state.isDetail"
            :homeComputed="homeComputed"
            :isDetail="state.isDetail"
            :isDetailHandler="isDetailHandler"
        />
        <Detail v-show="state.isDetail" />
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

        const isDetailHandler = () =>
            (state.value.isDetail = !state.value.isDetail);

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
            isDetailHandler,
        };
    },
};
</script>
