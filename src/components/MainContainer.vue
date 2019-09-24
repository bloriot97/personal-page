<template>
    <div id="main_container">
        <div
                v-for="(section_name, section_id) in $t('sections')"
                v-bind:key="section_name"
                class="section"
        >
            <h1 :id="section_id">{{ $t('sections.' + section_id) }}</h1>
            <ul class="main_list" v-if="section_id != 'skills'">
                <CVItem
                        v-for="(edu, name) in $t(section_id)"
                        v-bind:key="name"
                        :title="edu.title"
                        :location="edu.location"
                        :location_link="edu.location_link"
                        :geoLocation="edu.geoLocation"
                        :date="edu.date"
                        :descriptions="edu.descriptions"
                        :link="edu.link"
                        :transcript="edu.transcript"
                        :moreInfo="edu.moreInfo"
                        v-on:more="openModal(section_id, name)"
                />
            </ul>
            <div v-else>
                <h2>
                    {{$t('skills.cs.title')}}
                </h2>
                <div id="cs">
                    <div
                            v-for="(cs_section, id) in $t('skills.cs.sections')"
                            v-bind:key="id"
                            class="cs_section"
                    >
                        <h3>
                            {{cs_section.title}}
                        </h3>
                        <div class="item_list">
                            <span
                                    v-for="(item, id) in cs_section.content"
                                    v-bind:key="id"
                                    class="cs_item"
                            >
                                {{item}}
                            </span>
                        </div>

                    </div>
                </div>
                <h2>
                    {{$t('skills.languages.title')}}
                </h2>
                <ul class="languages">
                    <li
                            v-for="(language, id) in $t('skills.languages.content')"
                            v-bind:key="id"
                    >
                        {{language.name}} ({{language.level}})
                    </li>
                </ul>
                <h2>
                    {{$t('skills.management.title')}}
                </h2>
                <ul class="management">
                    <li
                            v-for="skill in $t('skills.management.content')"
                            v-bind:key="skill"
                    >
                        {{skill}}
                    </li>
                </ul>
            </div>
        </div>
        <Modal
                ref="modal"
                :section="modalContent.section"
                :name="modalContent.name"
        />
        <!-- <h1 id="education">{{ $t('sections.education') }}</h1>
        <ul class="main_list">
            <CVItem
                    v-for="(edu, name) in $t('education')"
                    v-bind:key="name"
                    :title="edu.title"
                    :location="edu.location"
                    :location_link="edu.location_link"
                    :geoLocation="edu.geoLocation"
                    :date="edu.date"
                    :descriptions="edu.descriptions"
            />
        </ul>

        <h1 id="personal_projects">{{ $t('sections.personal_projects') }}</h1>
        <ul class="main_list">
            <CVItem
                    v-for="(edu, name) in $t('personal_projects')"
                    v-bind:key="name"
                    :title="edu.title"
                    :location="edu.location"
                    :geoLocation="edu.geoLocation"
                    :date="edu.date"
                    :descriptions="edu.descriptions"
                    :techno="edu.techno"
                    :link="edu.link"
            />
        </ul>

        <h1 id="school_projects">{{ $t('sections.school_projects') }}</h1>
        <ul class="main_list">
            <CVItem
                    v-for="(edu, name) in $t('school_projects')"
                    v-bind:key="name"
                    :title="edu.title"
                    :location="edu.location"
                    :geoLocation="edu.geoLocation"
                    :date="edu.date"
                    :descriptions="edu.descriptions"
                    :techno="edu.techno"
            />
        </ul>

        <h1 id="professional_experience">{{ $t('sections.professional_experience') }}</h1>
        <ul class="main_list">
            <CVItem
                    v-for="(edu, name) in $t('professional_experience')"
                    v-bind:key="name"
                    :title="edu.title"
                    :location="edu.location"
                    :geoLocation="edu.geoLocation"
                    :date="edu.date"
                    :descriptions="edu.descriptions"
                    :techno="edu.techno"
            />
        </ul> -->
        <footer> Designed and developed by Benjamin Loriot </footer>
    </div>
</template>

<script>
    import CVItem from './CVItem.vue'
    import Modal from "./Modal";

    export default {
        name: "MainContainer",
        components: {
            Modal,
            CVItem,
        },
        data() {
            return {
                modalContent: {
                    section: 'school_projects',
                    name: 'hackathon',
                }
            }
        },
        methods: {
            openModal(section, name) {
                this.modalContent.section = section
                this.modalContent.name = name
                this.$refs.modal.open()
            }
        },
    }
</script>

<style scoped lang="scss">
#main_container{
    text-align: left;
    padding: 30px 50px;
    @media (max-width: $breakpoint-tablet) {
        padding: 15px;
    }
}
.main_list {
    list-style: none;
    @media screen and (max-width: $breakpoint-phone) {
        padding-left: 10px;
    }
    @media screen and (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) {
        padding-left: 30px;
    }
}
    h1 {
        border-bottom: 3px solid currentColor;
        display: inline-block;
        line-height: 0.85;
        margin: 0em;
        text-shadow:
                2px 2px $clear_primary_color,
                2px -2px $clear_primary_color,
                -2px 2px $clear_primary_color,
                -2px -2px $clear_primary_color;
    }
    .section{
        margin-bottom: 64px;
    }
    #cs {
        display: flex;
        justify-content: space-between;
        & > .cs_section {
            padding: 0 10px;
            max-width: 250px;
            & > h3 {
                margin-top: 0;
            }
            text-align: justify;
            @media (max-width: $breakpoint-tablet) {
                margin-bottom: 30px;
            }
        }
        @media (max-width: $breakpoint-tablet) {
            flex-wrap: wrap;
        }
    }

    .cs_item {

    }
    .cs_item:not(:last-child)::after {
        content: "\00b7";
    }
</style>