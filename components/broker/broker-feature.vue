<template>
    <div class="container-fluid">
        <div class="features-absolute">
            <div class="row">
                <div v-for="item in datas" :key="item" class="col-lg-2 col-md-4 mt-4 pt-2">
                    <div class="card border-0 text-center features feature-primary core-feature shadow rounded p-4">
                        <div class="icon text-center mx-auto rounded-md">
                            <h3 class="mb-0"><i :class="item.icon"></i></h3>
                        </div>
                        <div class="card-body p-0 mt-4">
                            <a href="javascript:void(0)" class="title text-dark h5">{{ item.name }}</a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div>
    </div><!--end container-->

    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <ul class="list-unstyled text-muted h6 text-lg-center mb-0">
                    <li v-for="item in info" :key="item" class="list-inline-item me-lg-5 me-4"><span
                            class="text-primary h3 me-2"><i class="uil uil-check-circle align-middle"></i></span>{{ item
                        }}
                    </li>
                </ul>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->

</template>

<script setup>
import { ref } from 'vue';


const datas = ref([
    { icon: 'uil uil-money-bill', name: 'Forex' },
    { icon: 'uil uil-university', name: 'Stocks' },
    { icon: 'uil uil-bitcoin', name: 'Crypto' },
    { icon: 'uil uil-gold', name: 'Commodities' },
    { icon: 'uil uil-building', name: 'Real Estate' },
    { icon: 'uil uil-shield-plus', name: 'Insurance' },
])

const info = ref(['Trusted by thousands of traders', '100% free to use', 'Suggests regulated brokers', 'Work with any team'])

</script>

<style lang="scss" scoped></style>