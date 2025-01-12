<template>
    <header class="fixed z-10 shadow-lg w-full bg-[#A7C5BD] transition duration-1000">
        <div class="container mx-auto px-5">
            <nav class="w-full flex items-center justify-between py-5">
                <div>
                    <a href="/" class="flex items-center">
                        <div class="w-[50px] h-[50px] rounded-[50px] mr-[10px]">
                            <img src="/static/img/logo.webp" alt="" />
                        </div>
                        <h1 class="text-[24px] w-[100px] text-[#3B3B98] font-bold">Lihe</h1>
                    </a>
                </div>
                <div class="hidden lg:block">
                    <ul class="flex items-center gap-8 text-[16px] font-bold">
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
                            <router-link to="/about">About Us</router-link>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
                            <router-link to="/catalog">Catalog</router-link>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
                            <router-link to="/contact">Contact</router-link>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white" v-if="token">
                            <router-link to="/cart">My Cart</router-link>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white cursor-pointer" v-if="token" @click="logout">
                            <div>Log out</div>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white" v-if="!token">
                            <router-link to="/login">login</router-link>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white" v-if="!token">
                            <router-link to="/register">register</router-link>
                        </li>
                    </ul>
                </div>
                <div class="lg:hidden reletive">
                    <button @click="toggleMenu" class="flex p-1 rounded-lg focus:ring-2 focus:ring-[#3B3B98]">
                        <i class='text-[24px] text-white font-bold' :class="menu ? 'bx bx-x' : 'bx bx-menu'"></i>
                    </button>
                    <ul class="absolute bg-[#A7C5BD] w-[60%] sm:w-[40%] h-[100vh] right-0 top-[76px] text-white font-bold text-[18px]"
                        :class="menu ? 'bloc' : 'hidden'">
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <router-link to="/" @click="closeMenu">Home</router-link>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <router-link to="/about" @click="closeMenu">About Us</router-link>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <router-link to="/catalog" @click="closeMenu">Catalog</router-link>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <router-link to="/contact" @click="closeMenu">Contact</router-link>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <router-link to="/cart" @click="closeMenu">My Cart</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import store from '@/store';
import { _logout } from '@/api/api';

const token = computed(() => store.state.token)

const menu = ref(false);
const toggleMenu = () => (menu.value = !menu.value);
const closeMenu = () => (menu.value = false);

const a = localStorage.getItem("check");
const lamp = ref(false)
if (a == "ok") {
    lamp.value = true;
}

const logout = () => {
    _logout()
    .then(res => {
        console.log(res.data)
        store.dispatch('reset')
    })
    .catch(err => console.error(err))
}

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("headerText", window.scrollY > 0)
    header.classList.toggle("backdrop-blur-sm", window.scrollY > 0)
    header.classList.toggle("bg-white/5", window.scrollY > 0)
})
</script>

<style lang="css" scoped>
.router-link-exact-active {
    color: #3B3B98;
}

.headerText .textLi {
    color: #A7C5BD;
    transition: 1s;
}

.headerText .textLi:hover {
    border-bottom: 1px solid #A7C5BD;
}
</style>