<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="card shadow rounded border-0">
                    <div class="card-body">
                        <h5 class="card-title">Overview :</h5>
                        <p v-for="item in datas.slice(0, 3)" :key="item" class="text-muted">{{ item }}</p>

                        <h5 class="card-title">We use your information to :</h5>
                        <ul class="list-unstyled text-muted">
                            <li v-for="item in datas.slice(3, 9)" :key="item" class="mt-2"><i data-feather="arrow-right"
                                    class="fea icon-sm me-2"></i>{{ item }}</li>
                        </ul>

                        <h5 class="card-title">Information Provided Voluntarily :</h5>
                        <p class="text-muted">In the 1960s, the text suddenly became known beyond the professional
                            circle of typesetters and layout designers when it was used for Letraset sheets (adhesive
                            letters on transparent film, popular until the 1980s) Versions of the text were subsequently
                            included in DTP programmes such as PageMaker etc.</p>

                        <a href="javascript:window.print()" class="btn btn-soft-primary d-print-none"><i
                                class="uil uil-print"></i> Print</a>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import feather from 'feather-icons'

const datas = ref(['It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.', 'In the 1960s, the text suddenly became known beyond the professional    circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.', 'There is now an abundance of readable dummy texts. These are usually used   when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.', 'Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand', 'Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'])

onMounted(() => {
    feather.replace()
})

</script>

<style lang="scss" scoped></style>