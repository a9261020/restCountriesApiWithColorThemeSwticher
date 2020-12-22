<template>
    <div class="searchInput">
        <span
            aria-label="searchInput Icon"
            class="searchInput-icon icon-search"
        ></span>
        <input
            class="searchInput-input"
            placeholder="Search for a country..."
            aria-label="Search for a country"
            type="text"
            @input="test"
        />
    </div>
</template>

<script>
export default {
    methods:{
        test(e){
            this.$attrs?.filterByName(e.target.value);
        }
    }
}
</script>