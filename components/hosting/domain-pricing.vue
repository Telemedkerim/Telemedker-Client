<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h4 class="title mb-3">Choose the convenient pricing</h4>
                <p class="text-muted para-desc mx-auto mb-0">Create, collaborate, and turn your ideas into incredible
                    products with the definitive platform for digital design.</p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row mt-4 pt-2">
        <div class="col-12">
            <div class="table-responsive bg-white shadow rounded">
                <table class="table table-center table-padding mb-0">
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th class="text-center p-4" style="min-width: 200px; max-width: 200px;">
                                <div class="h5">Starter</div>
                                <p class="text-muted fw-normal mt-3 mb-0">We offers a <strong>free month</strong> of
                                    service for new customers.</p>
                                <div class="d-flex justify-content-center text-primary mt-2">
                                    <span class="h6 mb-0 mt-2">$</span>
                                    <span class="price h2 mb-0">4.99</span>
                                </div>
                                <p class="mb-0 text-muted fw-normal">per month</p>
                            </th>
                            <th class="text-center p-4" style="min-width: 200px; max-width: 200px;">
                                <div class="h5">Business</div>
                                <p class="text-muted fw-normal mt-3 mb-0">We offers a <strong>free 14 days</strong> of
                                    service for new customers.</p>
                                <div class="d-flex justify-content-center text-primary mt-2">
                                    <span class="h6 mb-0 mt-2">$</span>
                                    <span class="price h2 mb-0">9.99</span>
                                </div>
                                <p class="mb-0 text-muted fw-normal">per month</p>
                            </th>
                            <th class="text-center p-4" style="min-width: 200px; max-width: 200px;">
                                <div class="h5">Enterprise</div>
                                <p class="text-muted fw-normal mt-3 mb-0">We offers a <strong>free 7 days</strong> of
                                    service for new customers.</p>
                                <div class="d-flex justify-content-center text-primary mt-2">
                                    <span class="h6 mb-0 mt-2">$</span>
                                    <span class="price h2 mb-0">19.99</span>
                                </div>
                                <p class="mb-0 text-muted fw-normal">per month</p>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="item in datas" :key="item">
                            <td class="h6">{{ item.name }}</td>
                            <template v-if="item.show === true">
                                <td v-for="net in item.net" :key="net" class="text-center">{{ net }}</td>
                            </template>
                            <template v-else>
                                <td v-for="net in item.net" :key="net" class="text-center"><i :data-feather="net"
                                        :class="net === 'check' ? 'text-success' : 'text-danger'"
                                        class="fea icon-sm"></i></td>
                            </template>

                        </tr>
                        <tr>
                            <td class="h6">&nbsp;</td>
                            <td class="text-center"><a href="javascript:void(0)" class="btn btn-primary">Start Now</a>
                            </td>
                            <td class="text-center"><a href="javascript:void(0)" class="btn btn-primary">Buy Now</a>
                            </td>
                            <td class="text-center"><a href="javascript:void(0)" class="btn btn-primary">Buy Now</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import feather from 'feather-icons';

const datas = ref([
    {
        name: 'Space',
        net: ['1 GB', '5 GB', '20 GB'],
        show: true
    },
    {
        name: 'Bandwidth',
        net: ['10 GB', '100 GB', '500 GB'],
        show: true
    },
    {
        name: 'Email Accounts',
        net: ['100', '1000', '5000'],
        show: true
    },
    {
        name: 'MySQL Accounts',
        net: ['100', '1000', '5000'],
        show: true
    },
    {
        name: 'Processor',
        net: ['3Core', '5Core', '7Core'],
        show: true
    },
    {
        name: 'CPUs',
        net: ['3.2GHz CPU', '2x3.2GHz CPU', '4x3.2GHz CPU'],
        show: true
    },
    {
        name: 'Cpanel',
        net: ['WHM', 'WHM', 'WHM'],
        show: true
    },
    {
        name: 'Support',
        net: ['Free Setup', '24/7 Hour', '24/7 Hour'],
        show: true
    },
    {
        name: 'SSH Access',
        net: ['x', 'x', 'check'],
        show: false,
        icon: true
    },
    {
        name: 'SMTP Management',
        net: ['x', 'x', 'check'],
        show: false
    },
    {
        name: 'FTP Access',
        net: ['x', 'check', 'check'],
        show: false
    },
    {
        name: 'Google Adwords Credit',
        net: ['x', 'check', 'check'],
        show: false
    },
])

onMounted(() => {
    feather.replace()
})
</script>

<style lang="scss" scoped></style>