<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="features-absolute career-form bg-white p-4 rounded shadow">
                    <form>
                        <div class="row text-start">
                            <div class="col-lg-4 col-md-4">
                                <div class="mb-0">
                                    <input type="text" class="form-control" required placeholder="Keywords">
                                </div>
                            </div><!--end col-->

                            <div class="col-lg-8 col-md-8">
                                <div class="row align-items-center">
                                    <div class="col-md-4 mt-4 mt-sm-0">
                                        <div class="mb-0">
                                            <select class="form-select form-control" v-model="selectedLocation">
                                                <option value="" selected>Location</option>
                                                <option v-for="location in locations" :key="location.value"
                                                    :value="location.value">
                                                    {{ location.text }}
                                                </option>
                                            </select>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-md-4 mt-4 mt-sm-0">
                                        <div class="mb-0">
                                            <select class="form-select form-control" v-model="selectedJobType">
                                                <option value="" selected>Job Types</option>
                                                <option v-for="jobType in jobTypes" :key="jobType.value"
                                                    :value="jobType.value">
                                                    {{ jobType.text }}
                                                </option>
                                            </select>
                                        </div>
                                    </div><!--end col-->

                                    <div class="col-md-4 mt-4 mt-sm-0">
                                        <div class="d-grid">
                                            <input type="submit" id="search" name="search"
                                                class="searchbtn btn btn-primary" value="Search" @click="search">
                                        </div>
                                    </div><!--end col-->
                                </div><!--end row-->
                            </div><!--end col-->
                        </div><!--end row-->
                    </form><!--end form-->
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const locations = ref([
    { value: 'AF', text: 'Afghanistan' },
    { value: 'AX', text: 'Åland Islands' },
    { value: 'AL', text: 'Albania' },
    { value: 'DZ', text: 'Algeria' },
    { value: 'AS', text: 'American Samoa' },
    { value: 'AD', text: 'Andorra' },
    { value: 'AO', text: 'Angola' },
    { value: 'AI', text: 'Anguilla' },
    { value: 'AQ', text: 'Antarctica' },
])

const jobTypes = ref([
    { value: '4', text: 'Accounting' },
    { value: '1', text: 'IT & Software' },
    { value: '3', text: 'Marketing' },
    { value: '5', text: 'Banking' },
])

const selectedLocation = ref('')
const selectedJobType = ref('')

</script>

<style lang="scss" scoped></style>