<template>
    <li>
        <div class="education" >
            <h2 class="item_title">
                <div>
                    <div class="title">
                        <OptionalLink :text="title" :link="link" />
                        <a v-if="moreInfo" v-on:click="$emit('more')" class="more">({{$t('more')}})</a>
                        <a v-if="transcript" :href="transcript" class="more">({{$t('transcript')}})</a>
                    </div>
                    <div class="sub_title" v-if="location">
                        <OptionalLink :text="location" :link="location_link"/>, <span class="location"> {{geoLocation}}</span>
                    </div>
                </div>
                <div class="date nobreak"> ({{date}}) </div>
            </h2>
            <div>
                <ul>
                    <li v-for="(value, index) in descriptions" v-bind:key="index">
                        {{value.body}}
                        <span v-if="value.key_outcome" class="techno">
                            (
                                {{ value.key_outcome.join(', ')}}
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
            link: String,
            transcript: String,
            moreInfo: Object,
        }
    }
</script>

<style scoped lang="scss">
    .item_title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0em;

    }
    .date{
        font-size: 0.7em;
        color: $sub_title_color;
    }
    .title {
        @media screen and (max-width: $breakpoint-phone) {
            padding-bottom: 7px;
        }
    }
    .sub_title{
        font-size: 0.7em;
        //padding-left: 10px;
        transform: translate(0px, -4px);
        color: $sub_title_color;
        font-style: italic;
    }
    .techno {
        font-size: 0.9em;
        color: $sub_title_color;
    }
    .more {
        font-size: 0.7em;
        color: $sub_title_color;
    }
    .more:hover {
        color: $link_color;
        transition: 0.1s;
    }
</style>