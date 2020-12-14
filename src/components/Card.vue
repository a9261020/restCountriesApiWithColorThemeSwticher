<template>
    <div class="card" v-show="!isDetail">
        <router-link :to="`/detail/${country?.alpha3Code}`">
            <div class="card-img">
                <img :src="country?.flag" alt="" />
            </div>
            <div class="card-item">
                <h2 class="card-item-title">{{ country?.name }}</h2>
                <p>
                    Population: <span>{{ country?.population }}</span>
                </p>
                <p>
                    Region: <span>{{ country?.region }}</span>
                </p>
                <p>
                    Capital: <span>{{ country?.capital }}</span>
                </p>
            </div>
        </router-link>
    </div>

    <div class="card" v-show="isDetail">
        <div class="card-img">
            <img :src="country?.flag" alt="" />
        </div>
        <div class="card-item">
            <h2 class="card-item-title">{{ country?.name }}</h2>
            <p>
                Native Name:
                <span>{{ country?.nativeName }}</span>
            </p>
            <p>
                Population:
                <span>{{ country?.population }}</span>
            </p>
            <p>
                Region:
                <span>{{ country?.region }}</span>
            </p>
            <p>
                Sub Region:
                <span>{{ country?.subregion }}</span>
            </p>
            <p>
                Capital:
                <span>{{ country?.capital }}</span>
            </p>
            <p>
                Top Level Domain:
                <span>{{ country?.topLevelDomain?.[0] }}</span>
            </p>
            <p>
                Currencies:
                <span>{{ country?.currencies?.[0]?.name }}</span>
            </p>
            <p>
                Languages:
                <span>{{ country?.languages?.[0]?.name }}</span>
            </p>
            <div class="border">
                <h3>Border Countries</h3>
                <div class="border-list">
                    <router-link
                        v-for="country in border"
                        :key="country"
                        :to="`/detail/${country}`"
                    >
                        <Tag>{{ country }}</Tag>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent, computed } from "vue";

const components = {
    Tag: defineAsyncComponent(() => import("@/components/Tag.vue")),
};

export default {
    components,
    props: {
        country: {
            type: Object,
        },
        isDetail: Boolean,
    },
    setup(props) {
        const border = computed(() => props?.country?.borders?.slice(0, 3));

        return {
            border,
        };
    },
};
</script>

<style>
</style>