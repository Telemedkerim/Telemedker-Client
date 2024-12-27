<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="card shadow border-0 rounded">
                    <div class="card-body">
                        <h5 class="card-title">Introduction :</h5>
                        <p class="text-muted">It seems that only fragments of the original text remain in the Lorem
                            Ipsum texts used today. One may speculate that over the course of time certain letters were
                            added or deleted at various positions within the text.</p>

                        <h5 class="card-title">User Agreements :</h5>
                        <p class="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have
                            originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which
                            more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This
                            ancient dummy text is also incomprehensible, but it imitates the rhythm of most European
                            languages in Latin script. The advantage of its Latin origin and the relative
                            meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or
                            distract the viewer's attention from the layout.</p>
                        <p class="text-muted">There is now an abundance of readable dummy texts. These are usually used
                            when a text is required purely to fill a space. These alternatives to the classic Lorem
                            Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                        <p class="text-muted">It seems that only fragments of the original text remain in the Lorem
                            Ipsum texts used today. One may speculate that over the course of time certain letters were
                            added or deleted at various positions within the text.</p>

                        <h5 class="card-title">Restrictions :</h5>
                        <p class="text-muted">You are specifically restricted from all of the following :</p>
                        <ul class="list-unstyled text-muted">
                            <li><i data-feather="arrow-right" class="fea icon-sm me-2"></i>Digital Marketing Solutions
                                for Tomorrow</li>
                            <li><i data-feather="arrow-right" class="fea icon-sm me-2"></i>Our Talented & Experienced
                                Marketing Agency</li>
                            <li><i data-feather="arrow-right" class="fea icon-sm me-2"></i>Create your own skin to match
                                your brand</li>
                            <li><i data-feather="arrow-right" class="fea icon-sm me-2"></i>Digital Marketing Solutions
                                for Tomorrow</li>
                            <li><i data-feather="arrow-right" class="fea icon-sm me-2"></i>Our Talented & Experienced
                                Marketing Agency</li>
                            <li><i data-feather="arrow-right" class="fea icon-sm me-2"></i>Create your own skin to match
                                your brand</li>
                        </ul>

                        <h5 class="card-title">Users Question & Answer :</h5>
                        <div class="accordion mt-4" id="accordionExample">
                            <div v-for="(item, index) in datas" :key="index"
                                :class="{ 'accordion-item rounded': true, 'mt-2': index > 0 }">
                                <h2 class="accordion-header" :id="item.id">
                                    <button class="accordion-button border-0 bg-light text-primary"
                                        :class="{ 'collapsed': !item.show }" type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#' + item.collapseId"
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

                        <div class="mt-3">
                            <a href="javascript:void(0)" class="btn btn-primary mt-2 me-2">Accept</a>
                            <a href="javascript:void(0)" class="btn btn-soft-primary mt-2">Decline</a>
                        </div>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
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