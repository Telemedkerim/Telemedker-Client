<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="rounded shadow">
                    <div class="p-4 d-flex align-items-center justify-content-between">
                        <h5 class="mb-0">Payment Method</h5>

                        <a href="javascript:void(0)" class="btn btn-primary"><i class="uil uil-plus"></i> Add</a>
                    </div>
                    <div class="p-4 border-top">
                        <div v-for="(item, index) in datas" :key="index"
                            :class="{ 'pb-4': index === 0, 'border-top py-4': index > 0 }">
                            <h6>{{ item.name }} <span class="badge rounded-pill ms-2"
                                    :class="item.type === 'Default' ? 'bg-soft-success' : 'bg-soft-danger'">{{ item.type }}</span>
                            </h6>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center mt-1">
                                    <img :src="item.image" class="avatar avatar-small" alt="">
                                    <div class="flex-1 ms-3">
                                        <h6 class="mb-0">{{ item.card }} &nbsp;&nbsp; {{ item.number }}</h6>
                                        <p class="text-muted mb-0">{{ item.exp }}</p>
                                    </div>
                                </div>

                                <div class="btn-group dropdown dropdown-primary">
                                    <button type="button"
                                        class="btn btn-icon btn-pills btn-soft-primary dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                            class="uil uil-ellipsis-v icons"></i></button>
                                    <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-2 py-3"
                                        style="width: 200px;">
                                        <a class="dropdown-item text-dark" href="#"><i
                                                class="uil uil-cog align-middle me-1"></i> Edit</a>
                                        <a class="dropdown-item text-dark" href="#"><i
                                                class="uil uil-trash align-middle me-1"></i> Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded shadow mt-4">
                    <div class="p-4">
                        <h5 class="mb-0">Payment History</h5>
                    </div>

                    <div class="p-4 border-top">
                        <ul v-for="(item, index) in historys" :key="index"
                            :class="{ 'list-unstyled d-md-flex justify-content-between': true, 'mb-0': index === 3 }">
                            <li class="list-inline-item">
                                <ul class="list-unstyled mb-0">
                                    <li class="list-inline-item me-3"><a href="javascript:void"
                                            class="text-primary">{{item.date}}</a></li>
                                    <li class="list-inline-item h6 mb-0">{{item.name}}</li>
                                </ul>
                            </li>

                            <li class="list-inline-item h6">$ {{item.price}}</li>
                        </ul>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';
import image from '../../assets/images/payment/visa.png';
import image2 from '../../assets/images/payment/mastercard.png';
import image3 from '../../assets/images/payment/american.png';

const datas = ref([
    {
        name: 'Calvin Carlo',
        type: 'Default',
        image: image,
        card: 'Visa',
        number: '•••• 4559',
        exp: 'Expires 12/22',
        default: true
    },
    {
        name: 'Calvin Carlo',
        type: null,
        image: image2,
        card: 'Mastercard',
        number: '•••• 4584',
        exp: 'Expires 12/22'
    },
    {
        name: 'Calvin Carlo',
        type: 'Expired',
        image: image3,
        card: 'American',
        number: '•••• 5796',
        exp: 'Expires 12/22',
        expired: true
    },
]);

const historys = ref([
    {
        date: '20th Sep. 2020',
        name: 'Landflow Landing',
        price: '16.00'
    },
    {
        date: '16th Sep. 2020',
        name: 'Landrick Landing',
        price: '16.00'
    },
    {
        date: '1st Sep. 2020',
        name: 'Hostick Landing',
        price: '16.00'
    },
    {
        date: '25th Aug. 2020',
        name: 'Cristino Personal',
        price: '16.00'
    }
])

</script>

<style lang="scss" scoped></style>