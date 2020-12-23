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
            @input="filtByName"
        />
    </div>
</template>

<script>
export default {
    setup(props, { attrs }) {
        const filtByName = (e) => {
            attrs.filterByName(e.target.value);
        }

        return {
            filtByName
        }
    },
};
</script>