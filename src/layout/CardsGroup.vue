<template>
    <div class="cardsGroup">
        <Card
            v-for="country in countryListComputed"
            :country="country"
            :isDetail="isDetail"
            :key="country.capital"
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
        countryListComputed: Array,
        isDetail: Boolean,
    },
};
</script>