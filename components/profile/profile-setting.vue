<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9">
                <div class="rounded shadow">
                    <div class="p-4 border-bottom">
                        <h5 class="mb-0">Personal Information :</h5>
                    </div>

                    <div class="p-4 border-bottom">
                        <div class="row align-items-center">
                            <div class="col-lg-2 col-md-2">
                                <img src="../../assets/images/client/01.jpg"
                                    class="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt="">
                            </div><!--end col-->

                            <div class="col-lg-5 col-md-5 text-center text-md-start mt-4 mt-sm-0">
                                <h5 class="">Upload your picture</h5>
                                <p class="text-muted mb-0">For best results, use an image at least 256px by 256px in
                                    either .jpg or .png format</p>
                            </div><!--end col-->

                            <div class="col-lg-5 col-md-5 text-md-end text-center mt-4 mt-sm-0">
                                <a href="javascript:void(0)" class="btn btn-primary">Upload</a>
                                <a href="javascript:void(0)" class="btn btn-soft-primary ms-2">Remove</a>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>

                    <div class="p-4">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">First Name</label>
                                        <input name="name" id="name" type="text" class="form-control"
                                            placeholder="First Name :">
                                    </div>
                                </div><!--end col-->

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Last Name</label>
                                        <input name="name" id="name2" type="text" class="form-control"
                                            placeholder="First Name :">
                                    </div>
                                </div><!--end col-->

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Your Email</label>
                                        <input name="email" id="email" type="email" class="form-control"
                                            placeholder="Your email :">
                                    </div>
                                </div><!--end col-->

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Phone no.</label>
                                        <input name="number" id="number" type="text" class="form-control"
                                            placeholder="Phone no. :">
                                    </div>
                                </div><!--end col-->

                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Your Bio Here</label>
                                        <textarea name="comments" id="comments" rows="4" class="form-control"
                                            placeholder="Bio :"></textarea>
                                    </div>
                                </div>
                            </div><!--end row-->

                            <div class="row">
                                <div class="col-sm-12">
                                    <input type="submit" id="submit" name="send" class="btn btn-primary"
                                        value="Save changes">
                                </div><!--end col-->
                            </div><!--end row-->
                        </form><!--end form-->
                    </div>
                </div>

                <div class="rounded shadow mt-4">
                    <div class="p-4 border-bottom">
                        <h5 class="mb-0">Change Password :</h5>
                    </div>

                    <div class="p-4">
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label">Old password :</label>
                                        <input type="password" class="form-control" placeholder="Old password"
                                            required="">
                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label">New password :</label>
                                        <input type="password" class="form-control" placeholder="New password"
                                            required="">
                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label">Re-type New password :</label>
                                        <input type="password" class="form-control" placeholder="Re-type New password"
                                            required="">
                                    </div>
                                </div><!--end col-->

                                <div class="col-lg-12 mt-2 mb-0">
                                    <button class="btn btn-primary">Save password</button>
                                </div><!--end col-->
                            </div><!--end row-->
                        </form>
                    </div>
                </div>

                <div class="rounded shadow mt-4">
                    <div class="p-4 border-bottom">
                        <h5 class="mb-0">Account Notifications :</h5>
                    </div>

                    <div class="p-4">
                        <div class="d-flex justify-content-between pb-4">
                            <h5 class="mb-0">When someone mentions me</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1">
                                <label class="form-check-label" for="flexCheckDefault1"></label>
                            </div>
                        </div>
                        <div class="d-flex d-flex justify-content-between py-4 border-top">
                            <h5 class="mb-0">When someone follows me</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" checked>
                                <label class="form-check-label" for="flexCheckDefault2"></label>
                            </div>
                        </div>
                        <div class="d-flex d-flex justify-content-between py-4 border-top">
                            <h5 class="mb-0">When shares my activity</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
                                <label class="form-check-label" for="flexCheckDefault3"></label>
                            </div>
                        </div>
                        <div class="d-flex d-flex justify-content-between py-4 border-top">
                            <h5 class="mb-0">When someone messages me</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" checked>
                                <label class="form-check-label" for="flexCheckDefault4"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded shadow mt-4">
                    <div class="p-4 border-bottom">
                        <h5 class="mb-0">Marketing Notifications :</h5>
                    </div>

                    <div class="p-4">
                        <div class="d-flex d-flex justify-content-between pb-4">
                            <h5 class="mb-0">There is a sale or promotion</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5">
                                <label class="form-check-label" for="flexCheckDefault5"></label>
                            </div>
                        </div>
                        <div class="d-flex d-flex justify-content-between py-4 border-top">
                            <h5 class="mb-0">Company news</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" checked>
                                <label class="form-check-label" for="flexCheckDefault6"></label>
                            </div>
                        </div>
                        <div class="d-flex d-flex justify-content-between py-4 border-top">
                            <h5 class="mb-0">Weekly jobs</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7">
                                <label class="form-check-label" for="flexCheckDefault7"></label>
                            </div>
                        </div>
                        <div class="d-flex d-flex justify-content-between py-4 border-top">
                            <h5 class="mb-0">Unsubscribe News</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" checked>
                                <label class="form-check-label" for="flexCheckDefault8"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded shadow mt-4">
                    <div class="p-4 border-bottom">
                        <h5 class="mb-0 text-danger">Delete Account :</h5>
                    </div>

                    <div class="p-4">
                        <h5 class="mb-0">Do you want to delete the account? Please press below "Delete" button</h5>
                        <div class="mt-4">
                            <button class="btn btn-danger">Delete Account</button>
                        </div><!--end col-->
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>

</script>

<style lang="scss" scoped></style>