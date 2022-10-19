<template>
    <div class="w-full h-32 flex items-center">
        <div class="shadow flex w-full h-min">
            <div class="w-5/6 flex text-lg">
                <div class="w-1/2 relative">
                    <input type="text" name="" id="" class=" w-full p-4 border-r" placeholder="Job title, keywords or company">
                    <img src="../assets/search.png" alt="" class="absolute right-3 bottom-auto  w-5 top-5 opacity-30">
                </div>
                <div class="w-1/2 relative">
                    <input type="text" name="" id="" class="w-full  p-4" placeholder="Area, city or town">
                    <img src="../assets/pin.png" alt="" class="absolute right-3 bottom-auto  w-5 top-4 opacity-30">
                </div>
            </div>
            <router-link to="/jobs" class="bg-blue w-1/6 font-bold text-xl flex justify-center items-center text-white">Search Jobs</router-link>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>

</style>