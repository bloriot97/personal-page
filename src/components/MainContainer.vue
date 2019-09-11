<template>
    <div id="main_container">
        <h1 id="education">{{ $t('sections.education') }}</h1>
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
        </ul>

    </div>
</template>

<script>
    import CVItem from './CVItem.vue'

    export default {
        name: "MainContainer",
        components: {
            CVItem,
        },
    }
</script>

<style scoped lang="scss">
#main_container{
    text-align: left;
    padding: 0px 50px;
    @media (max-width: $breakpoint-tablet) {
        padding: 0px;
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
</style>