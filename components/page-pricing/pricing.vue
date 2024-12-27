<template>
    <div class="container">
        <div class="features-absolute">
            <div class="row justify-content-center">
                <div v-for="(plan, index) in plans" :key="index" class="col-lg-4 col-md-6">
                    <div class="card pricing border-0 p-4 rounded-md shadow">
                        <div class="card-body p-2">
                            <span class="py-2 px-4 d-inline-block bg-soft-primary h6 mb-0 text-primary rounded-lg">{{
                                plan.name }}</span>
                            <h2 class="fw-bold mb-0 mt-3">${{ plan.price }}.00</h2>
                            <p class="text-muted">Per Month</p>

                            <p class="text-muted">{{ plan.description }}</p>

                            <ul class="list-unstyled pt-3 border-top">
                                <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                                    class="h6 text-muted mb-0">
                                    <span class="text-primary h4 me-2"><i
                                            class="uil uil-check-circle align-middle"></i></span>
                                    {{ feature }}
                                </li>
                            </ul>

                            <div class="mt-4">
                                <div class="d-grid">
                                    <a href="javascript:void(0)" class="btn btn-primary">Buy Now</a>
                                </div>
                                <p class="text-muted mt-3 mb-0">*No credit card required</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const plans = ref([
    {
        name: "Basic",
        price: 9,
        description: "All the basics for businesses that are just getting started.",
        features: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free", "Enhanced Security"],
    },
    {
        name: "Business",
        price: 39,
        description: "Better for growing businesses that want more customers.",
        features: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free", "Enhanced Security"],
    },
    {
        name: "Standard",
        price: 79,
        description: "Advanced features for pros who need more customization.",
        features: ["Full Access", "Enhanced Security", "Source Files", "1 Domain Free", "Enhanced Security"],
    },
])
</script>