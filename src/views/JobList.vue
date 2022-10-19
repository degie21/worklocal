<template>
    <div>
        <Header></Header>
        <div class="bg-jobsearch-blue">
            <div class="w-4/5 mx-auto">
                <SearchBar></SearchBar>
            </div>
        </div>
        <div class="py-5 shadow-2xl mb-10">
            <div class="w-4/5 mx-auto flex justify-between ">
                <div>
                    <p><span class="font-bold">{{joblists.length}}</span> of 4012 jobs</p>
                </div>
                <div class="w-20 flex justify-evenly items-center border-solid border-gray-b rounded border">
                    <div>
                        <img src="../assets/gridview.png" alt="" class="w-4">
                    </div>
                    <div>
                        <img src="../assets/listview-gray.png" class="w-4">
                    </div>
                </div>
            </div>
        </div>
        <div class="w-4/5 mx-auto">
            <div class="grid-cols-3 grid gap-5 gap-y-5">
                <Jobs v-for="(joblist, index) in joblists" :key="joblist.id" :joblist="joblist"></Jobs>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import SearchBar from '../components/SearchBar.vue';
import $ from 'jquery'
import data from '../../data.json'
import Jobs from '../components/Jobs.vue'
export default {
    components: { Header, Footer, SearchBar, Jobs, },
    data(){
        return{
            joblists: data,
            page: 5
        }
    }
}
</script>

<style>

</style>