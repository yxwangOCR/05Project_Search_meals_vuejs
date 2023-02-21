

<template>
    <div class="bg-gray-100 min-h-screen">
        <header class="bg-white shadow-md h-16 w-full flex justify-between items-center">
            <router-link :to="{ name: 'home' }" class="px-8 font-bold">
                My Meals
            </router-link>
            <div class="px-8 h-full flex items-center gap-8">
                <router-link to="/"
                    class="h-full flex items-center hover:bg-pink-100 hover:text-blue-800 transition-colors px-2">
                    Search Meals
                </router-link>
                <router-link to="/"
                    class="h-full flex items-center hover:bg-pink-100 hover:text-blue-800 transition-colors px-2">
                    Meals by Letter
                </router-link>
                <router-link to="/"
                    class="h-full flex items-center hover:bg-pink-100 hover:text-blue-800 transition-colors px-2">
                    Meals by Ingredients
                </router-link>
            </div>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup>

</script>

<style scoped></style>
