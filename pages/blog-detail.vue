<template>
    <navbar />

    <section class="bg-half-170 d-table w-100 bg-light">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-lg-10">
                    <div class="section-title">
                        <ul class="list-unstyled mb-3">
                            <li class="list-inline-item text-muted me-3"><i
                                    class="uil uil-calendar-alt text-dark h6 me-1"></i>20th September, 2020</li>
                            <li class="list-inline-item text-muted me-3"><i
                                    class="uil uil-clock text-dark h6 me-1"></i>15 min read</li>
                            <li class="list-inline-item text-muted"><i
                                    class="uil uil-user text-dark h6 me-1"></i>Cristina Murphy</li>
                        </ul>

                        <h2 class="mb-4">{{data?.title ? data?.title :  'How to Perform an SEO Audit Step-by-Step Guide'}}</h2>
                        <p class="text-muted mb-0">This is required when, for example, the final text is not yet
                            available. Dummy text is also known as 'fill text'. It is said that song composers of the
                            past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text
                            to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.
                        </p>
                    </div>

                    <div class="position-relative mt-4 pt-2">
                        <img :src="data?.image ? data?.image : bgimage" class="rounded img-fluid mx-auto d-block" alt="">
                        <div class="play-icon">
                            <a @click="toggle" data-type="youtube" data-id="yba7hPeTSjk"
                                class="lightbox play-btn video-play-icon">
                                <i class="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                            </a>
                        </div>
                    </div>

                    <div class="row align-items-center mt-4">
                        <div class="col-lg-5 col-md-6 mt-4 pt-2">
                            <div class="d-md-flex text-center text-md-start align-items-center">
                                <img src="../assets/images/client/05.jpg" class="avatar avatar-medium rounded-circle"
                                    alt="">
                                <div class="ms-md-4 mt-4 mt-sm-0">
                                    <a href="javascript:void(0)" class="h5 text-dark">Cristina Murphy</a>
                                    <p class="text-muted mb-0">via Linkedin</p>
                                </div>
                            </div>
                        </div><!--end col-->

                        <div class="col-lg-7 col-md-6 mt-4 pt-2">
                            <p class="h5 text-muted text-center text-md-start fw-normal">" There is now an abundance of
                                readable dummy texts. These are usually used when a text is required purely to fill a
                                space. "</p>
                        </div><!--end col-->
                    </div><!--end row-->

                    <div class="row mt-4">
                        <div class="col-md-6 mt-4 pt-2">
                            <img src="../assets/images/blog/1.jpg" class="img-fluid rounded" alt="">
                        </div><!--end col-->

                        <div class="col-md-6 mt-4 pt-2">
                            <img src="../assets/images/blog/2.jpg" class="img-fluid rounded" alt="">
                        </div><!--end col-->
                    </div><!---end row-->

                    <p class="text-muted mt-5">This is required when, for example, the final text is not yet available.
                        Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy
                        texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the
                        melody. Dummy texts have been in use by typesetters since the 16th century.</p>
                    <p class="text-muted">According to most sources, Lorum Ipsum can be traced back to a text composed
                        by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling
                        all the instances of the unusual word 'consectetur' he could find and eventually recognized it
                        as a passage from 'De finibus bonorum et malorum' (On the extremes of Good and Evil) by Cicero,
                        a book that was very popular in the Middle Ages: "Neque porro quisquam est, qui dolorem ipsum,
                        quia dolor sit, amet, consectetur, adipisci velit... " (Approximately: "Nor is there anyone who
                        loves or pursues or desires to obtain pain of itself, because it is pain..."). A typical Lorem
                        Ipsum text goes like this: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
                        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim ...".</p>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div v-if="!isActive" class="modal-video" tabindex="-1" role="dialog" aria-modal="true"
            aria-label="You just opened the modal video">
            <div class="modal-video-body">
                <div class="modal-video-inner">
                    <div class="modal-video-movie-wrap">
                        <iframe width="460" height="230"
                            :src="`https://www.youtube.com/embed/${youtubeId}?feature=oembed`" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" tabindex="-1">
                        </iframe>
                        <a @click="toggle" class="mdi mdi-close m-3 h4 position-class title-icon"> </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-100 mt-60">
            <relatedblog />
        </div>
    </section>
    <subscribe />
    <footers :footerbar="'footer-bar'" />
    <backtotop />

</template>

<script setup>
import { ref, onMounted } from 'vue';
import navbar from '@/components/navbar/navbar.vue';
import relatedblog from '@/components/blogs/blog-related.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue';
import { useRoute } from 'vue-router';
import bgimage from '../assets/images/blog/single.jpg'
import image from '../assets/images/blog/1.jpg';
import image2 from '../assets/images/blog/2.jpg';
import image3 from '../assets/images/blog/3.jpg';
import image4 from '../assets/images/blog/4.jpg';
import image5 from '../assets/images/blog/5.jpg';
import image6 from '../assets/images/blog/6.jpg';
import image7 from '../assets/images/blog/7.jpg';
import image8 from '../assets/images/blog/8.jpg';
import image9 from '../assets/images/blog/9.jpg';
import image10 from '../assets/images/blog/10.jpg';
import image11 from '../assets/images/work/1.jpg';
import image12 from '../assets/images/work/2.jpg';
import image13 from '../assets/images/work/3.jpg';
import image14 from '../assets/images/work/4.jpg'
import subscribe from '@/components/career-job/career-subscribe.vue'


const isActive = ref(true);
const youtubeId = ref('yba7hPeTSjk');
const data = ref('');
const route = useRoute();
const id = ref('')


const datas = ref([
    {
        id: 1,
        image: image,
        name: 'Software',
        title: 'A place where technology meets craftsmanship'
    },
    {
        id: 2,
        image: image2,
        name: 'Designer',
        title: 'Talisker bay on the isle of skye in scotland'
    },
    {
        id: 3,
        image: image3,
        name: 'Developer',
        title: 'A beginner’s guide to customer journey maps'
    },
    {
        id: 4,
        image: image4,
        name: 'Software',
        title: 'A place where technology meets craftsmanship'
    },
    {
        id: 5,
        image: image5,
        name: 'Designer',
        title: 'Talisker bay on the isle of skye in scotland'
    },
    {
        id: 6,
        image: image6,
        name: 'Developer',
        title: 'A beginner’s guide to customer journey maps'
    },
    {
        id: 7,
        image: image7,
        name: 'Software',
        title: 'A place where technology meets craftsmanship'
    },
    {
        id: 8,
        image: image8,
        name: 'Designer',
        title: 'Talisker bay on the isle of skye in scotland'
    },
    {
        id: 9,
        image: image9,
        name: 'Developer',
        title: 'A beginner’s guide to customer journey maps'
    },
    {
        id: 10,
        image: image10,
        name: 'Developer',
        title: 'A beginner’s guide to customer journey maps'
    },
    {
        id: 11,
        image: image11,
        title: 'Creative and modern design',
        type: 'Creative'
    },
    {
        id: 12,
        image: image12,
        title: 'Creative and modern design',
        type: 'Creative'
    },
    {
        id: 13,
        image: image13,
        title: 'Creative and modern design',
        type: 'Creative'
    },
    {
        id: 14,
        image: image14,
        title: 'Creative and modern design',
        type: 'Creative'
    },
])

const toggle = () => {
    isActive.value = !isActive.value;
}

onMounted(() => {
    id.value = route.params.id;
    data.value = datas.value.find((item) => item.id === parseInt(id.value))
})
</script>

<style lang="scss" scoped></style>