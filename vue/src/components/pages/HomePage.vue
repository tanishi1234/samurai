<script setup lang="ts">
import DefaultTemplate from '../templates/DefaultTemplate.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";

import 'swiper/css';

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref } from '@vue/reactivity';

const modules = [EffectFade,Autoplay, Navigation, Pagination]
const onSwiper = (swiper) => {
        console.log(swiper);
      };
const onSlideChange = () => {
console.log('slide change');
};

</script>
<template>
    <div>
        <default-template>
            ボディ
        </default-template>    
        <swiper class="mySlideBar"
            :spaceBetween="30"
            :effect="'fade'"
            :navigation="true"
            :pagination="{
            clickable: true,
            }"
            loop
            
            :modules="modules"
        >
            <swiper-slide class="mySlide"
                ><img class="slide-image"
                    src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
            ><swiper-slide class="mySlide"
                ><img class="slide-image"
                    src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
            ><swiper-slide class="mySlide"
                ><img class="slide-image"
                    src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
            ><swiper-slide class="mySlide"
                ><img class="slide-image" 
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
            /></swiper-slide>
        </swiper>
  </div>
</template>

<style scoped>
    .slide-image {
        max-height: 100px;
    }

    .mySlideBar::v-deep(.mySlide) {
        @apply flex justify-center bg-black;
    }
</style>