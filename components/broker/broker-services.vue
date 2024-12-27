<template>
    <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center">
                    <h2 class="mb-4">The fastest way to find an <br> online broker</h2>
                    <p class="text-muted para-desc mx-auto mb-0">
                        <description />
                    </p>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div>

    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6 order-1 order-md-2 mt-5 mt-lg-0">
                <div class="section-title">
                    <h4 class="title mb-4">Great Service and Big Savings</h4>
                    <p v-for="item in datas" :key="item" class="para-desc text-muted">{{ item }}</p>

                    <div class="mt-4">
                        <a href="javascript:void(0)" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-md-6 order-2 order-md-1">
                <img src="../../assets/images/svg/business-deal.svg" class="img-fluid" alt="">
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref(['Regardless of how or what you trade, the broker you choose should be safe to use, affordable, and offer everything you need to trade at your best.', 'That’s why we’re highly selective. We only feature brokers regulated by a trusted authority and we make it easy to compare their fees & features, so that you can make an informed choice.'])
</script>

<style lang="scss" scoped></style>