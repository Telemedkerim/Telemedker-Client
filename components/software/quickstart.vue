<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="section-title text-center mb-4 pb-2">
                    <h6 class="text-primary">Quickstart</h6>
                    <h4 class="title mb-4">Awesome isn't it? Let's dive in!</h4>
                    <p class="para-desc mx-auto text-muted mb-0">
                        <description />
                    </p>
                </div>
            </div><!--end col-->
        </div><!--end row-->

        <div class="row justify-content-center">
            <div class="col-lg-8 col-mg-10 mt-4 pt-2">
                <div class="bg-dark bg-white-dark p-4 rounded shadow">
                    <div class="row">
                        <div class="col-lg-12">
                            <ul class="nav nav-pills nav-justified flex-column flex-sm-row rounded bg-soft-light"
                                id="pills-tab" role="tablist">
                                <li class="nav-item" v-for="(item, index) in tabs" :key="index">
                                    <a class="nav-link nav-link-alt rounded" :class="{ active: item.active }"
                                        :id="`pills-${item.id}-tab`" data-bs-toggle="pill" :href="`#${item.id}`"
                                        role="tab" :aria-controls="item.id" :aria-selected="item.active">
                                        <div class="text-center">
                                            <h5 class="title fw-normal mb-0 text-light title-dark">{{ item.name }}</h5>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade" :class="{ 'show active': item.active }"
                                    v-for="(item, index) in tabs" :key="index" :id="item.id" role="tabpanel"
                                    :aria-labelledby="`pills-${item.id}-tab`">
                                    <p v-if="item.active == true" class="text-muted fw-bold mb-0"><span class="text-success">$</span> npm install
                                        <span class="text-success">-g</span> claps.js
                                    </p>
                                    <p class="text-muted fw-bold mb-0">{{ item.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="list-unstyled text-muted mb-0 mt-3">
                    <li v-for="item in datas" :key="item" class="list-inline-item me-lg-5 me-4"><span class="text-success h5 me-2"><i
                                class="uil uil-check-circle align-middle"></i></span>{{ item }}</li>
                  
                </ul>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { id: 'npm', name: 'npm', active: true },
    { id: 'nuget', name: 'nuget', active: false, content: 'coming soon ...' },
    { id: 'spm', name: 'spm', active: false, content: 'coming soon ...' },
    { id: 'github', name: 'github', active: false, content: 'coming soon ...' }
])

const datas = ref(['Organize your data', 'Work with any team'])
</script>

<style lang="scss" scoped></style>