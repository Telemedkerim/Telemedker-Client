<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h4 class="mb-4">General Questions</h4>
                <p class="para-desc mx-auto text-muted mb-0"><description /></p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row justify-content-center">
        <div class="col-lg-9 mt-4 pt-2">
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
import { ref } from 'vue';

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