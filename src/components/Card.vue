<template>
    <div class="card">
        <div class="card-img">
            <img :src="home?.flag" alt="" />
        </div>
        <div class="card-item">
            <h2 class="card-item-title">{{ home?.name }}</h2>
            <p>Population: {{ home?.population }}</p>
            <p>Region: {{ home?.region }}</p>
            <p>Capital: {{ home?.capital }}</p>
            <div class="border" v-show="isDetail">
                <h3>Border Countries</h3>
                <div class="border-list">
                    <Tag>France</Tag>
                    <Tag>Germany</Tag>
                    <Tag>Netherlands</Tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    Tag: defineAsyncComponent(() => import("@/components/Tag.vue")),
};

export default {
    components,
    props: {
        home: {
            type: Object,
        },
        isDetail: Boolean,
    },
};
</script>

<style>
</style>