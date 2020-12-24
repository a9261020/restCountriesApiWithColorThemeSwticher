<template>
    <Suspense>
        <template #default>
            <div class="home">
                <input-group
                    :countryListComputed="state.countryListComputed"
                    :filterByRegion="filterByRegion"
                    :filterByName="filterByName"
                />
                <cards-group
                    :countryListComputed="state.countryListComputed"
                    :isDetail="false"
                />
            </div>
        </template>
        <template #fallback>
            <Loading />
        </template>
    </Suspense>
</template>

<script>
import { defineAsyncComponent, reactive, computed } from "vue";
import axios from "axios";

const components = {
    "input-group": defineAsyncComponent(() =>
        import("@/layout/InputGroup.vue")
    ),
    "cards-group": defineAsyncComponent(() =>
        import("@/layout/CardsGroup.vue")
    ),
    Loading: defineAsyncComponent(() => import("@/components/Loading.vue")),
};

export default {
    inheritAttrs: false,
    props: {
        isDetail: Boolean,
    },
    components,
    setup() {
        const state = reactive({
            countryList: [],
            countryListComputed: computed(() => {
                if (state.filterName) {
                    return state.countryList.filter(
                        (item) => item.name.indexOf(state.filterName) !== -1
                    );
                }
                if (state.filterRegion !== "all") {
                    return state.countryList.filter(
                        (item) => item.region.indexOf(state.filterRegion) !== -1
                    );
                }
                return state.countryList;
            }),
            filterName: "",
            filterRegion: "",
        });

        const filterByName = (value) => {
            state.filterName = value;
        };

        const filterByRegion = (region) => {
            state.filterRegion = region;
        };

        const countiresAPI = "DEU;USA;BRA;ISL;AFG;ALA;ALB;DZA";
        const url = `https://restcountries.eu/rest/v2/alpha?codes=${countiresAPI}`;
        axios.get(url).then(
            (res) =>
                (state.countryList = res.data.map((country) => {
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
