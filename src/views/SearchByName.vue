<template>
    <div class="p-8">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals ..."
            @change="searchMeals" />
    </div>
    <div>
        <div v-for="meal of meals" :key="meal.idMeal">
            <img src="" alt="">
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'
import store from '../store';
const keywords = ref('');

const meals = computed(() => { store.state.searchedMeals })
const searchMeals = () => { store.dispatch('searchMeals', keywords.value) }

</script>