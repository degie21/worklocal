<template>
    <div class="bg-white shadow-xl">
        <div class="">
            <img :src=joblist.jobImage alt="" srcset="" class="h-32 w-full object-cover">
        </div>
        <div class="pl-10 py-10">
            <h3 class="text-3xl font-bold">{{joblist.jobTitle}}</h3>
            <h4 class="text-2xl font-medium">{{joblist.companyName}}</h4>
            <div class="flex">
                <img src="../assets/pin.png" alt="" class="w-2.5 h-full self-center">
                <h5 class="pl-2 text-sm">{{joblist.jobLocation}}</h5>
            </div>
        </div>
        <div class="p-5 bg-light-grey">
            <a class="bg-blue w-full px-28 py-3 text-white" :href=joblist.jobLink>Apply Now</a>
        </div>
        <div class="m-3 border-solid border-jobsearch-blue rounded border p-1">
            <span class="text-jobsearch-blue" v-for="category in joblist.jobCategory">
                <a class="px-1 font-medium" href="#">
                    {{category.catType}}
                </a>
                <span v-if="parseInt(category.catid) != parseInt(joblist.jobCategory.length)"> / </span>
            </span>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        joblist: ''
    }
}
</script>

<style>

</style>