<template>
    <!-- MAINTENANCE PAGE -->
    <section class="bg-home d-flex align-items-center" data-jarallax='{"speed": 0.5}'
        :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <img src="../assets/images/logo-light.png" height="30" alt="">
                    <div class="display-3 fw-bold text-white title-dark mt-4 mb-4">We are back soon...</div>
                    <p class="text-white-50 para-desc mx-auto">Explore and learn more about everything from machine
                        learning and global payments to scaling your team.</p>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="text-center">
                        <span id="maintenance" class="timer"></span><span
                            class="d-block h6 text-uppercase text-white title-dark">Minutes</span>
                        <!-- <div id="maintenance" class="mb-4 overflow-hidden text-center"></div> -->
                    </div>
                </div>
            </div>

            <div class="row mt-4 pt-2">
                <div class="col-12 text-center">
                    <div class="subcribe-form">
                        <form action="/">
                            <input name="email" id="email" type="email" class="rounded-pill" required=""
                                placeholder="Your email :">
                            <button type="submit" class="btn btn-primary rounded-pill">Subscribe</button>
                        </form>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div> <!-- end container -->
    </section><!--end section-->
    <!-- MAINTENANCE PAGE -->

    <backto :back=true />
</template>

<script setup>
import image from '../../assets/images/bg/maintenance.jpg';
import backto from '@/components/back-to-top.vue'
import { ref, onMounted } from 'vue';

let timer = ref(60 * 60) // 1 hour in seconds
let minutes = ref('')
let seconds = ref('')

onMounted(() => {
    const display = document.querySelector('#maintenance')
    setInterval(() => {
        minutes.value = String(Math.floor(timer.value / 60)).padStart(2, '0')
        seconds.value = String(timer.value % 60).padStart(2, '0')
        display.textContent = `${minutes.value}:${seconds.value}`
        timer.value--
        if (timer.value < 0) {
            timer.value = 60 * 60
        }
    }, 1000)
}) 
</script>

<style lang="scss" scoped></style>