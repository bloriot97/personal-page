<template>
    <div class="modal_container" v-if="show" v-on:click="clickOutsideClose">
        <div class="modal">
            <div class="modal_content">
                <img :src="parsed_pictures[0]">
            </div>
            <a class="close" v-on:click="close()"></a>
            <div class="content">
                <h1>{{$t(path + '.title')}}</h1>
                <p v-for="(paragraph, index) in $t(path + '.moreInfo.description')" v-bind:key="index">
                    {{paragraph}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            section: String,
            name: String,
        },
        data() {
            return {
                show: false,
            }
        },
        computed: {
            parsed_pictures() {
                return this.$t(this.section + '.' + this.name + '.moreInfo.pictures').map((img) => require('@/assets/' + img))
            },
            path() {
                return this.section + '.' + this.name
            }
        },
        methods: {
            open() {
                this.show = true;
            },
            close() {
                this.show = false;
            },
            clickOutsideClose(event) {
                if (event.target.className === 'modal_container'){
                    this.close()
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .modal_container {
        height: 100vh;
        width: 100vw;
        background-color: #000000AA;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
    }
    .modal_content {
        width: 100%;
    }
    .content {
        padding: 0 30px;
    }
    .modal {
        height: 90%;
        width: 90%;
        max-width: 900px;
        max-height: 700px;
        background-color: $clear_primary_color;
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
        overflow: scroll;
    }
    .close {
        position: absolute;
        right: 32px;
        top: 32px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
    }
    .close:hover {
        opacity: 1;
    }
    .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }
    .close:before {
        transform: rotate(45deg);
    }
    .close:after {
        transform: rotate(-45deg);
    }

    img {
        width: 100%;
    }
</style>