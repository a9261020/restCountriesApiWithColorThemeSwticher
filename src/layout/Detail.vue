<template>
    <Suspense>
        <template #default>
            <div class="detail">
                <router-link to="/">
                    <Tag />
                </router-link>
                <Card :country="state?.country" :isDetail="true" />
            </div>
        </template>
        <template #fallback>
            <Loading />
        </template>
    </Suspense>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const components = {
    Tag: defineAsyncComponent(() => import("@/components/Tag.vue")),
    Card: defineAsyncComponent(() => import("@/components/Card.vue")),
    Loading: defineAsyncComponent(() => import("@/components/Loading.vue")),
};

export default {
    components,
    setup() {
        const route = useRoute();
        const state = ref({
            country: {},
        });
        const alpha3Code = route.params.alpha3Code;
        const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;
        axios.get(url).then((res) => (state.value.country = res.data));

        return {
            state,
        };
    },
};
</script>

<style>
</style>