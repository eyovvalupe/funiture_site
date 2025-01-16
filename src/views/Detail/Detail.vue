<template>
  <div
    class="container mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[120px] lg:pt-[150px]"
  >
    <div class="flex flex-col lg:flex-row gap-5 lg:gap-[50px]">
      <!-- Thumbnail Carousel -->
      <div class="sider hidden lg:block">
        <Carousel
          id="thumbnails"
          v-bind="thumbnailsConfig"
          v-model="activedSlide"
        >
          <Slide v-for="(item, i) in list" :key="i">
            <div class="carousel__item" @click="slideTo(i, item)">
              <div class="w-[100px]">
                <img
                  :src="`static/img/${item.id}.webp`"
                  alt="Thumbnail Image"
                  class="thumbnail-image w-[100px] h-[100px]"
                />
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>

      <!-- Main Image -->
      <div class="main_pic w-full lg:w-auto">
        <div class="w-full lg:w-[600px]">
          <div class="demo-image__preview">
            <el-image
              style="width: 100%; height: 100%"
              :src="`static/img/${item.id}.webp`"
              :zoom-rate="1.2"
              :preview-src-list="[`static/img/${item.id}.webp`]"
              :initial-index="4"
              fit="cover"
            />
          </div>
        </div>
      </div>

      <!-- Product Info -->
      <div class="flex-1">
        <div class="text-2xl sm:text-3xl lg:text-[32px] mb-4 lg:mb-[20px]">
          {{ $t("detail.aboutproduct") }}
        </div>
        <div class="text-lg sm:text-xl lg:text-[24px] mb-3 lg:mb-[15px]">
          {{ item.description }}
        </div>
        <div class="flex gap-4">
          <div @click="jump(item.id)">
            <el-button
              type="primary"
              class="w-full h-[40px] sm:h-[50px] text-lg sm:text-xl"
              plain
              round
            >
              {{ $t("detail.findnearest") }}
            </el-button>
          </div>
          <button
            class="text-red-500 text-2xl flex items-center justify-center gap-2 border py-2 px-4 rounded-lg hover:border-red-500 transition-colors"
            @click="addToCart(item)"
          >
            <i class="bx bx-cart"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Product Details -->
    <div
      class="flex-1 p-4 sm:p-[20px] flex flex-col w-full sm:w-4/5 lg:w-2/3 mx-auto border border-gray-300 rounded-lg sm:rounded-[16px] mt-6 sm:mt-10"
    >
      <div
        class="text-xl sm:text-2xl lg:text-[32px] mb-4 sm:mb-[20px] text-center bg-[#ee8c60] text-white p-2 rounded-lg"
      >
        {{ $t("detail.detailproduct") }}
      </div>
      <div class="flex w-[100%]">
        <div
          class="text-[24px] mb-[15px] w-1/2 flex justify-between mr-[40px] border-b border-gray-300"
        >
          <span class="text-black">{{ $t("detail.name") }}</span>
          <span class="text-gray-900">{{ item.id }}</span>
        </div>
        <div
          class="text-[24px] mb-[15px] w-1/2 flex justify-between border-b border-gray-300"
        >
          <span class="text-black">{{ $t("detail.material") }}</span>
          <span class="text-gray-900">{{ item.key }}</span>
        </div>
      </div>
      <div
        class="text-[24px] mb-[15px] flex justify-between w-1/2 border-b border-gray-300"
      >
        <span class="text-black">{{ $t("detail.price") }}</span>
        <span class="text-gray-900 mr-[20px]">{{ item.price }}</span>
      </div>
      <div class="flex gap-[10px]">
        <div
          class="flex flex-col w-1/2 mr-[40px] bg-[#ee8c60] p-[10px] rounded-[16px]"
        >
          <div class="text-[24px] mb-[15px] text-white mx-auto font-bold">
            {{ $t("detail.productDimension") }}
          </div>
          <div class="text-[24px] mb-[15px] flex justify-between">
            <span class="text-white">{{ $t("detail.width") }}</span>
            <span class="text-gray-50">{{ item.p_width }}</span>
          </div>
          <div class="text-[24px] mb-[15px] flex justify-between">
            <span class="text-white">{{ $t("detail.height") }}</span>
            <span class="text-gray-50">{{ item.p_height }}</span>
          </div>
          <div class="text-[24px] mb-[15px] flex justify-between">
            <span class="text-white">{{ $t("detail.depth") }}</span>
            <span class="text-gray-50">{{ item.p_depth }}</span>
          </div>
        </div>
        <div class="flex flex-col w-1/2 bg-[#ee8c60] p-[10px] rounded-[16px]">
          <div class="text-[24px] mb-[15px] text-white mx-auto font-bold">
            {{ $t("detail.cartonDimension") }}
          </div>
          <div class="text-[24px] mb-[15px] flex justify-between">
            <span class="text-white">{{ $t("detail.width") }}</span>
            <span class="text-gray-50">{{ item.c_width }}</span>
          </div>
          <div class="text-[24px] mb-[15px] flex justify-between">
            <span class="text-white">{{ $t("detail.height") }}</span>
            <span class="text-gray-50">{{ item.c_height }}</span>
          </div>
          <div class="text-[24px] mb-[15px] flex justify-between">
            <span class="text-white">{{ $t("detail.depth") }}</span>
            <span class="text-gray-50">{{ item.c_depth }}</span>
          </div>
        </div>
      </div>
    </div>
    {{ console.log(id) }}
    <Toast
      v-if="showToast"
      :message="toastMessage"
      :type="toastType"
      @close="showToast = false"
    />
  </div>
</template>
<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import store from "@/store";
import { list } from "@/utils/Data";
import { ElButton } from "element-plus";
import { ElImage } from "element-plus";
import { useStore } from "vuex";
import Toast from "@/components/Toast.vue";

const route = useRoute();
const router = useRouter();
// const store = useStore();

const id = ref(route.query.id);
const currentSlide = ref(Number(id.value.slice(-3) - 235));
const activedSlide = ref(Number(id.value.slice(-3) - 235) + 3);

const jump = (id) => {
  router.push({ name: "location", query: { id } });
};

const item = computed(() => list.find((i) => i.id == id.value));

const slideTo = (nextSlide, item) => {
  currentSlide.value = nextSlide;

  if (nextSlide + 3 >= images.length)
    activedSlide.value = nextSlide + 3 - images.length;
  if (nextSlide + 3 < images.length) activedSlide.value = nextSlide + 3;

  console.log(nextSlide);
  console.log("active", activedSlide.value);
  console.log("current", currentSlide.value);

  id.value = item.id;
};

const galleryConfig = {
  // itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade",
  mouseDrag: true,
  touchDrag: true,
};

const thumbnailsConfig = {
  dir: "ttb",
  itemsToShow: 5,
  wrapAround: true,
  height: "60vh",
  width: "100px",
  gap: 10,
};

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/800/600?random=${index + 1}`,
}));

const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");

const addToCart = (item) => {
  const cartItems = JSON.parse(localStorage.getItem("watchList") || "[]");
  const temp = cartItems.find((i) => i.id === item.id);

  if (temp) {
    toastMessage.value = "Already in cart!";
    toastType.value = "error";
    showToast.value = true;
    return;
  }

  cartItems.push(item);
  store.commit("updateCartItems", cartItems);
  toastMessage.value = "Added to cart successfully!";
  toastType.value = "success";
  showToast.value = true;
};
</script>
<style lang="css">
.responsible_container {
  .main_pic {
    display: flex;
    align-items: center;

    .carousel {
      display: flex;
      align-items: center;
    }

    img {
      width: 100%;
      height: auto;
      max-width: 500px;
      max-height: 500px;
      object-fit: contain;
    }
  }

  .sider {
    .carousel__item {
      div {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .main_pic img {
    max-width: 100%;
    height: auto;
  }
}
</style>
