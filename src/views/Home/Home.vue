<template>
  <section class="w-full relative">
    <div class="first_bg">
      <img src="/static/img/home-back.webp" alt="" />
    </div>
    <div
      class="w-full min-h-screen bg-[rgba(139,136,136,0.4)] flex items-center justify-center pt-16 sm:pt-20 md:pt-28"
    >
      <div class="container mx-auto px-4 sm:px-5">
        <div
          class="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center py-5 md:py-0"
        >
          <h1
            class="text-xl sm:text-2xl md:text-[36px] text-[#3B3B98] font-bold px-3 text-center"
          >
            {{ $t("home.hello") }}
          </h1>
          <h2
            class="text-center text-white text-lg sm:text-xl md:text-[24px] p-3 sm:p-4 md:p-5 cursor-pointer"
            @click="() => router.push('/about')"
          >
            {{ $t("home.about") }}
          </h2>
          <button
            @click="scrollToAncient"
            class="btnAll w-[150px] bg-[#3B3B98] md:text-[20px] py-3 text-center text-white rounded-lg font-bold hover:bg-white hover:text-[#3B3B98] focus:ring-2 focus:ring-[#3B3B98]"
          >
            {{ $t("home.see") }}
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-5">
    <div class="container mx-auto p-5">
      <div class="flex justify-between items-center mb-5">
        <h1 class="text-[24px] text-[#3B3B98] font-semibold">
          {{ $t("home.categories") }}
        </h1>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="category in categories"
          :key="category.id"
          @click="handleCategoryClick(category.id)"
          class="cursor-pointer group"
        >
          <div
            class="border rounded-lg p-4 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-[#3B3B98]"
          >
            <div class="w-full aspect-square mb-3 overflow-hidden rounded-lg">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 class="text-center text-gray-800 group-hover:text-[#3B3B98]">
              {{ $t(`home.${category.name}`) }}
            </h3>
            <p class="text-sm text-gray-500 text-center mt-1">
              {{ category.itemCount }} {{ $t("home.items") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="mt-5" id="ancient-furniture">
    <div class="container mx-auto p-5">
      <div class="hidden lg:block w-[100%]">
        <div class="flex justify-between items-center mb-5">
          <h1 class="text-[24px] text-[#3B3B98] font-semibold">
            {{ $t("home.ancient") }}
          </h1>
          <router-link
            to="/catalog"
            class="text-blue-500 hover:text-blue-700 hover:border-b border-blue-700"
            >{{ $t("home.see") }} >></router-link
          >
        </div>
        <div class="w-[100%] flex flex-wrap gap-[1.5%]">
          <div
            v-for="item in list"
            :key="item.id"
            @click="jump(item.id)"
            class="border w-[18.8%] p-5 rounded-lg flex flex-col items-center mb-5 bg-white cursor-pointer"
          >
            <img
              :src="`static/img/${item.id}.webp`"
              alt=""
              class="w-full h-[170.67px] rounded-lg mb-[20px] hover:scale-[1.1] transition-all duration-300 ease-in"
            />
            <div class="">
              <h2 class="font-medium mb-[5px]">{{ item.price }}</h2>
              <p class="text-[#8B96A5] font-normal w-full">{{ item.info }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:hidden container mx-auto px-5">
        <div class="flex justify-between items-center mb-5">
          <h1 class="text-[24px] text-[#3B3B98] font-semibold">
            {{ $t("home.ancient") }}
          </h1>
          <a
            href="#"
            class="text-blue-500 hover:text-blue-700 hover:border-b border-blue-700"
            >Learn more >></a
          >
        </div>
        <div class="w-[100%] flex flex-wrap gap-[2%]">
          <div
            v-for="item in list"
            :key="item.id"
            class="border w-[49%] sm:w-[32%] p-5 rounded-lg flex flex-col items-center mb-2 sm:mb-3.5 bg-white cursor-pointer gap-5"
            @click="jump(item.id)"
          >
            <img
              :src="`static/img/${item.id}.webp`"
              alt=""
              class="w-wull h-[122.22px] rounded-lg hover:scale-[1.1] transition-all duration-100 ease-in"
            />
            <div class="">
              <h2 class="font-medium text-[16px] mb-1">{{ item.price }}</h2>
              <p class="text-[#8B96A5] text-[13px] font-normal w-full">
                {{ item.info }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <section class="mt-5 relative">
    <div class="second_bg">
      <img src="/static/img/bg2.webp" alt="" />
    </div>
    <div class="container mx-auto p-5 relative">
      <div class="hidden lg:flex rounded-lg w-[100%] p-10 justify-between mb-5">
        <div>
          <h3 class="text-[32px] text-white font-bold mb-5">
            {{ $t("home.subTitle") }} <br />
            {{ $t("home.subTitle2") }}
          </h3>
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />
            elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        <div class="bg-white rounded-lg w-[500px] p-5">
          <h3 class="text-[20px] font-normal mb-5">
            {{ $t("home.modalTitle") }}
          </h3>
          <input
            type="text"
            :placeholder="$t('home.modalPlaceholder')"
            class="outline-none border rounded-lg w-full p-2 mb-3 placeholder-black"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            :placeholder="$t('home.modalPlaceholder')"
            class="outline-none border p-2 rounded-lg w-full h-[73px] mb-2"
          ></textarea>
          <div class="relative flex items-center mb-5 gap-3">
            <input
              type="text"
              :placeholder="$t('home.modalQuantity')"
              class="outline-none border rounded-lg p-2 placeholder-black"
            />
            <button
              @click="toggleModal"
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-[100px] rounded border p-2"
            >
              {{ $t("home.modalUnit") }}
              <svg
                class="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              :class="
                modal
                  ? 'z-50 absolute font-normal bg-white rounded right-20 top-12 w-[100px]'
                  : 'hidden'
              "
            >
              <ul
                class="py-2 text-sm text-gray-900"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a href="#" class="block px-4 py-2">$100</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2">$500</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2">$1000</a>
                </li>
              </ul>
            </div>
          </div>
          <button
            class="bg-[#3B3B98] text-white rounded-lg border border-[#3B3B98] px-4 py-2 hover:bg-white hover:text-[#3B3B98]"
          >
            {{ $t("home.modalButton") }}
          </button>
        </div>
      </div>
    </div>

    <div
      class="lg:hidden bg-no-repet bg-cover bg-center bg-[url('static/img/bg2.jpg')]"
    >
      <div class="container mx-auto px-5 pt-10">
        <h2 class="text-white font-semibold text-[18px] mb-8">
          {{ $t("home.subTitle") }} <br />
          {{ $t("home.subTitle2") }}
        </h2>
        <button
          class="bg-[rgba(18,127,255,1)] px-5 py-2 text-[13px] font-medium text-white rounded-lg mb-10"
        >
          {{ $t("home.modalButton") }}
        </button>
      </div>
    </div>
  </section>

  <section class="mt-5">
    <div class="container mx-auto p-5">
      <div class="flex justify-between items-center mb-5">
        <h2 class="text-[24px] text-[#3B3B98] font-semibold">
          {{ $t("home.newFur") }}
        </h2>
        <!-- <div class="flex justify-between items-center gap-5">
                    <button
                        class="text-[#3B3B98] text-2xl bg border border-[#3B3B98] rounded-full p-2 flex hover:bg-[#3B3B98] hover:text-white focus:ring-2 focus:ring-blue-500">
                        <i class='bx bx-left-arrow-alt'></i>
                    </button>
                    <button
                        class="text-[#3B3B98] text-2xl bg border border-[#3B3B98] rounded-full p-2 flex hover:bg-[#3B3B98] hover:text-white focus:ring-2 focus:ring-blue-500">
                        <i class='bx bx-right-arrow-alt'></i>
                    </button>
                </div> -->
      </div>
      <div class="flex lg:flex-row gap-5">
        <Carousel v-bind="config">
          <Slide v-for="(news, i) in list" :key="i">
            <div class="carousel__slide w-full">
              <div class="border border-[#ccc] rounded-lg p-4 w-full">
                <div
                  class="flex items-center justify-center bg-white rounded-lg mb-4 w-full h-[300px]"
                >
                  <img
                    :src="`static/img/${news.id}.webp`"
                    alt=""
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-4 text-center">
                    {{ news.price }}
                  </h3>
                  <div class="flex justify-between items-center gap-4">
                    <button
                      class="flex-1 text-red-500 text-2xl flex items-center justify-center gap-2 border py-2 px-4 rounded-lg hover:border-red-500 transition-colors"
                      @click="add(news)"
                    >
                      <i class="bx bx-cart"></i>
                    </button>
                    <button
                      class="flex-1 text-[#3B3B98] flex items-center justify-center gap-2 border py-2 px-4 rounded-lg hover:border-[#3B3B98] transition-colors"
                      @click="buy(news)"
                    >
                      {{ $t("home.buy") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>

  <section class="mt-5">
    <div class="container mx-auto p-5">
      <div class="flex justify-between items-center mb-5">
        <h2 class="text-[24px] text-[#3B3B98] font-semibold">
          {{ $t("home.recommend") }}
        </h2>
      </div>
      <div class="flex lg:flex-row gap-5">
        <Carousel v-bind="config">
          <Slide v-for="(news, i) in list" :key="i">
            <div class="carousel__slide w-full">
              <div class="border border-[#ccc] rounded-lg p-4 w-full">
                <div
                  class="flex items-center justify-center bg-white rounded-lg mb-4 w-full h-[300px]"
                >
                  <img
                    :src="`static/img/${news.id}.webp`"
                    alt=""
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-4 text-center">
                    {{ news.price }}
                  </h3>
                  <div class="flex justify-between items-center gap-4">
                    <button
                      class="flex-1 text-red-500 text-2xl flex items-center justify-center gap-2 border py-2 px-4 rounded-lg hover:border-red-500 transition-colors"
                      @click="add(news)"
                    >
                      <i class="bx bx-cart"></i>
                    </button>
                    <button
                      class="flex-1 text-[#3B3B98] flex items-center justify-center gap-2 border py-2 px-4 rounded-lg hover:border-[#3B3B98] transition-colors"
                      @click="buy(news)"
                    >
                      {{ $t("home.buy") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>

  <section class="mt-5">
    <div class="container mx-auto p-5">
      <div class="flex justify-between items-center mb-5">
        <h1 class="text-[24px] text-[#3B3B98] font-semibold">
          {{ $t("home.catalog") }}
        </h1>
        <router-link
          to="/list"
          class="text-blue-500 hover:text-blue-700 hover:border-b border-blue-700"
          >{{ $t("home.see") }} >></router-link
        >
      </div>
      <div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH236.webp"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH237.webp"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH238.webp"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH239.webp"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH240.webp"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH241.webp"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH242.webp"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH243.webp"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH244.webp"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH245.webp"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH246.webp"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-full w-full rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                src="/static/img/LH247.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Toast
    v-if="showToast"
    :message="toastMessage"
    :type="toastType"
    @close="showToast = false"
  />
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import AOS from "aos";
import { list, newList } from "@/utils/Data";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import store from "@/store";
import router from "@/router";
import Toast from "@/components/Toast.vue";

const jump = (id) => {
  router.push({ name: "detail", query: { id } });
};

const config = {
  itemsToShow: 1,
  snapAlign: "center",
  breakpoints: {
    640: {
      itemsToShow: 2,
    },
    768: {
      itemsToShow: 3,
    },
    1024: {
      itemsToShow: 4,
    },
  },
};

const myList = ref(
  localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : []
);
console.log("watch list =====>", myList.value);

const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");

const add = (item) => {
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

const buy = () => {};

const scrollToAncient = () => {
  const element = document.getElementById("ancient-furniture");
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Update AOS initialization
onMounted(() => {
  AOS.init({
    // Keep animations on all devices
    disable: false,
    // Ensure smooth animations
    once: false,
    mirror: false,
    startEvent: "DOMContentLoaded",
    duration: 2000,
    offset: 50,
    delay: 0,
    easing: "ease-in-out",
    anchorPlacement: "top-bottom",
  });
});

// Refresh AOS on resize for better responsiveness
const handleResize = () => {
  AOS.refresh();
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);
const token = computed(() => store.state.token);

// Add categories data
const categories = ref([
  {
    id: "Desk",
    name: "desks",
    image: "/static/img/LH235.webp",
    itemCount: 10,
  },
  {
    id: "Table",
    name: "tables",
    image: "/static/img/LH242.webp",
    itemCount: 7,
  },
  {
    id: "Chair",
    name: "chairs",
    image: "/static/img/LH245.webp",
    itemCount: 7,
  },
  {
    id: "Wardrobe",
    name: "wardrobes",
    image: "/static/img/LH262.webp",
    itemCount: 6,
  },
  {
    id: "FileBox",
    name: "fileboxes",
    image: "/static/img/LH265.webp",
    itemCount: 5,
  },
]);

const handleCategoryClick = (categoryId) => {
  // Navigate to catalog and dispatch the event
  router.push(`/list?category=${categoryId}`);
  // Dispatch a custom event to update the category
  window.dispatchEvent(
    new CustomEvent("updateCategory", {
      detail: { category: categoryId },
    })
  );
};
</script>
<style lang="css" scoped>
.first_bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.second_bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

/* Add responsive carousel styles */
.carousel__slide {
  padding: 0 8px;
}

@media (max-width: 640px) {
  .carousel__slide {
    padding: 0 4px;
  }
}

/* Add these styles to ensure proper initial loading */
[data-aos] {
  transition-duration: 0.5s;
  transition-timing-function: ease-out;

  /* Ensure elements have proper initial state but still animate */
  &:not(.aos-animate) {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
