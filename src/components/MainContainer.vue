<template>
    <div id="main_container">
        <h1 id="education">{{ $t('sections.education') }}</h1>
        <ul>
            <li v-for="edu in $t('education')" v-bind:key="edu.title">
                <div class="education" >
                    <h2 class="item_title">
                        <div> {{ edu.title }}, <span class="location"> {{edu.location}}</span> </div> <div class="date"> ({{edu.date}}) </div>
                    </h2>
                    <div>
                        {{edu.description}}
                    </div>
                </div>
            </li>
        </ul>
        <h1 id="personal_projects">{{ $t('sections.personal_projects') }}</h1>
        <h1 id="professional_experience">{{ $t('sections.professional_experience') }}</h1>
    </div>
</template>

<script>
    export default {
        name: "MainContainer",
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
ul {
    list-style: none;
    @media screen and (max-width: $breakpoint-phone) {
        padding-left: 10px;
    }
    @media screen and (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) {
        padding-left: 30px;
    }
}
.item_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.date{
    font-size: 0.7em;
    color: #526c85;
}
</style>