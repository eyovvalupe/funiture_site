<template>
    <footer class=" bg-[#ee8c60] w-full">
        <div class="bg-white py-10">
            <div class="container mx-auto px-5">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex flex-col justif-center gap-3 mb-5 md:mb-0">
                        <a href="/" class="flex items-center gap-2">
                            <h1 class="text-[#3B3B98] text-2xl font-bold">Lihe</h1>
                        </a>
                        <p class="text-[#505050]">
                            Best information about the company <br />
                            gies here but now lorem ipsum is
                        </p>
                        <div class="text-[15px] text-white flex items-center gap-3">
                            <a href="#"><i class='bx bxl-facebook bg-[#BDC4CD] p-2 rounded-full'></i></a>
                            <a href="#"><i class='bx bxl-twitter bg-[#BDC4CD] p-2 rounded-full'></i></a>
                            <a href="#"><i class='bx bxl-linkedin bg-[#BDC4CD] p-2 rounded-full'></i></a>
                            <a href="#"><i class='bx bxl-instagram bg-[#BDC4CD] p-2 rounded-full'></i></a>
                            <a href="#"><i class='bx bxl-youtube bg-[#BDC4CD] p-2 rounded-full'></i></a>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center gap-3 mb-5 md:mb-0">
                        <h1 class="text-[#1C1C1C]">About</h1>
                        <div class="text-[#8B96A5] flex flex-col justify-center gap-1">
                            <a href="#" class="hover:underline">About Us</a>
                            <a href="#" class="hover:underline">Find store</a>
                            <a href="#" class="hover:underline">Categories</a>
                            <a href="#" class="hover:underline">Blogs</a>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center gap-3 mb-5 md:mb-0">
                        <h1 class="text-[#1C1C1C]">Partnership</h1>
                        <div class="text-[#8B96A5] flex flex-col justify-center gap-1">
                            <a href="#" class="hover:underline">About Us</a>
                            <a href="#" class="hover:underline">Find store</a>
                            <a href="#" class="hover:underline">Categories</a>
                            <a href="#" class="hover:underline">Blogs</a>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center gap-3 mb-5 md:mb-0">
                        <h1 class="text-[#1C1C1C]">Information</h1>
                        <div class="text-[#8B96A5] flex flex-col justify-center gap-1">
                            <a href="#" class="hover:underline">Help Center</a>
                            <a href="#" class="hover:underline">Money Refund</a>
                            <a href="#" class="hover:underline">Shipping</a>
                            <a href="#" class="hover:underline">Contact us</a>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center gap-3">
                        <h1 class="text-[#1C1C1C]">For users</h1>
                        <div class="text-[#8B96A5] flex flex-col justify-center gap-1">
                            <a href="#" class="hover:underline">Login</a>
                            <a href="#" class="hover:underline">Register</a>
                            <a href="#" class="hover:underline">Settings</a>
                            <a href="#" class="hover:underline">My Orders</a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>

        <div class="container mx-auto px-5 bg-[#ee8c60]">
            <div class="relative flex items-center justify-between text-white py-5">
                <p class="mx-auto">© 2025 Ecommerce.</p>
            </div>
        </div>
    </footer>
</template>
  
<script setup>
import { ref } from "vue";

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);
</script>
  
<style lang="scss" scoped></style>