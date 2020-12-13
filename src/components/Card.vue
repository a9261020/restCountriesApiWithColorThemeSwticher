<template>
    <div class="card">
        <div class="card-img">
            <img src="https://fakeimg.pl/300" alt="" />
        </div>
        <div class="card-item">
            <h2 class="card-item-title">Germany</h2>
            <p>Population:1234</p>
            <p>Region:Europe</p>
            <p>Capital:berlin</p>
            <div class="border">
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
};
</script>

<style>
</style>