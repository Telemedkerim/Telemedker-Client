<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 mt-4 pt-2">
                <div class="card features-absolute shadow border-0 rounded overflow-hidden">
                    <div class="p-4 bg-white">
                        <div class="input-group">
                            <input name="name" id="name" type="text" class="form-control rounded-left"
                                placeholder="Your domain name :">
                            <div class="input-group-append" id="button-addon4">
                                <select class="form-control rounded-0" id="domain_list">
                                    <option>.in</option>
                                    <option>.com</option>
                                    <option>.org</option>
                                    <option>.net</option>
                                    <option>.info</option>
                                    <option>.me</option>
                                </select>
                            </div>
                            <input type="submit" id="search" name="search" class="searchbtn btn btn-primary"
                                value="Search">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div v-for="(domain, index) in domains" :key="index" class="col-lg-2 col-md-4 col-6 mt-4">
                        <a href="javascript:void(0)" class="text-dark">
                            <div class="rounded shadow bg-white p-1 text-center">
                                <h6 class="mb-0">{{ domain.name }} <br><span class="text-primary">${{ domain.price
                                        }}/year</span></h6>
                            </div>
                        </a>
                    </div>
                </div>

            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const domains = ref([
    { name: '.in', price: 4.99 },
    { name: '.com', price: 5.99 },
    { name: '.org', price: 6.99 },
    { name: '.net', price: 7.99 },
    { name: '.info', price: 3.99 },
    { name: '.me', price: 2.99 }
])

</script>

<style lang="scss" scoped></style>