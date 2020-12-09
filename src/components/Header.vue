<template>
    <header class="header">
        <h1 class="header-title">Where in the world</h1>
        <div class="theme" @click="changeTheme">
            <span class="theme-icon icon-moon-o"></span>
            <button class="theme-switch">Dark Mode</button>
        </div>
    </header>
</template>

<script>
export default {
    setup() {
        const changeTheme = () => {
            const app = document.querySelector("#app");
            const theme = app.classList[0];
            if (theme === "dark") {
                app.classList.replace("dark", "light");
            } else {
                app.classList.replace("light", "dark");
            }
        };
        
        return {
            changeTheme,
        };
    },
};
</script>