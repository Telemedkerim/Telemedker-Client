<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
                <h6 class="text-primary">Our Pricing</h6>
                <h4 class="title mb-4">Comfortable Plans</h4>
                <p class="text-muted para-desc mx-auto mb-0">
                    <description />
                </p>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="row justify-content-center">
        <div class="col-lg-9">
            <div v-for="(plan, index) in plans" :key="index">
                <div class="mt-4 pt-2">
                    <div class="rounded shadow p-4">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <h5>{{ plan.name }}</h5>
                                <div class="d-flex text-primary">
                                    <span class="h6 mb-0 mt-2">$</span>
                                    <span class="price h2 mb-0">{{ plan.price }}</span>
                                    <span class="h6 align-self-end mb-1"> /month</span>
                                </div>
                            </div><!--end col-->

                            <div class="col-md-6 mt-4 mt-sm-0">
                                <p class="text-muted mb-0">{{ plan.description }}</p>
                            </div><!--end col-->

                            <div class="col-md-3 mt-4 mt-sm-0 text-center text-md-end">
                                <div class="d-grid">
                                    <a href="javascript:void(0)" :class="`btn ${plan.buttonClass}`">{{ plan.buttonText
                                        }}</a>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>

<script setup>
import { ref } from 'vue';


const plans = ref([
    {
        name: 'Free',
        price: 0,
        description: 'This is required when, for example, the final text is not yet available. Dummy text is also known as \'fill text\'.',
        buttonClass: 'btn-outline-primary',
        buttonText: 'Free'
    },
    {
        name: 'Standard',
        price: 19,
        description: 'This is required when, for example, the final text is not yet available. Dummy text is also known as \'fill text\'.',
        buttonClass: 'btn-soft-primary',
        buttonText: 'Buy Now'
    },
    {
        name: 'Business',
        price: 49,
        description: 'This is required when, for example, the final text is not yet available. Dummy text is also known as \'fill text\'.',
        buttonClass: 'btn-primary',
        buttonText: 'Buy Now'
    }
])

</script>

<style lang="scss" scoped></style>