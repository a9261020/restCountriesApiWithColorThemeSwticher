<template>
    <div class="filter" @click="isClickHandler">
        <div class="filter-select">Filter by Region</div>
        <span class="icon-chevron-down"></span>
        <ul class="filter-options" v-show="state.isClick">
            <li
                v-for="region in state.regionList"
                :key="region"
                @click="filtByRegion(region)"
            >
                {{ region }}
            </li>
            <li @click="filtByRegion()">All</li>
        </ul>
    </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
    props: {
        countryListComputed: Array,
    },
    setup(props, { attrs }) {
        const state = reactive({
            regionList: computed(() => {
                const ary = props.countryListComputed;
                const newAry = [
                    ...new Set(ary.map((country) => country.region)),
                ];
                return newAry;
            }),
            isClick: false,
        });

        const isClickHandler = () => {
            state.isClick = !state.isClick;
        };

        const filtByRegion = (region = "all") => {
            attrs.filterByRegion(region);
        };

        return {
            state,
            filtByRegion,
            isClickHandler,
        };
    },
};
</script>