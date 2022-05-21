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
        <swiper class="my-slide-bar"
            :spaceBetween="30"
            :effect="'fade'"
            :navigation="true"
            :pagination="{
            clickable: true,
            }"
            loop
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :modules="modules"
        >
            <swiper-slide class="my-slide"
                ><img class="slide-image"
                    src="../../assets/img/050mushi2054_TP_V.jpg"/></swiper-slide
            ><swiper-slide class="my-slide"
                ><img class="slide-image"
                    src="../../assets/img/Redsugar20207053_TP_V.jpg" /></swiper-slide
            ><swiper-slide class="my-slide"
                ><img class="slide-image"
                    src="../../assets/img/shikun5V7A8736217_TP_V.jpg" /></swiper-slide
            >
        </swiper>
    </div>
</template>

<style scoped>
    .slide-image {
        max-height: 400px;
    }

    .my-slide-bar::v-deep(.my-slide) {
        @apply flex justify-center bg-black;
    }
</style>