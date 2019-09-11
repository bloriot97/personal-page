<template>
    <div class="sidebar">
        <ul id="example-1">
            <li v-for="(value, name) in $t('sections')" v-bind:key="name">
                <a :href="'#' + name"> {{ value }} </a>
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

<style scoped lang="scss">
    .sidebar {
        width: 100%;
        text-align: center;
        font-size: 1.5em;
    }
    .sidebar > ul {
        list-style: none;
        padding: 0;
    }
    .sidebar > ul > li {
        padding: 10px 0px;
    }
</style>