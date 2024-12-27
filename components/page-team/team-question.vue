<template>
    <div class="row align-items-center">
        <div class="col-md-6">
            <div class="me-lg-4">
                <img src="../../assets/images/svg/emails.svg" class="img-fluid" alt="">
            </div>
        </div><!--end col-->

        <div class="col-md-6">
            <div class="section-title mb-4 pb-2">
                <h4 class="title mb-4">Now Engage Clients With IT Solutions</h4>
                <p class="text-muted para-desc mb-0"><description /></p>
            </div>

            <div class="accordion" id="accordionExample">
                <div v-for="(item, index) in datas" :key="index"
                    :class="{ 'accordion-item rounded': true, 'mt-2': index > 0 }">
                    <h2 class="accordion-header" :id="item.id">
                        <button class="accordion-button border-0 bg-light text-primary" :class="{ 'collapsed': !item.show }"
                            type="button" data-bs-toggle="collapse" :data-bs-target="'#' + item.collapseId"
                            :aria-expanded="item.show ? 'true' : 'false'" :aria-controls="item.collapseId">
                            {{ item.question }}
                        </button>
                    </h2>
                    <div :id="item.collapseId" :class="{ 'show': item.show }"
                        class="accordion-collapse border-0 collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body text-muted">
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue'

const datas = ref([
    {
        id: "headingOne",
        collapseId: "collapseOne",
        question: "How does it work ?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: true
    },
    {
        id: "headingTwo",
        collapseId: "collapseTwo",
        question: "Do I need a designer to use Landflow ?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingThree",
        collapseId: "collapseThree",
        question: "What do I need to do to start selling ?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    },
    {
        id: "headingFour",
        collapseId: "collapseFour",
        question: "What happens when I receive an order ?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        show: false,
        mt: 'mt-2'
    }
])
</script>

<style lang="scss" scoped></style>