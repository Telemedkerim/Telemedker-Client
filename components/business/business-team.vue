<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Our Team</h6>
                <h4 class="title mb-4">Creative Team Members</h4>
                <p class="text-muted para-desc mx-auto mb-0"><description /></p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div v-for="item in datas" :key="item" class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card text-center team border-0 shadow rounded overflow-hidden">
                <img :src="item.image" class="img-fluid" alt="">
                <div class="card-body py-3 content">
                    <h5 class="mb-0">{{ item.name }}</h5>
                    <h6 class="text-muted mb-0">{{ item.position }}</h6>
                </div>
                <ul class="list-unstyled team-social mb-0">
                    <li><a href="mailto:contact@example.com" class="btn btn-icon btn-pills btn-soft-primary"><i
                                data-feather="mail" class="icons"></i></a></li>
                </ul>
            </div>
        </div><!--end col-->

        <div class="col-12 text-center mt-4 pt-2">
            <div class="alert alert-light alert-pills" role="alert">
                <span class="badge bg-danger rounded-pill me-1">Jobs</span>
                <span class="content">We Are Hiring <a href="javascript:void(0)" class="text-primary"> Send your CV /
                        Resume</a></span>
            </div>
        </div>
    </div><!--end row-->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import image from '../../assets/images/client/01.jpg';
import image2 from '../../assets/images/client/02.jpg';
import image3 from '../../assets/images/client/03.jpg';
import image4 from '../../assets/images/client/04.jpg';
import feather from 'feather-icons'

const datas = ref([
    {
        image: image,
        name: 'Calvin Carlo',
        position: 'Founder / C.E.O'
    },
    {
        image: image2,
        name: 'Janalia Joseph',
        position: 'Co-Founder'
    },
    {
        image: image3,
        name: 'Miriam Coll',
        position: 'C.O.O'
    },
    {
        image: image4,
        name: 'Cristino Murphy',
        position: 'Marketing'
    },
])

onMounted(() => {
    feather.replace()
})

</script>

<style lang="scss" scoped></style>