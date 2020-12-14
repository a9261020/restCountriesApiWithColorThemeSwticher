<template>
    <div class="home">
        <input-group />
        <cards-group :countryList="state.countryList" :isDetail="false" />
    </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
import axios from "axios";

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
        isDetail: Boolean,
    },
    components,
    setup() {
        const state = ref({
            countryList: [],
        });

        const countiresAPI = "DEU;USA;BRA;ISL;AFG;ALA;ALB;DZA";
        const url = `https://restcountries.eu/rest/v2/alpha?codes=${countiresAPI}`;
        axios.get(url).then(
            (res) =>
                (state.value.countryList = res.data.map((country) => {
                    const newCountryList = {
                        name: country?.name,
                        flag: country?.flag,
                        population: country?.population,
                        region: country?.region,
                        capital: country?.capital,
                        alpha3Code: country?.alpha3Code,
                    };
                    return newCountryList;
                }))
        );

        return {
            state,
        };
    },
};
</script>
