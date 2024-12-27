<template>

    <!-- Hero Start -->
    <section class="bg-home d-flex bg-light align-items-center"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-8">
                    <img src="../assets/images/logo-dark.png" class="mx-auto logo-dark" alt="">
                    <img src="../assets/images/logo-light.png" class="mx-auto logo-white" alt="">
                    <div class="card login-page bg-white shadow mt-4 rounded border-0">
                        <div class="card-body">
                            <h4 class="text-center">Recover Account</h4>
                            <form class="login-form mt-4">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p class="text-muted">Please enter your email address. You will receive a link
                                            to create a new password via email.</p>
                                        <div class="mb-3 position-relative">
                                            <label class="form-label">Email address <span
                                                    class="text-danger">*</span></label>
                                            <input type="email" class="form-control"
                                                placeholder="Enter Your Email Address" name="email" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="d-grid">
                                            <button class="btn btn-primary">Send</button>
                                        </div>
                                    </div>
                                    <div class="mx-auto">
                                        <p class="mb-0 mt-3"><small class="text-dark me-2">Remember your password
                                                ?</small> <NuxtLink to="/login" class="text-dark fw-bold">Sign
                                                in</NuxtLink></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div><!---->
                </div> <!--end col-->
            </div><!--end row-->
        </div> <!--end container-->
    </section><!--end section-->
    <!-- Hero End -->

    <backto :back=true />

</template>

<script setup>
import image from '../../assets/images/bg/bg-lines-one.png';
import backto from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>