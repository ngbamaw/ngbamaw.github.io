<template>
    <div id="app">
        <Counter :number="number" />
    </div>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
    name: "App",
    components: {
        Counter
    },
    data() {
        return {
            number: 10
        };
    },
    mounted() {
        setTimeout(() => this.number++, 1000);
    }
};
</script>

<style>
#app {
    height: 100vh;
    display: flex;
}
.counter {
    margin: auto;
}
</style>
