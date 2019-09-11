<template>
    <a v-if="link" :href="link" >
        {{ text }}
    </a>
    <span v-else>
        {{ text }}
    </span>
</template>

<script>
    export default {
        name: "OptionalLink",
        props: {
            'text': String,
            'link': String,
        }
    }
</script>

<style scoped>

</style>