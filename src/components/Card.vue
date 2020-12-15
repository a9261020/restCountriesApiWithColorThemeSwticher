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
            <img :src="state?.country?.flag" alt="" />
        </div>
        <div class="card-item">
            <h2 class="card-item-title">{{ state?.country?.name }}</h2>
            <p>
                Native Name:
                <span>{{ state?.country?.nativeName }}</span>
            </p>
            <p>
                Population:
                <span>{{ state?.country?.population }}</span>
            </p>
            <p>
                Region:
                <span>{{ state?.country?.region }}</span>
            </p>
            <p>
                Sub Region:
                <span>{{ state?.country?.subregion }}</span>
            </p>
            <p>
                Capital:
                <span>{{ state?.country?.capital }}</span>
            </p>
            <p>
                Top Level Domain:
                <span>{{ state?.country?.topLevelDomain?.[0] }}</span>
            </p>
            <p>
                Currencies:
                <span>{{ state?.country?.currencies?.[0]?.name }}</span>
            </p>
            <p>
                Languages:
                <span>{{ state?.country?.languages?.[0]?.name }}</span>
            </p>
            <div class="border">
                <h3>Border Countries</h3>
                <div class="border-list">
                    <router-link
                        v-for="country in state.border"
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
import { defineAsyncComponent, computed, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

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
        const route = useRoute();
        const state = reactive({
            country: props.country,
            border: computed(() => state?.country?.borders?.slice(0, 3)),
        });

        watchEffect(() => {
            const alpha3Code = route.params.alpha3Code;

            if (alpha3Code) {
                const url = `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`;
                axios.get(url).then((res) => (state.country = res.data));
            }
        });

        return {
            state,
        };
    },
};
</script>

<style>
</style>