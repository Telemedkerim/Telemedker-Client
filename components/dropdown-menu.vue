<template>
    <div class="col-12 mt-4 pt-2">
        <div class="card component-wrapper border-0 rounded shadow">
            <div class="p-4 border-bottom">
                <h5 class="mb-0"> Dropdown </h5>
            </div>

            <div class="p-4">
                <h6 class="text-muted mb-2 pb-2">Ex. <br>
                    <code class="text-danger">
                    &lt;div class="btn-group dropdown-primary"&gt;<br>&nbsp;&nbsp;
                    &lt;button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;
                    Primary<br>&nbsp;&nbsp;
                    &lt;/button&gt;<br>&nbsp;&nbsp;
                    &lt;div class="dropdown-menu"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;
                    &lt;a class="dropdown-item" href="#"&gt;Home&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;
                    &lt;a class="dropdown-item" href="#"&gt;Services&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;
                    &lt;a class="dropdown-item" href="#"&gt;About us&lt;/a&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;
                    &lt;div class="dropdown-divider"&gt;&lt;/div&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;
                    &lt;a class="dropdown-item" href="#"&gt;Contact us&lt;/a&gt;<br>&nbsp;&nbsp;
                    &lt;/div&gt;<br>
                    &lt;/div&gt;
                </code>
                </h6>

                <div v-for="(dropdown, index) in dropdowns" :key="index" class="btn-group"
                    :class="`dropdown-${dropdown.type}`">
                    <button type="button" :class="`btn btn-${dropdown.type} dropdown-toggle me-2 mt-2`"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ dropdown.label }}
                    </button>
                    <div class="dropdown-menu">
                        <a v-for="(item, index) in dropdown.items.slice(0, 3)" :key="index" :href="`javascript:void(0)`"
                            class="dropdown-item">
                            {{ item }}
                        </a>
                        <div class="dropdown-divider"></div>
                        <a v-for="(item, index) in dropdown.items.slice(3, 4)" :key="index" :href="`javascript:void(0)`"
                            class="dropdown-item">
                            {{ item }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div><!--end col-->

</template>

<script setup>
import { ref } from 'vue';
import 'bootstrap/dist/js/bootstrap.js';

const dropdowns = ref([
    { type: 'primary', label: 'Primary', items: ['Home', 'Services', 'About us', 'Contact us']},
    { type: 'secondary', label: 'Secondary', items: ['Home', 'Services', 'About us', 'Contact us']},
    { type: 'success', label: 'Success', items: ['Home', 'Services', 'About us', 'Contact us']},
    { type: 'warning', label: 'Warning', items: ['Home', 'Services', 'About us', 'Contact us']},
    { type: 'info', label: 'Info', items: ['Home', 'Services', 'About us', 'Contact us']},
    { type: 'danger', label: 'Danger', items: ['Home', 'Services', 'About us', 'Contact us']},
    { type: 'dark', label: 'Dark', items: ['Home', 'Services', 'About us', 'Contact us']}
]);

</script>

<style lang="scss" scoped></style>