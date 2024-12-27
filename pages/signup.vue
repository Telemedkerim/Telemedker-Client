<template>
    <!-- Hero Start -->
    <section class="bg-half-130 d-table w-100 bg-light"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-8">
                    <img src="../assets/images/logo-dark.png" class="mx-auto logo-dark" alt="">
                    <img src="../assets/images/logo-light.png" class="mx-auto logo-white" alt="">
                    <div class="card login-page bg-white shadow mt-4 rounded border-0">
                        <div class="card-body">
                            <h4 class="text-center">Sign Up</h4>
                            <form class="login-form mt-4">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3 position-relative">
                                            <label class="form-label">First name <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="First Name" name="s"
                                                required="">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3 position-relative">
                                            <label class="form-label">Last name <span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" placeholder="Last Name" name="s"
                                                required="">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3 position-relative">
                                            <label class="form-label">Your Email <span
                                                    class="text-danger">*</span></label>
                                            <input type="email" class="form-control" placeholder="Email" name="email"
                                                required="">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3 position-relative">
                                            <label class="form-label">Password <span
                                                    class="text-danger">*</span></label>
                                            <input type="password" class="form-control" placeholder="Password"
                                                required="">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexCheckDefault">
                                                <label class="form-check-label" for="flexCheckDefault">I Accept <a
                                                        href="#" class="text-primary">Terms And Condition</a></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="d-grid">
                                            <button class="btn btn-primary">Register</button>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 mt-3 text-center">
                                        <h6 class="text-muted">Or</h6>
                                    </div><!--end col-->

                                    <div class="col-6 mt-3">
                                        <div class="d-grid">
                                            <a href="javascript:void(0)" class="btn btn-soft-primary"><i
                                                    class="uil uil-facebook"></i> Facebook</a>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-6 mt-3">
                                        <div class="d-grid">
                                            <a href="javascript:void(0)" class="btn btn-soft-primary"><i
                                                    class="uil uil-google"></i> Google</a>
                                        </div>
                                    </div><!--end col-->

                                    <div class="mx-auto">
                                        <p class="mb-0 mt-3"><small class="text-dark me-2">Already have an account
                                                ?</small>
                                            <NuxtLink to="/login" class="text-dark fw-bold">Sign
                                                in</NuxtLink>
                                        </p>
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