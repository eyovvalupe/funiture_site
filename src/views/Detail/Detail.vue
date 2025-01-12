<template>
  <div class="responsible_container">
    <div class="flex pt-[150px] gap-[50px]">
      <div class="sider">
        <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="activedSlide">
          <Slide v-for="(item, i) in list" :key="i">
            <div class="carousel__item" @click="slideTo(i, item)">
              <div class="w-[100px] h-[100px]">
                <img :src="`static/img/${item.id}.webp`" alt="Thumbnail Image" class="thumbnail-image" />
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>

      <div class="main_pic">
        <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
          <Slide v-for="(item, i) in list" :key="i">
            <div class="carousel__item">
              <div class="w-[600px]">
                <div class="demo-image__preview">
                  <el-image style="width: 100%; height: 100%" :src="`static/img/${item.id}.webp`" :zoom-rate="1.2"
                    :preview-src-list="[`static/img/${item.id}.webp`]" :initial-index="4" fit="cover" />
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="flex-1 p-[20px] flex flex-col">
        <div class="text-[32px] mb-[20px]">Detail of Product</div>
        <div class="text-[24px] mb-[15px]">Name: <span>{{ item.id }}</span></div>
        <div class="text-[24px] mb-[15px]">Material: <span>{{ item.key }}</span></div>
        <div class="flex">
          <div class="flex flex-col w-1/2">
            <div class="text-[24px] mb-[15px]">Product Dimension</div>
            <div class="text-[24px] mb-[15px]">width: <span>{{ item.p_width }}</span></div>
            <div class="text-[24px] mb-[15px]">Height: <span>{{ item.p_height }}</span></div>
            <div class="text-[24px] mb-[15px]">Depth: <span>{{ item.p_depth }}</span></div>
          </div>
          <div class="flex flex-col w-1/2">
            <div class="text-[24px] mb-[15px]">Carton Dimension</div>
            <div class="text-[24px] mb-[15px]">width: <span>{{ item.c_width }}</span></div>
            <div class="text-[24px] mb-[15px]">Height: <span>{{ item.c_height }}</span></div>
            <div class="text-[24px] mb-[15px]">Depth: <span>{{ item.c_depth }}</span></div>
          </div>
        </div>

        <div class="text-[24px] mb-[15px]">Price: <span>{{ item.price }}</span></div>
      </div>
    </div>
    {{ console.log(id) }}
  </div>
</template>
<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { computed, ref } from 'vue';
import { ElImage } from 'element-plus';
import { useRoute } from 'vue-router';
import store from '@/store';
import { list } from '@/utils/Data';

const route = useRoute();

const id = ref(route.query.id);
const currentSlide = ref(Number(id.value.slice(-3) - 235));
const activedSlide = ref(Number(id.value.slice(-3) - 235) + 3);


const item = computed(() => list.find(i => i.id == id.value));

const slideTo = (nextSlide, item) => {
  currentSlide.value = nextSlide;

  if (nextSlide + 3 >= images.length) activedSlide.value = nextSlide + 3 - images.length;
  if (nextSlide + 3 < images.length) activedSlide.value = nextSlide + 3;

  console.log(nextSlide)
  console.log('active', activedSlide.value)
  console.log('current', currentSlide.value)

  id.value = item.id
}

const galleryConfig = {
  // itemsToShow: 1,
  wrapAround: true,
  slideEffect: 'fade',
  mouseDrag: true,
  touchDrag: true,
};

const thumbnailsConfig = {
  dir: 'ttb',
  itemsToShow: 5,
  wrapAround: true,
  height: '60vh',
  width: '100px',
  gap: 10,
};

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/800/600?random=${index + 1}`,
}));
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
      width: 500px;
      height: 500px;
    }
  }

  .sider {
    .carousel__item {
      div {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  /* .demo-image__error .image-slot {
    font-size: 30px;
  }

  .demo-image__error .image-slot .el-icon {
    font-size: 30px;
  }

  .demo-image__error .el-image {
    width: 100%;
    height: 200px;
  } */
}
</style>