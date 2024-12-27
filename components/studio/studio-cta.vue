<template>
    <!-- Cta Start -->
    <div class="container-fluid">
        <div class="py-5 rounded"
            :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center left' }">
            <div class="container">
                <div class="row">
                    <div class="offset-lg-8 offset-md-6 col-lg-4 col-md-6">
                        <div class="cta-review bg-primary shadow-lg rounded p-4 py-5">
                            <div class="tiny-single-item">
                                <div v-for="item in datas" :key="item" class="tiny-slide">
                                    <div class="customer-testi">
                                        <p class="text-white-50 fst-italic">{{ item.desc }}</p>
                                        <div class="d-flex align-items-center mt-4">
                                            <img :src="item.image"
                                                class="img-fluid avatar avatar-small rounded-circle shadow" alt="">
                                            <div class="flex-1 ms-3">
                                                <h6 class="text-white title-dark mb-0">{{item.name}}</h6>
                                                <small class="text-white-50">{{item.position}}</small>
                                            </div>
                                        </div>
                                    </div><!--end customer testi-->
                                </div>
                            </div><!--end owl carousel-->
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </div>
    </div><!--end container-->
</template>

<script setup>
import image from '../../assets/images/bg/studio.jpg';
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import client from '../../assets/images/client/01.jpg';
import client2 from '../../assets/images/client/02.jpg';
import client3 from '../../assets/images/client/03.jpg';
import client4 from '../../assets/images/client/04.jpg';
import client5 from '../../assets/images/client/05.jpg';
import client6 from '../../assets/images/client/06.jpg';

const datas = ref([
    {
        desc: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
        image: client,
        name: 'Thomas Israel',
        position: 'C.E.O'
    },
    {
        desc: `" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "`,
        image: client2,
        name: 'Carl Oliver',
        position: 'P.A'
    },
    {
        desc: '" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "',
        image: client3,
        name: 'Barbara McIntosh',
        position: 'M.D'
    },
    {
        desc: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find "`,
        image: client4,
        name: 'Christa Smith',
        position: 'Manager'
    },
    {
        desc: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
        image: client5,
        name: 'Dean Tolle',
        position: 'Developer'
    },
    {
        desc: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "',
        image: client6,
        name: 'Jill Webb',
        position: 'Designer'
    },
])

onMounted(() => {
    tns({
        container: '.tiny-single-item',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
    });
})
</script>

<style lang="scss" scoped></style>