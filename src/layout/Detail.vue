<template>
    <div class="detail">
        <Tag />
        <Card />
        <div class="border">
            <h3>Border Countries</h3>
            <div class="border-list">
                <Tag>France</Tag>
                <Tag>Germany</Tag>
                <Tag>Netherlands</Tag>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const components = {
    Tag: defineAsyncComponent(() => import("@/components/Tag.vue")),
    Card: defineAsyncComponent(() => import("@/components/Card.vue")),
};

export default {
    components,
};
</script>

<style>
</style>