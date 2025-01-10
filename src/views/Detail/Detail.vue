<template>
  <div class="responsible_container">
    <div class="flex pt-[150px] gap-[50px]">
      <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
        <Slide v-for="image in images" :key="image.id">
          <div class="carousel__item" @click="slideTo(image.id - 1)">
            <div class="w-[100px] h-[100px]">
              <img :src="image.url" alt="Thumbnail Image" class="thumbnail-image" />
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
        <Slide v-for="image in images" :key="image.id">
          <div class="carousel__item">
            <div class="w-[500px]">
              <img :src="image.url" alt="Gallery Image" class="gallery-image" />
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { ref } from 'vue';

const currentSlide = ref(0);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: 'fade',
  mouseDrag: false,
  touchDrag: false,
};

const thumbnailsConfig = {
  dir: 'ttb',
  itemsToShow: 6,
  wrapAround: true,
  height: '50vh',
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
  .carousel {
    display: flex;
    align-items: center;
  }
}
</style>