<template>
    <section class="pt-20 sm:pt-24 lg:pt-28">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <h1
                    class="text-2xl sm:text-[30px] text-[#3B3B98] font-bold mb-6 sm:mb-10 cursor-pointer"
                    @click="handleCategorySelect('')">Catalogs
                </h1>
                <h2 class="text-2xl sm:text-[30px] text-[#3B3B98] font-bold mb-6 sm:mb-10">{{ selectedCategory ? "-> " + selectedCategory : "" }}</h2>
            </div>
            
            <div class="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <Sidebar 
                        class="w-full lg:w-[20%]" 
                        @selectCategory="handleCategorySelect" />
                
                <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div v-for="product in filteredProducts" 
                         :key="product.id"
                         class="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
                         @click="jump(product.id)">
                        <img :src="`static/img/${product.id}.webp`" 
                             class="w-full h-40 sm:h-48 object-cover mb-4 rounded-lg">
                        <h3 class="font-semibold mb-2">{{ product.id }}</h3>
                        <p class="text-gray-600">{{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Sidebar from '../../components/Sidebar.vue';
import AOS from 'aos';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { list } from '@/utils/Data';

const selectedCategory = ref('');
const router = useRouter();

const jump = (id) => {
    router.push({ name: 'detail', query: { id } })
}

const handleCategorySelect = (category) => {
    selectedCategory.value = category;
};

const filteredProducts = computed(() => {
    if (!selectedCategory.value) {
        return list;
    }
    return list.filter(product => product.type === selectedCategory.value);
});

AOS.init();

onMounted(() => {
    window.addEventListener('updateCategory', (event) => {
        handleCategorySelect(event.detail.category);
    });
});

onUnmounted(() => {
    window.removeEventListener('updateCategory', (event) => {
        handleCategorySelect(event.detail.category);
    });
});
</script>

<style lang="scss" scoped></style>