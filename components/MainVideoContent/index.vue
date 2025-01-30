<template>
  <section class="main">
    <div class="main__container">
      <video
        class="main__video"
        :poster="poster"
        preload="metadata"
        loading="lazy"
        width="1920"
        height="200"
        muted
        playsinline
        autoplay
        loop
        fetchpriority="high"
      >
        <source
          v-for="video in data"
          :key="video.type"
          :src="video.src"
          :type="video.type"
        />
        Message
      </video>
      <div class="main__text-wrapper">
        <div class="main__text-container">
          <h1>
            {{ title }}
          </h1>
          <p v-if="description" class="main__text-add">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
interface Props {
  data?: { src: string; type: string }[];
  title?: string;
  description?: string;

  poster?: string;
}

withDefaults(defineProps<Props>(), {
  data: () => [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/pickup2-3b2bd.appspot.com/o/video%2Fmain-2.webm?alt=media&token=605b31cb-a463-4e72-947b-8e262b264dd4",
      type: "video/webm",
    },
  ],
  title: "Professional Moving & Logistics Services",
  description:
    "Your Trusted Partner for Seamless Relocations - Local & International Moving Solutions",
  poster: "/img/mainPoster.webp",
});
</script>

<style lang="scss" scoped>
:deep(.button::after) {
  width: 3.9rem;
  height: 4.2rem;
  top: 0;
  border: 0.4rem solid white;
  right: -0.3rem;
}
:deep(.button) {
  height: 4rem;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  contain: paint;

  &__text-add {
    @media (min-width: 576px) {
      max-width: 80%;
      margin: 0 auto;
    }
  }

  &__container {
    position: relative;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(24, 59, 86, 0.85) 0%,
      rgba(24, 59, 86, 0.65) 100%
    );
    margin-bottom: -1rem;
  }

  &__video {
    width: 100%;
    max-width: 100%;
    z-index: -1;
    height: 75vh;
    min-height: 30rem;
    position: relative;
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
    aspect-ratio: 16/9;
    object-fit: cover;
    contain: strict;
  }

  &__text-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 1rem;
    background: linear-gradient(
      to bottom,
      rgba(24, 59, 86, 0.85) 0%,
      rgba(24, 59, 86, 0.65) 100%
    );
    top: -1rem;
    contain: content;
  }
  &__container {
    text-align: center;

    h1 {
      margin-top: 1rem;
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  &__button-container {
    justify-content: center;
    width: 100%;
    display: flex;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 576px) {
    &__video {
      height: 75vh;
      min-height: 45rem;
    }
    &__text-wrapper {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      background: none;
    }

    &__text-container {
      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    &__text-container {
      h1 {
        font-size: 5rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: 992px) {
    &__container {
      height: 75vh;
      min-height: 45rem;
    }
  }
}
</style>
