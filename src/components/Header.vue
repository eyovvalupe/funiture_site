<template>
  <header class="fixed z-10 shadow-lg w-full transition duration-1000">
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
              <router-link to="/">{{ $t("nav.home") }}</router-link>
            </li>
            <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
              <router-link to="/about">{{ $t("nav.about") }}</router-link>
            </li>
            <li
              class="p-2 pl-5 text-[#E2E8F0] hover:text-white relative group"
              style="margin-top: 0"
            >
              <div class="flex items-center h-full cursor-pointer">
                <router-link
                  to="/catalog"
                  class="flex items-center h-full"
                  @click="closeMenu"
                  >{{ $t("nav.catalog") }}</router-link
                >
              </div>
              <ul
                class="submenu absolute left-0 mt-2 bg-white rounded-lg shadow-lg py-2"
              >
                <li class="px-4 py-2 hover:bg-[#ee8c60] hover:text-white">
                  <a
                    href="#"
                    @click.prevent="handleCategorySelect('Table')"
                    class="block w-full"
                  >
                    {{ $t("catalogs.table") }}
                  </a>
                </li>
                <li class="px-4 py-2 hover:bg-[#ee8c60] hover:text-white">
                  <a
                    href="#"
                    @click.prevent="handleCategorySelect('Chair')"
                    class="block w-full"
                  >
                    {{ $t("catalogs.chair") }}
                  </a>
                </li>
                <li class="px-4 py-2 hover:bg-[#ee8c60] hover:text-white">
                  <a
                    href="#"
                    @click.prevent="handleCategorySelect('Desk')"
                    class="block w-full"
                  >
                    {{ $t("catalogs.desk") }}
                  </a>
                </li>
                <li class="px-4 py-2 hover:bg-[#ee8c60] hover:text-white">
                  <a
                    href="#"
                    @click.prevent="handleCategorySelect('Wardrobe')"
                    class="block w-full"
                  >
                    {{ $t("catalogs.wardrobe") }}
                  </a>
                </li>
                <li class="px-4 py-2 hover:bg-[#ee8c60] hover:text-white">
                  <a
                    href="#"
                    @click.prevent="handleCategorySelect('FileBox')"
                    class="block w-full"
                  >
                    {{ $t("catalogs.filebox") }}
                  </a>
                </li>
              </ul>
            </li>
            <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
              <router-link to="/contact">{{ $t("nav.contact") }}</router-link>
            </li>
            <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
              <router-link to="/cart" class="flex items-center">
                {{ $t("nav.cart") }}
                <span v-if="cartCount > 0" class="ml-1 text-sm text-red-500">
                  ({{ cartCount }})
                </span>
              </router-link>
            </li>
            <li
              class="textLi p-2 text-[#E2E8F0] hover:text-white cursor-pointer"
              v-if="token"
              @click="logout"
            >
              <div>{{ $t("nav.logout") }}</div>
            </li>
            <li
              class="textLi p-2 text-[#E2E8F0] hover:text-white"
              v-if="!token"
            >
              <router-link to="/login">{{ $t("nav.login") }}</router-link>
            </li>
            <li
              class="textLi p-2 text-[#E2E8F0] hover:text-white cursor-pointer"
            >
              <select
                v-model="locale"
                @change="handleLanguageChange"
                class="bg-transparent border-none cursor-pointer focus:outline-none"
              >
                <option value="en" class="bg-gray-300">English</option>
                <option value="zh" class="bg-gray-300">中文</option>
                <option value="fr" class="bg-gray-300">Français</option>
              </select>
            </li>
          </ul>
        </div>
        <div class="lg:hidden reletive">
          <button
            @click="toggleMenu"
            class="flex p-1 rounded-lg focus:ring-2 focus:ring-[#3B3B98]"
          >
            <i
              class="text-[24px] text-white font-bold"
              :class="menu ? 'bx bx-x' : 'bx bx-menu'"
            ></i>
          </button>
          <ul
            class="absolute bg-[#ee8c60] w-[60%] mt-[14px] sm:w-[40%] h-[100vh] right-0 top-[76px] text-white font-bold text-[18px]"
            :class="menu ? 'bloc' : 'hidden'"
          >
            <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
              <router-link to="/" @click="closeMenu">{{
                $t("nav.home")
              }}</router-link>
            </li>
            <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
              <router-link to="/about" @click="closeMenu">{{
                $t("nav.about")
              }}</router-link>
            </li>
            <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
              <router-link to="/catalog" @click="closeMenu">{{
                $t("nav.catalog")
              }}</router-link>
            </li>
            <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
              <router-link to="/contact" @click="closeMenu">{{
                $t("nav.contact")
              }}</router-link>
            </li>
            <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
              <router-link
                to="/cart"
                @click="closeMenu"
                class="flex items-center"
              >
                {{ $t("nav.cart") }}
                <span v-if="cartCount > 0" class="ml-1 text-sm text-red-500">
                  ({{ cartCount }})
                </span>
              </router-link>
            </li>
            <li
              class="textLi p-2 text-[#E2E8F0] hover:text-white cursor-pointer"
            >
              <select
                v-model="locale"
                @change="handleLanguageChange"
                class="bg-transparent text-inherit border-none cursor-pointer"
              >
                <option value="en" class="bg-gray-300">English</option>
                <option value="zh" class="bg-gray-300">中文</option>
                <option value="fr" class="bg-gray-300">Français</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import store from "@/store";
import { _logout } from "@/api/api";
import { i18n } from "@/i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();

const token = computed(() => store.state.token);

const menu = ref(false);
const toggleMenu = () => (menu.value = !menu.value);
const closeMenu = () => (menu.value = false);

const a = localStorage.getItem("check");
const lamp = ref(false);
if (a == "ok") {
  lamp.value = true;
}

const logout = () => {
  _logout()
    .then((res) => {
      console.log(res.data);
      store.dispatch("reset");
    })
    .catch((err) => console.error(err));
};

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("headerText", window.scrollY > 0);
});

const handleLanguageChange = () => {
  store.commit("setLanguage", locale.value);
  i18n.global.locale.value = locale.value;
};

const locale = computed({
  get: () => store.state.language,
  set: (value) => {
    store.commit("setLanguage", value);
    i18n.global.locale.value = value;
  },
});

const cartCount = computed(() => store.state.cartItems.length);

const router = useRouter();

const handleCategorySelect = (category) => {
  closeMenu();
  router
    .push({
      path: "/catalog",
      query: { category },
    })
    .then(() => {
      window.dispatchEvent(
        new CustomEvent("updateCategory", {
          detail: { category },
        })
      );
    });
};
</script>

<style lang="css" scoped>
.router-link-exact-active {
  color: #3b3b98;
}

.headerText .textLi {
  color: #e2e8f0;
  transition: 1s;
}

.headerText .textLi:hover {
  border-bottom: 1px solid #73999b;
}

header {
  background-color: #ee8c60;
}

.headerText {
  background-color: rgba(255, 150, 101, 0.8);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.nav-menu li {
  position: relative;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  min-width: 150px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-menu li:hover .submenu {
  display: block;
}

.submenu li {
  padding: 8px 15px;
  display: block;
  color: #636466;
  transition: all 0.3s ease;
}

.submenu li:hover {
  background-color: #ee8c60;
  color: white;
}

.submenu {
  display: none;
  min-width: 200px;
  z-index: 1000;
}

.group:hover .submenu {
  display: block;
}

.submenu::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  height: 10px;
}

@media (max-width: 768px) {
  .submenu {
    position: static;
    background: transparent;
    box-shadow: none;
    margin-top: 0.5rem;
    margin-left: 1rem;
  }

  .submenu li {
    padding: 0.5rem 1rem;
  }

  .submenu li a {
    color: #e2e8f0;
  }

  .submenu::before {
    display: none;
  }
}
</style>
