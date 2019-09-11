<template>
    <li>
        <div class="education" >
            <h2 class="item_title">
                <div>
                    <div>
                        <OptionalLink :text="title" :link="link" />
                    </div>
                    <div class="sub_title" v-if="location"> <OptionalLink :text="location" :link="location_link" />, <span class="location"> {{geoLocation}}</span> </div>
                </div>
                <div class="date nobreak"> ({{date}}) </div>
            </h2>
            <div>
                <ul>
                    <li v-for="(value, index) in descriptions" v-bind:key="index">
                        {{value}}
                        <span v-if="techno" class="techno">
                            (
                                {{ techno.join(', ')}}
                            )
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>

<script>
    import OptionalLink from './OptionalLink.vue'

    export default {
        name: "CVItem",
        components: {
            OptionalLink
        },
        props: {
            title: String,
            location: String,
            location_link: String,
            geoLocation: String,
            date: String,
            descriptions: Array,
            techno: Array,
            link: String,
        }
    }
</script>

<style scoped lang="scss">
    .item_title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.4em;
    }
    .date{
        font-size: 0.7em;
        color: $sub_title_color;
    }
    .sub_title{
        font-size: 0.7em;
        padding-left: 10px;
        color: $sub_title_color;
    }
    .techno {
        font-size: 0.9em;
        color: $sub_title_color;
    }
</style>