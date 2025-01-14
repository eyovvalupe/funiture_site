<template>
    <section>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="pt-20 sm:pt-24 lg:pt-28">
                <h1
                    class="text-2xl sm:text-[30px] text-[#3B3B98] font-bold mb-6 sm:mb-10">
                    {{ $t('cart.title') }} ({{ cartItems.length }})
                </h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    <div v-for="item in cartItems" 
                         :key="item.id"
                         class="border rounded-lg p-4 sm:p-5">
                        <div class="flex items-center justify-center bg-white rounded-lg mb-4 sm:mb-5">
                            <img :src="`static/img/${item.id}.webp`" 
                                 alt="" 
                                 class="w-full h-[200px] sm:h-[250px] rounded-lg object-cover">
                        </div>
                        <div>
                            <h3 class="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-center">{{ item.price }}</h3>
                            <p class="text-[#606060] font-normal text-sm sm:text-base mb-3 sm:mb-4">{{ item.description }}</p>
                            <div class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2">
                                <button @click="removeFromCart(item)" 
                                        class="text-red-500 flex items-center justify-center gap-2 border py-2 px-6 sm:px-10 rounded-lg hover:border-red-500 transition-colors">
                                    {{ $t('cart.remove') }}
                                </button>
                                <button class="text-[#3B3B98] flex items-center justify-center gap-2 border py-2 px-6 sm:px-10 rounded-lg hover:border-[#3B3B98] transition-colors">
                                    {{ $t('cart.buy') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AOS from 'aos';
import { ref, onMounted } from "vue";
import store from '../../store';

const cartItems = ref([])

onMounted(() => {
    cartItems.value = JSON.parse(localStorage.getItem('watchList') || '[]')
    AOS.init();
})

const removeFromCart = (item) => {
    cartItems.value = cartItems.value.filter(i => i.id !== item.id);
    store.commit('updateCartItems', cartItems.value);
}
</script>

<style lang="scss" scoped></style>