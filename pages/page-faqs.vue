<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <!-- Home Start -->
    <section class="bg-half-260 d-table w-100" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h2 class="title text-white title-dark">How can we help you ?</h2>
                        <div class="subcribe-form my-4">
                            <form>
                                <div class="mb-0">
                                    <input type="text" id="name" name="name" class="border bg-white rounded-pill"
                                        style="opacity: 0.8;" required placeholder="Ask a questions...">
                                    <button type="submit" class="btn btn-pills btn-primary">Search</button>
                                </div>
                            </form>
                        </div>
                        <p class="text-white-50 mb-0 para-desc mx-auto">*We are collect your searching keywords to
                            improve our FAQ</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />
    <section class="section">
        <category />
        <div class="container mt-100 mt-60">
            <questions />
        </div>
        <div class="container mt-100 mt-60">
            <stillquestion />
        </div>
    </section>
    <div class="position-relative">
        <div class="shape overflow-hidden text-footer">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../assets/images/bg/bg-faqs.jpg';
import shape from '@/components/shape-light.vue';
import category from '@/components/page-faqs/category.vue';
import questions from '@/components/page-faqs/faqs-questions.vue';
import stillquestion from '@/components/page-faqs/still-question.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'


</script>

<style lang="scss" scoped></style>