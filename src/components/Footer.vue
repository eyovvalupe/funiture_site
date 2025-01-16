<template>
  <footer class="bg-[#ee8c60] w-full">
    <div class="bg-white py-10">
      <div class="container mx-auto px-5">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex flex-col justif-center gap-3 mb-5 md:mb-0">
            <a href="/" class="flex items-center gap-2">
              <h1 class="text-[#3B3B98] text-2xl font-bold">Lihe</h1>
            </a>
            <p class="text-[#505050]">
              {{ $t("footer.companyInfo") }}
            </p>
            <div class="text-[15px] text-white flex items-center gap-3">
              <a href="#"
                ><i class="bx bxl-facebook bg-[#BDC4CD] p-2 rounded-full"></i
              ></a>
              <a href="#"
                ><i class="bx bxl-twitter bg-[#BDC4CD] p-2 rounded-full"></i
              ></a>
              <a href="#"
                ><i class="bx bxl-linkedin bg-[#BDC4CD] p-2 rounded-full"></i
              ></a>
              <a href="#"
                ><i class="bx bxl-instagram bg-[#BDC4CD] p-2 rounded-full"></i
              ></a>
              <a href="#"
                ><i class="bx bxl-youtube bg-[#BDC4CD] p-2 rounded-full"></i
              ></a>
            </div>
          </div>

          <div class="flex flex-col justify-center gap-3 mb-5 md:mb-0">
            <h1 class="text-[#1C1C1C]">{{ $t("footer.about") }}</h1>
            <div class="text-[#8B96A5] flex flex-col justify-center gap-1">
              <a href="#" class="hover:underline">{{ $t("footer.about") }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.findStore")
              }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.categories")
              }}</a>
              <a href="#" class="hover:underline">{{ $t("footer.blogs") }}</a>
            </div>
          </div>

          <div class="flex flex-col justify-center gap-3 mb-5 md:mb-0">
            <h1 class="text-[#1C1C1C]">{{ $t("footer.partnership") }}</h1>
            <div class="text-[#8B96A5] flex flex-col justify-center gap-1">
              <a href="#" class="hover:underline">{{ $t("footer.about") }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.findStore")
              }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.categories")
              }}</a>
              <a href="#" class="hover:underline">{{ $t("footer.blogs") }}</a>
            </div>
          </div>

          <div class="flex flex-col justify-center gap-3 mb-5 md:mb-0">
            <h1 class="text-[#1C1C1C]">{{ $t("footer.information") }}</h1>
            <div class="text-[#8B96A5] flex flex-col justify-center gap-1">
              <a href="#" class="hover:underline">{{
                $t("footer.helpCenter")
              }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.moneyRefund")
              }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.shipping")
              }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.contactUs")
              }}</a>
            </div>
          </div>

          <div class="flex flex-col justify-center gap-3">
            <h1 class="text-[#1C1C1C]">{{ $t("footer.forUser") }}</h1>
            <div class="text-[#8B96A5] flex flex-col justify-center gap-1">
              <a href="#" class="hover:underline">{{ $t("footer.login") }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.register")
              }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.settings")
              }}</a>
              <a href="#" class="hover:underline">{{
                $t("footer.myOrders")
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-5 bg-[#ee8c60]">
      <div class="relative flex items-center justify-between text-white py-5">
        <p class="mx-auto">{{ $t("footer.copyright") }}</p>
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
