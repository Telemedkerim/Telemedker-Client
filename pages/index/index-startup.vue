<template>
    <navbar />

    <!-- Start -->
    <section class="bg-half-130 d-table w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center center' }">
        <div class="container">
            <div class="row mt-5 align-items-center">
                <div class="col-md-6">
                    <div class="heading-title">
                        <h4 class="display-4 fw-bold">Better management <br> for better <span
                                class="text-primary">Startup</span></h4>
                        <p class="para-desc text-muted">
                            <description />
                        </p>
                        <div class="subcribe-form mt-4">
                            <form>
                                <div class="mb-3">
                                    <input type="email" id="email" name="email" class="border bg-white rounded" required
                                        placeholder="Email Address">
                                    <button type="submit" class="btn btn-primary">Get Started</button>
                                </div>
                            </form>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">I Accept <a href="#"
                                    class="text-primary">Terms And Condition</a></label>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-md-6 mt-5 mt-sm-0 pt-2 pt-sm-0">
                    <div class="ms-md-4">
                        <img src="../../assets/images/startup-hero.png" class="img-fluid" alt="">
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <section>
        <div class="container">
            <div class="row justify-content-center">
                <logos />
            </div>
        </div>
    </section>

    <section class="section">
        <features />
        <div class="container mt-100 mt-60">
            <startupimages />
        </div>
        <div class="container mt-100 mt-60">
            <ClientOnly>
                <counter />
            </ClientOnly>
        </div>
        <div class="container mt-100 mt-60">
            <collaborate />
        </div>
        <div class="container mt-100 mt-60">
            <man />
        </div>
        <div class="container mt-100 mt-60">
            <subscribe />
        </div>
    </section>
    <footers />
    <backtotop />

</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-startup.png';
import logos from '@/components/company-logos.vue';
import features from '@/components/startup/startup-feature.vue';
import startupimages from '@/components/startup/startup-images.vue';
import counter from '@/components/startup/startup-counter.vue';
import collaborate from '@/components/startup/startup-collaborate.vue';
import man from '@/components/saas/saas-man.vue';
import subscribe from '@/components/startup/startup-subscribe.vue';
import footers from '@/components/footer/footer-light.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>