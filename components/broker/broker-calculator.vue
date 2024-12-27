<template>
    <div class="row align-items-center">
        <div class="col-lg-6">
            <div class="section-title me-lg-5 mb-4 pt-2 mb-lg-0 pb-lg-0 text-lg-start text-center">
                <h4 class="title mb-4">Brokerage Calculator</h4>
                <p class="para-desc mx-auto ms-lg-0 text-muted">Use the brokerage calculator to calculate exactly how
                    much you will pay in brokerage and your breakeven.</p>
            </div>
        </div><!--end col-->

        <div class="col-lg-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div class="p-4 shadow rounded" role="form">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                    <li class="h6 mb-0">Min $ 10000</li>
                    <li class="h6 mb-0">Max $ 200000</li>
                </ul>

                <div class="row">
                    <div class="col-sm-12 mb-4">
                        <label for="slider" class="form-label"></label>
                        <input type="range" value="10000" v-model="sliderValue" min="10000" max="200000"
                            class="form-range custom-range" id="slider">
                    </div><!--end col-->
                </div><!--end row-->

                <ul class="list-unstyled text-center d-md-flex justify-content-between mb-0">
                    <li>
                        <ul class="mb-0 text-md-start brokerage-form list-unstyled">
                            <li class="h5 mb-0"><label class="control-label">Total Value ($)</label></li>
                            <li class="h5 mb-0"><input type="hidden" id="amount" class="form-control"><span
                                    class="text-primary">$</span>
                                <p class="mb-0 d-inline-block h5 text-primary" id="amount-label">{{ sliderValue }}</p>
                            </li>
                        </ul>
                    </li>

                    <li class="mt-2 mt-sm-0">
                        <ul class="mb-0 text-md-end brokerage-form list-unstyled">
                            <li class="h5 mb-0"><label class="control-label">Brokerage Fee</label></li>
                            <li class="h5 mb-0"><input type="hidden" id="saving" class="form-control mb-0">
                                <p class="mb-0 d-inline-block h5 text-primary" id="saving-label">{{ brokerageFee }}</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="container mt-100 mt-60">
        <div class="row align-items-center">
            <div class="col-md-6 order-1 order-md-2">
                <div class="section-title">
                    <h4 class="title mb-4">We let data do the talking</h4>
                    <p class="para=desc text-muted">Regardless of how or what you trade, the broker you choose should be
                        safe to use, affordable, and offer everything you need to trade at your best.</p>
                    <ul class="list-unstyled text-muted h6 mb-0">
                        <li v-for="item in datas" :key="item" class="list-inline-item me-lg-5 me-4"><span
                                class="text-primary h3 me-2"><i :class="item.icon"></i></span>{{ item.name }}</li>
                    </ul>
                    <div class="mt-4">
                        <a href="javascript:void(0)" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div class="card border-0 shadow rounded me-lg-4">
                    <div class="p-2">
                        <a href="javascript:void(0)" class="text-danger"><i class="mdi mdi-circle"></i></a>
                        <a href="javascript:void(0)" class="text-warning"><i class="mdi mdi-circle"></i></a>
                        <a href="javascript:void(0)" class="text-success"><i class="mdi mdi-circle"></i></a>
                    </div>
                    <div class="bg-light card-body p-md-4 p-2">
                        <img src="../../assets/images/saas/dashboard.png" alt="" class="img-fluid mx-auto d-block">
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref, computed } from 'vue';

const sliderValue = ref(10000);
const brokerageFee = computed(() => parseFloat(sliderValue.value * 0.01).toFixed(2));

const datas = ref([
    { icon: 'uil uil-receipt', name: 'Commissions & fees' },
    { icon: 'uil uil-file-shield-alt', name: 'Safety & regulation' },
    { icon: 'uil uil-user', name: 'Customer service' },
    { icon: 'uil uil-meeting-board', name: 'Trading features' },
    { icon: 'uil uil-chart-bar', name: 'Instruments' },
])
</script>

<style lang="scss" scoped></style>