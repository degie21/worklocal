<template>
    <div class="">
        <Header></Header>
        <div class="bg-home bg-no-repeat bg-cover bg-top">
            <div class="w-4/5 mx-auto my-auto flex flex-col pt-20">
                <div class="w-3/5">
                    <h1 class="text-7xl font-bold pb-4 text-text">
                        Bagong Trabaho.
                        Bagong Pagasa.
                    </h1>
                    <h2 class="text-3xl text-text">
                        Abot kamay mo na ang higit sa<br>
                        4,012 na trabaho sa Pinas!
                    </h2>
                </div>
                <SearchBar class="mb-6"></SearchBar>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import SearchBar from '../components/SearchBar.vue';
import Footer from '../components/Footer.vue';

export default {
    components: { Header, SearchBar, Footer }
}
</script>

<style>

</style>