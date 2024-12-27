<template>
    <navbar :logoLight=true :navLight="'nav-light'" :buttonLight=true />

    <!-- Start -->
    <section class="bg-half-170 d-table w-100 bg-primary" :style="{ 'background-image': 'url(' + (image) + ')' }"
        style="background: url('images/bg/bg-services.png') center center;">
        <div class="container">
            <div class="row mt-5 align-items-center">
                <div class="col-lg-7 col-md-6">
                    <div class="heading-title">
                        <h6 class="text-white-50">Services</h6>
                        <h4 class="heading text-white title-dark mb-3">Space service that <br> moves work forward</h4>
                        <p class="para-desc text-white-50">
                            <description />
                        </p>

                        <div class="mt-4">
                            <a href="javascript:void(0)" class="btn btn-soft-light-alt">Learn More</a>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="mx-auto bg-white p-4 rounded shadow-lg ms-lg-5">
                        <h4 class="form-title mb-4">Get Started Free</h4>
                        <form>
                            <div class="mb-3 position-relative">
                                <label class="form-label">Name <span class="text-danger">*</span></label>
                                <input name="name" id="name" type="text" class="form-control" placeholder="Name :">
                            </div>

                            <div class="mb-3 position-relative">
                                <label class="form-label">Email <span class="text-danger">*</span></label>
                                <input name="email" id="email" type="email" class="form-control" placeholder="Email :">
                            </div>

                            <div class="mb-3 position-relative">
                                <label class="form-label">Password</label>
                                <input type="password" id="password1" class="form-control mb-2"
                                    placeholder="Password :">
                            </div>

                            <div class="d-grid">
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </form><!--end form-->
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <section class="py-4 bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <logos />
            </div>
        </div>
    </section>

    <section class="section">
        <features />
        <div class="container mt-100 mt-60">
            <services />
        </div>
        <div class="container mt-100 mt-60">
            <ClientOnly>
                <client />
            </ClientOnly>
        </div>
        <div class="container mt-100 mt-60">
            <pricing />
        </div>
        <div class="container-fluid px-0 mt-100 mt-60">
            <subscribe />
        </div>
        <div class="container mt-100 mt-60">
            <blogs />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-services.png';
import logos from '@/components/company-logos.vue';
import features from '@/components/services/service-features.vue';
import services from '@/components/services/services.vue';
import client from '@/components/client-review.vue';
import pricing from '@/components/services/service-pricing.vue';
import subscribe from '@/components/services/service-subscribe.vue';
import blogs from '@/components/career-job/blog.vue';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>