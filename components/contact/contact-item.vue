<template>
    <div class="row">
        <div v-for="(item, index) in contactInfo" :key="index" class="col-lg-4 col-md-6">
            <div class="card border-0 text-center features feature-primary">
                <div class="icon text-center mx-auto rounded-md">
                    <h3 class="mb-0"><i :class="item.icon"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                    <h5 class="title fw-bold">{{ item.title }}</h5>
                    <p class="text-muted">{{ item.description }}</p>
                    <a :href="item.href" class="link">{{ item.linkText }}</a>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-md-6">
            <div class="card border-0 text-center features feature-primary">
                <div class="icon text-center mx-auto rounded-md">
                    <h3 class="mb-0"><i class="uil uil-map-marker"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                    <h5 class="title fw-bold">Location</h5>
                    <p class="text-muted">C/54 Northwest Freeway, Suite 558, <br>Houston, USA 485</p>
                    <a @click="toggle" class="link lightbox">View on Google map</a>
                </div>
            </div>
        </div>
    </div>

    <div v-if="!isActive" class="modal-video" tabindex="-1" role="dialog" aria-modal="true"
        aria-label="You just opened the modal video">
        <div class="modal-video-body">
            <div class="modal-video-inner">
                <div class="modal-video-movie-wrap">
                    <iframe width="460" height="230"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="" tabindex="-1">
                    </iframe>
                    <a @click="toggle" class="mdi mdi-close m-3 h4 position-class title-icon"> </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);

const toggle = () => {
    isActive.value = !isActive.value;
}

const contactInfo = [
    {
        icon: 'uil uil-phone',
        title: 'Phone',
        description: 'Start working with Landflow that can provide everything',
        href: 'tel:+152534-468-854',
        linkText: '+152 534-468-854'
    },
    {
        icon: 'uil uil-envelope',
        title: 'Email',
        description: 'Start working with Landflow that can provide everything',
        href: 'mailto:contact@example.com',
        linkText: 'contact@example.com'
    },
]
</script>

<style lang="scss" scoped>
/* your styles here */
</style>