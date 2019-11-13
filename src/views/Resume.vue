<template>
    <div class="resume">
        <div id="flex_container">
            <div id="sidebar_container" class="no-print">
                <img id='picture' src="@/assets/picture.png" alt="Normally you should see me :)"/>
                <h1> Benjamin LORIOT </h1>
                <div class="links">
                    <a href="https://www.linkedin.com/in/benjamin-loriot-54248a14a/">
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                    <a href="https://github.com/bloriot97">
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                </div>
                <div id="description">
                    <vue-markdown>{{$t('description')}}</vue-markdown>
                </div>
                <div>
                    {{$t('email')}}
                </div>
                <div>
                    {{$t('phone_number')}}
                </div>
                <SideBar selected="education"/>
            </div>
            <div id="main_body">
                <MainContainer/>
            </div>
        </div>
        <LanguageSwitch id="language_switch" class="no-print"/>
    </div>
</template>

<script>
    import SideBar from '../components/SideBar.vue'
    import MainContainer from '../components/MainContainer.vue'
    import LanguageSwitch from '../components/LanguageSwitch.vue'
    import VueMarkdown from 'vue-markdown'

    export default {
        name: "Resume",
        components: {
            SideBar,
            MainContainer,
            LanguageSwitch,
            VueMarkdown,
        }
    }
</script>

<style scoped lang="scss">
    #flex_container {
        width: 100%;
        display: flex;
        @media screen and (max-width: $breakpoint-phone) {
            flex-direction: column;
            align-items: center;
        }
        @media screen and (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) {
        }
    }
    #sidebar_container {
        width: $side_bar_width;
    //min-width: 280px;
        background-color: $side_bar_color;
        text-align: center;
        padding: 20px;
        color: set-button-text-color($side_bar_color);
        @media screen and (max-width: $breakpoint-phone) {
            width: 100%;
            padding: 00px;
        }
        & > #description {
            padding: 00px 0px 40px 0;
            @media screen and (max-width: $breakpoint-phone) {
                padding: 20px 10px 40px 10px;
            }
        }
        & > .sidebar > ul {
            padding: 0px 10px;
        }
    }
    #picture {
        width: 80%;
        border-radius: 50%;
        @media screen and (max-width: $breakpoint-phone) {
            width: 50%;
            margin-top: 35px;
        }
    }
    #language_switch{
        position: fixed;
        top: 20px;
        right: 20px;
    }
    #main_body{
        flex: 1 auto;
        @media screen and (max-width: $breakpoint-phone) {
            width: 100%;
        }
    }

    footer {
        text-align: center;
        width: 100%;
        padding: 30px 0 10px 0px;
    }
</style>