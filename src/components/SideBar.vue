<template>
    <div class="sidebar">
        <ul id="example-1">
            <li v-for="section in sections" v-bind:key="section">
                {{ section }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        props: {
            sections: Array,
        }
    }
</script>

<style scoped>
    .sidebar {
        width: 100%;
        text-align: center;
        font-size: 1.5em;

    }
    .sidebar > ul {
        list-style: none;
    }
    .sidebar > ul > li {
        padding: 10px 0px;
    }
</style>