<template>
  <div :class="containerclass">
    <div id="grid" :class="gridrow">
      <div v-for="item in datas" :key="item" class="col-12 spacing picture-item">
        <div class="card portfolio portfolio-modern border-0 mb-4">
          <div class="portfolio-box position-relative rounded-2 shadow overflow-hidden">
            <div class="image-wrapper">
              <img :src="item.image" class="img-fluid" alt="" />
            </div>
            <div class="overlay-work"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue';
  import image from '../../../assets/images/work/1.jpg';
  import image2 from '../../../assets/images/work/2.jpg';
  import image3 from '../../../assets/images/work/3.jpg';
  import image4 from '../../../assets/images/work/4.jpg';
  import image6 from '../../../assets/images/work/6.jpeg';
  import image7 from '../../../assets/images/work/7.jpg';
  import image8 from '../../../assets/images/work/8.jpg';
  import image9 from '../../../assets/images/work/9.jpg';
  import image10 from '../../../assets/images/work/10.jpg';
  import image11 from '../../../assets/images/work/11.jpg';
  import image12 from '../../../assets/images/work/12.jpg';

  defineProps({
    gridrow: {
      type: String,
      required: true,
    },
    containerclass: {
      type: String,
      required: true,
    },
  });

  const datas = ref([
    { id: 1, image: image },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
    { id: 11, image: image11 },
    { id: 12, image: image12 },
  ]);
</script>

<style lang="scss" scoped>
  .portfolio-box {
    margin-bottom: 1rem;
  }
  .picture-item {
    padding: 0.5rem;
  }
  .image-wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 75%; /* This creates a 4:3 aspect ratio */
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
