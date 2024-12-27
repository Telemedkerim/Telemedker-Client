<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-7">
                <div class="card custom-form border-0">
                    <div class="card-body p-0">
                        <form class="rounded shadow p-4">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Your Name :<span class="text-danger">*</span></label>
                                        <input name="name" id="name" type="text" class="form-control"
                                            placeholder="First Name :">
                                    </div>
                                </div><!--end col-->
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Your Email :<span class="text-danger">*</span></label>
                                        <input name="email" id="email" type="email" class="form-control"
                                            placeholder="Your email :">
                                    </div>
                                </div><!--end col-->
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Your Phone no. :<span
                                                class="text-danger">*</span></label>
                                        <input name="number" id="number" type="number" class="form-control"
                                            placeholder="Your phone no. :">
                                    </div>
                                </div><!--end col-->
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Job Title :</label>
                                        <input name="subject" id="subject" class="form-control" placeholder="Title :">
                                    </div>
                                </div><!--end col-->
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Types of jobs :</label>
                                        <select class="form-select form-control" id="Sortbylist-Shop">
                                            <option>All Jobs</option>
                                            <option>Full Time</option>
                                            <option>Half Time</option>
                                            <option>Remote</option>
                                            <option>In Office</option>
                                        </select>
                                    </div>
                                </div><!--end col-->
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Description :</label>
                                        <textarea name="comments" id="comments" rows="4" class="form-control"
                                            placeholder="Describe the job :"></textarea>
                                    </div>
                                </div><!--end col-->
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label me-1">Upload Your Cv / Resume :</label>
                                        <input type="file" class="form-control-file w-100" id="fileupload">
                                    </div>
                                </div><!--end col-->
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">I Accept <a href="#"
                                                    class="text-primary">Terms And Condition</a></label>
                                        </div>
                                    </div>
                                </div><!--end col-->
                            </div><!--end row-->
                            <div class="row">
                                <div class="col-sm-12">
                                    <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary"
                                        value="Apply Now">
                                </div><!--end col-->
                            </div><!--end row-->
                        </form><!--end form-->
                    </div>
                </div><!--end custom-form-->

                <div class="row align-items-end mb-4 pb-2 mt-5">
                    <div class="col-md-8">
                        <div class="section-title text-center text-md-start">
                            <h4 class="title mb-4">Related Jobs</h4>
                            <p class="text-muted mb-0 para-desc">Start work with Leaping. Build responsive, mobile-first
                                projects on the web with the world's most popular front-end component library.</p>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-4 mt-4 mt-sm-0 d-none d-md-block">
                        <div class="text-center text-md-end">
                            <NuxtLink to="/index-career" class="text-primary">View more Jobs <i
                                    data-feather="arrow-right" class="fea icon-sm"></i></NuxtLink>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->

                <div class="row">
                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="card border-0 bg-light rounded shadow">
                            <div class="card-body p-4">
                                <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Remote</span>
                                <h5>Front-end Developer</h5>
                                <div class="mt-3">
                                    <span class="text-muted d-block"><i
                                            class="uil uil-airplay align-middle text-primary h5"></i> <a
                                            href="https://1.envato.market/hostick-template" target="_blank"
                                            class="text-muted">Hostick pvt. ltd.</a></span>
                                    <span class="text-muted d-block"><i
                                            class="uil uil-map-marker align-middle text-primary h5"></i>
                                        Australia</span>
                                </div>

                                <div class="mt-3">
                                    <NuxtLink to="/career-detail" class="btn btn-primary">View Details</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-md-6 col-12 mt-4 pt-2">
                        <div class="card border-0 bg-light rounded shadow">
                            <div class="card-body p-4">
                                <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Contract</span>
                                <h5>Web Developer</h5>
                                <div class="mt-3">
                                    <span class="text-muted d-block"><i
                                            class="uil uil-airplay align-middle text-primary h5"></i> <a
                                            href="javascript:void(0)" class="text-muted">Landflow pvt. ltd.</a></span>
                                    <span class="text-muted d-block"><i
                                            class="uil uil-map-marker align-middle text-primary h5"></i> USA</span>
                                </div>

                                <div class="mt-3">
                                    <NuxtLink to="/career-detail" class="btn btn-primary">View Details</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div>
            </div>
        </div>
    </div><!--end container-->
</template>

<script setup>

</script>

<style lang="scss" scoped></style>