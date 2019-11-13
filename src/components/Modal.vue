<template>
    <transition name="fade">
        <div class="modal_container" v-if="show" v-on:click="clickOutsideClose">
            <div class="modal">
                <div
                    class="image"
                    :style="{ backgroundImage: `url('${parsed_pictures[0]}')` }"
                >
                </div>
                <a class="close" v-on:click="goHome()"></a>
                <div class="content_container">
                    <div class="content">
                        <div class="title">
                            <div class="links side-link">
                                    <a
                                            v-if="information.link"
                                            :href="information.link"
                                    >
                                        <font-awesome-icon :icon="['fas', 'link']" />
                                    </a>
                                    <a
                                        v-if="information.github"
                                        :href="information.github"
                                    >
                                        <font-awesome-icon :icon="['fab', 'github']" />
                                    </a>
                                </div>
                            <h1>
                                {{information.title}}
                            </h1>
                        </div>

                        <ul class="outcomes">
                            <li
                                    v-for="name in information.moreInfo.key_outcome"
                                    v-bind:key="name"
                            >
                                {{name}}
                            </li>
                        </ul>
                        <div class="body">
                            <p
                                v-for="(paragraph, index) in information.moreInfo.description"
                                v-bind:key="index"
                            >
                                {{paragraph}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
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
            information() {
                return this.$t(this.path);
            },
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
            goHome(){
                this.$router.push({name: 'resume'})
            },
            clickOutsideClose(event) {
                if (event.target.className === 'modal_container'){
                    this.goHome()
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
    .image {
        width: 100%;
        height: 400px;
        background-position: center;
        background-size: cover;
    }
    .content {
        margin: 0 30px 30px 65px;
    }
    .modal {
        height: 90%;
        width: 90%;
        max-width: 900px;
        max-height: 900px;
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

    .title {

        & > h1{
            margin-bottom: 10px;
            display: inline-block;
        }

    }

    .side-link {
        position: absolute;
        display: flex;
        flex-direction: column;
        transform: translate(-50px, 25px);
        color: $sub_title_color;
    }


    .outcomes{
        list-style-type: none;
        padding: 0;
        margin: 0px 0 20px 0;
        & > li {
            display:inline-block;
            padding: 3px 6px;
            background-color: $sub_title_color;
            color: set-button-text-color($sub_title_color);
            margin: 0px 10px 0 0;
        }
    }
    .content_container{
        display: flex;
        justify-content: center;
        & > .content{
            max-width: 500px;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>