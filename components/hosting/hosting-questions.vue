<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h4 class="title mb-4">Frequently asked questions</h4>
                <p class="text-muted para-desc mx-auto mb-0">Create, collaborate, and turn your ideas into incredible
                    products with the definitive platform for digital design.</p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row">
        <div v-for="item in datas" :key="item" class="col-md-6 col-12 mt-4 pt-2">
            <div class="d-flex">
                <i data-feather="help-circle" class="fea icon-ex-md text-primary me-2 mt-1"></i>
                <div class="flex-1">
                    <h5 class="mt-0">{{ item.que }} <span class="text-primary">{{ item.quetwo }}</span> {{ item.quethree
                        }}</h5>
                    <p class="answer text-muted mb-0">{{ item.answer }}</p>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue'

const datas = ref([
    {
        que: 'How our',
        quetwo: 'Landflow',
        quethree: 'work ?',
        answer: 'Due to its widespread use as filler text for layouts, non- readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.',
    },
    {
        que: 'What is the main process open account ?',
        quetwo: null,
        quethree: null,
        answer: 'Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.',
    },
    {
        que: 'How to make unlimited data entry ?',
        quetwo: null,
        quethree: null,
        answer: "If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact",
    },
    {
        que: 'Is',
        quetwo: 'Landflow',
        quethree: 'safer to use with my account ?',
        answer: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.",
    },
])
</script>

<style lang="scss" scoped></style>