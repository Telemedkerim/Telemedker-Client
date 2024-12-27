<template>
    <!-- Start -->
    <footer class="bg-footer" :class="footerbar">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="#" class="logo-footer">
                        <img src="../../assets/images/logo-footer.png" height="48" alt="">
                    </a>
                    <ul class="list-unstyled footer-list px-0 mt-4">
                        <li v-for="(contact, index) in contacts" :key="index">
                            <i :data-feather="contact.icon" class="fea icon-sm me-2"></i>
                            <a :href="contact.href" class="text-foot">{{ contact.text }}</a>
                        </li>
                    </ul>
                </div><!--end col-->

                <div class="col-lg-9 col-md-12">
                    <div class="row">
                        <div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="footer-head">Company</h5>
                            <ul class="list-unstyled footer-list mt-4">
                                <li v-for="item in datas.slice(0, 6)" :key="item"><a href="javascript:void(0)"
                                        class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> {{ item }}</a></li>
                            </ul>
                        </div><!--end col-->

                        <div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="footer-head">Features</h5>
                            <ul class="list-unstyled footer-list mt-4">
                                <li v-for="item in datas.slice(6, 10)" :key="item"><a href="javascript:void(0)"
                                        class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> {{ item }}</a></li>

                            </ul>
                        </div><!--end col-->

                        <div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="footer-head">Documentation</h5>
                            <ul class="list-unstyled footer-list mt-4">
                                <li v-for="item in datas.slice(10, 14)" :key="item"><a href="javascript:void(0)"
                                        class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> {{ item }}</a></li>

                            </ul>
                        </div><!--end col-->

                        <div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="footer-head">Usefull Links</h5>
                            <ul class="list-unstyled footer-list mt-4">
                                <li v-for="item in datas.slice(14, 16)"><a href="javascript:void(0)"
                                        class="text-foot"><i class="mdi mdi-chevron-right me-1"></i>{{ item + ' Policy'
                                        }} </a></li>

                            </ul>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-5">
            <div class="pt-4 footer-bar">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="text-sm-start text-center">
                            <ul class="list-unstyled social-icon social mb-0 mt-4 mt-sm-0">
                                <li v-for="item in social" :key="item" class="list-inline-item me-1"><a
                                        :href="item.link" target="_blank" class="rounded"><i :class="item.icon"
                                            title="dribbble"></i></a></li>
                            </ul><!--end icon-->
                        </div>
                    </div>

                    <div class="col-sm-6 mt-4 mt-sm-0">
                        <ul class="list-unstyled footer-list text-sm-end text-center mb-0">
                            <li v-for="item in datas.slice(14, 18)" class="list-inline-item"><a
                                    href="javascript:void(0)" class="text-foot me-2">{{ item }}</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="row justify-content-center mt-4">
                    <div class="col-12 text-center">
                        <p class="mb-0">©
                            {{ date }} Landflow. Design & Develop with <i class="mdi mdi-heart text-danger"></i> by <a
                                href="https://shreethemes.in" target="_blank" class="text-reset">Shreethemes</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer><!--end footer-->
    <!-- End -->
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import feather from 'feather-icons'

defineProps({
    footerbar: {
        type: String,
        required: true
    }
})

const date = ref(new Date().getFullYear());

const datas = ref(['About us', 'Services', 'Team', 'Project', 'Blog', 'Login', 'Release Notes', 'Invoice', 'Integrations', 'APIs', 'Support', 'Docs', 'Changelog', 'Components', 'Terms', 'Privacy', 'About', 'Contact'])

const contacts = ref([
        { icon: 'map-pin', href: '#', text: 'Londan, England' },
        { icon: 'mail', href: 'mailto:test@yourdomain.com', text: 'test@yourdomain.com' },
        { icon: 'phone', href: 'tel:+152534-468-854', text: '+ (125) 1254-5487' }
      ])

const social = ref([
    {
        link: 'https://dribbble.com/shreethemes',
        icon: 'uil uil-dribbble align-middle'
    },
    {
        link: 'https://www.behance.net/shreethemes',
        icon: 'uil uil-behance'
    },
    {
        link: 'http://linkedin.com/company/shreethemes',
        icon: 'uil uil-linkedin'
    },
    {
        link: 'https://www.facebook.com/shreethemes',
        icon: 'uil uil-facebook-f align-middle'
    },
    {
        link: 'https://www.instagram.com/shreethemes/',
        icon: 'uil uil-instagram align-middle'
    },
    {
        link: 'https://twitter.com/shreethemes',
        icon: 'uil uil-twitter align-middle'
    },
    {
        link: 'mailto:support@shreethemes.in',
        icon: 'uil uil-envelope align-middle'
    },
    {
        link: 'https://forms.gle/QkTueCikDGqJnbky9',
        icon: 'uil uil-file align-middle'
    },
])

onMounted(() => {
    feather.replace()
})
</script>

<style lang="scss" scoped></style>