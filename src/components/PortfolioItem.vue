<template>
    <div
        class="portfolio-item"
        v-on:click="$emit('more')"
    >
        <div
            class="thumbnail"
            :style="{ backgroundImage: `url('${imgSrc}')` }"
        >
        </div>
        <div class="title">
            <h2>
                {{information.shortTitle}}
            </h2>
        </div>
        <div class="description">
            {{information.description}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "PortfolioItem",
        data() {
            return {
                imgSrc: require('@/assets/hackathon.jpg'),
            }
        },
        props: {
            information: {
                type: Object,
                required: true
            },
        },
        computed: {
        }
    }
</script>

<style scoped lang="scss">
    $portfolio-thumbnail-height: 42%;


    .portfolio-item{
        width: 200px;
        height: 300px;
        background-color: $primary_color;
        color: $clear_primary_color;
        overflow: hidden;
        cursor: pointer;
    }

    .thumbnail{
        height: $portfolio-thumbnail-height;
        background-position: center;
        background-size: cover;
    }

    .description{
        height: 100% - $portfolio-thumbnail-height;
        overflow: hidden;
        padding: 25px 8px 8px 8px;
        box-sizing: border-box;
    }

    .title{
        font-size: 0.75em;
        display: block;
        position: absolute;
        transform: translate(10px, -50%);
        background-color: $clear_primary_color;
        color: $primary_color;
        padding: 3px;
        & > h2 {
            margin: 0;
        }

    }

</style>