<template>
    <div class="home">
        <input-group
            :countryList="state.countryList"
            :filterByRegion="filterByRegion"
            :filterByName="filterByName"
        />
        <cards-group :countryListComputed="state.countryListComputed" :isDetail="false" />
    </div>
</template>

<script>
import { defineAsyncComponent, ref, computed } from "vue";
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
            countryListComputed: computed(() => {
                if(state.value.filterName) {
                    return state.value.countryList.filter(item => item.name.indexOf(state.value.filterName) !== -1);
                }
                return state.value.countryList
            }),
            filterName:""
        });

        const filterByName = (value) => {
            state.value.filterName = value
        };

        const filterByRegion = () => {
            console.log("filterByRegion");
        };

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
            filterByRegion,
            filterByName,
        };
    },
};
</script>
