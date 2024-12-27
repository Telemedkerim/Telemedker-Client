<template>
    <navbar />

    <!-- Start -->
    <section class="bg-half-170 bg-light"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-lg-10">
                    <div class="card bg-white border-0 rounded shadow"
                        :style="{ 'background-image': 'url(' + (imagebg) + ')', backgroundPosition: 'center center' }">
                        <div class="p-4">
                            <div class="row mb-4">
                                <div class="col-lg-8 col-md-7">
                                    <img src="../assets/images/logo-dark.png" height="28" alt="">
                                    <h5 class="mt-4">Address :</h5>
                                    <h6 class="text-muted mb-0">1419 Riverwood Drive, <br>Redding, CA 96001</h6>
                                </div>

                                <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <ul class="list-unstyled">
                                        <li class="d-flex">
                                            <h6 class="mb-0 text-muted">Invoice no. : </h6>
                                            <h6 class="mb-0 text-dark">&nbsp;&nbsp;#54638990jnn</h6>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <h6 class="mb-0 text-muted">Email : </h6>
                                            <h6 class="mb-0">&nbsp;&nbsp;<a href="mailto:contact@example.com"
                                                    class="text-dark">info@landflow.com</a></h6>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <h6 class="mb-0 text-muted">Phone : </h6>
                                            <h6 class="mb-0">&nbsp;&nbsp;<a href="tel:+152534-468-854"
                                                    class="text-dark">(+12) 1546-456-856</a></h6>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <h6 class="mb-0 text-muted">Website : </h6>
                                            <h6 class="mb-0">&nbsp;&nbsp;<a href="javascript:void(0)"
                                                    class="text-dark">www.landflow.com</a></h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="pt-4 border-top">
                                <div class="row">
                                    <div class="col-lg-8 col-md-7">
                                        <h4 class="text-muted fw-bold">Invoice</h4>
                                        <h6>Website Design & Development <span
                                                class="badge rounded-pill bg-soft-success ms-2">Paid</span></h6>
                                    </div><!--end col-->

                                    <div class="col-lg-4 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                        <ul class="list-unstyled">
                                            <li class="d-flex mt-2">
                                                <h6 class="mb-0 text-muted">Issue Dt. : </h6>
                                                <h6 class="mb-0 text-dark">&nbsp;&nbsp;25th Sep. 2020</h6>
                                            </li>
                                            <li class="d-flex mt-2">
                                                <h6 class="mb-0 text-muted">Due Dt. : </h6>
                                                <h6 class="mb-0 text-dark">&nbsp;&nbsp;11th Oct. 2020</h6>
                                            </li>
                                        </ul>
                                    </div><!--end col-->
                                </div><!--end row-->

                                <div class="row">
                                    <div class="col-lg-8 col-md-7 mt-4 pt-2">
                                        <h5>From :</h5>
                                        <ul class="list-unstyled mb-0">
                                            <li class="d-flex">
                                                <i class="uil uil-user me-2 h6"></i>
                                                <h6 class="text-muted">Calvin Carlo</h6>
                                            </li>

                                            <li class="d-flex">
                                                <i class="uil uil-map-marker me-2 h6"></i>
                                                <h6 class="text-muted">1419 Riverwood Drive, <br>Redding, CA 96001</h6>
                                            </li>

                                            <li class="d-flex">
                                                <i class="uil uil-envelope me-2 h6"></i>
                                                <h6 class="text-muted">calvin.carlo@domain.com</h6>
                                            </li>

                                            <li class="d-flex">
                                                <i class="uil uil-phone me-2 h6"></i>
                                                <h6 class="text-muted">(+12) 1546-456-856</h6>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-4 col-md-5 mt-4 pt-2">
                                        <h5>Bill to :</h5>
                                        <ul class="list-unstyled mb-0">
                                            <li class="d-flex">
                                                <i class="uil uil-user me-2 h6"></i>
                                                <h6 class="text-muted">ABC pvt ltd.</h6>
                                            </li>

                                            <li class="d-flex">
                                                <i class="uil uil-map-marker me-2 h6"></i>
                                                <h6 class="text-muted">1419 Riverwood Drive, <br>Redding, CA 96001</h6>
                                            </li>

                                            <li class="d-flex">
                                                <i class="uil uil-envelope me-2 h6"></i>
                                                <h6 class="text-muted">calvin.carlo@domain.com</h6>
                                            </li>

                                            <li class="d-flex">
                                                <i class="uil uil-phone me-2 h6"></i>
                                                <h6 class="text-muted">(+12) 1546-456-856</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="invoice-table pb-4">
                                    <div class="table-responsive shadow rounded mt-4">
                                        <table class="table table-center invoice-tb mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="border-bottom text-start"
                                                        style="min-width: 60px;">No.</th>
                                                    <th scope="col" class="border-bottom text-start"
                                                        style="min-width: 220px;">Item</th>
                                                    <th scope="col" class="border-bottom text-center"
                                                        style="min-width: 60px;">Qty</th>
                                                    <th scope="col" class="border-bottom" style="min-width: 130px;">Rate
                                                    </th>
                                                    <th scope="col" class="border-bottom" style="min-width: 130px;">
                                                        Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" class="text-start">1</th>
                                                    <td class="text-start">Inclusive Insights</td>
                                                    <td class="text-center">2</td>
                                                    <td>$ 2600</td>
                                                    <td>$ 5200</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="text-start">2</th>
                                                    <td class="text-start">Handy Guide</td>
                                                    <td class="text-center">1</td>
                                                    <td>$ 3660</td>
                                                    <td>$ 3660</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="text-start">3</th>
                                                    <td class="text-start">Premiere Product</td>
                                                    <td class="text-center">3</td>
                                                    <td>$ 4580</td>
                                                    <td>$ 13740</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-4 col-md-5 ms-auto">
                                            <ul class="list-unstyled h6 fw-normal mt-4 mb-0 ms-md-5 ms-lg-4">
                                                <li class="text-muted d-flex justify-content-between">Subtotal :<span>$
                                                        22600</span></li>
                                                <li class="text-muted d-flex justify-content-between">Taxes :<span>
                                                        0</span></li>
                                                <li class="d-flex justify-content-between">Total :<span>$ 22600</span>
                                                </li>
                                            </ul>
                                        </div><!--end col-->
                                    </div><!--end row-->
                                </div>

                                <div class="border-top pt-4">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="text-sm-start text-muted text-center">
                                                <h6 class="mb-0">Customer Services : <a href="tel:+152534-468-854"
                                                        class="text-warning">(+12) 1546-456-856</a></h6>
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <div class="text-sm-end text-muted text-center">
                                                <h6 class="mb-0"><a href="javascript:void(0)" class="text-primary">Terms
                                                        & Conditions</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-end mt-4 pt-2">
                        <a href="javascript:window.print()" class="btn btn-soft-primary d-print-none"><i
                                class="uil uil-print"></i> Print</a>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import image from '../../assets/images/bg/bg-lines-one.png';
import imagebg from '../../assets/images/bg/bg-invoice.png';
import footers from '@/components/footer/footer.vue';
import backtotop from '@/components/back-to-top.vue'

</script>

<style lang="scss" scoped></style>