<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center center' }">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h1 class="text-white title-dark fw-bold">Blogs & News</h1>
                        <div class="subcribe-form my-4">
                            <form>
                                <div class="mb-0">
                                    <input type="text" id="name" name="name" class="border bg-white rounded-pill"
                                        style="opacity: 0.9;" required placeholder="Search keywords...">
                                    <button type="submit" class="btn btn-pills btn-primary">Search</button>
                                </div>
                                <p class="text-white-50 mb-0 mt-4"><span class="text-light title-dark">Keywords :</span>
                                    Web Developer, Web Designer, Php Developer, IOS Developer, etc...</p>
                            </form>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero End -->

    <section class="section">
        <blog />
    </section>
    <footers />
    <backtotop />

</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-blog.jpg';
import blog from '@/components/blogs/blogs.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>