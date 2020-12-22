<template>
    <div class="filter">
        <div class="filter-select">Filter by Region</div>
        <span class="icon-chevron-down"></span>
        <ul class="filter-options" v-show="false">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        <button type="button" @click="$attrs?.filterByRegion()">clickMe</button>
    </div>
</template>

<script>
export default {
    setup(props, { attrs }) {
        const test = () => {
            attrs.filterByRegion();
        };
        return {
            test,
        };
    },
};
</script>