<template>
  <!-- Hero Start -->
  <section
    class="bg-half-130 d-table w-100 bg-light"
    :style="{
      'background-image': 'url(' + image + ')',
      backgroundPosition: 'center',
    }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-8">
          <div class="card login-page bg-white shadow mt-4 rounded border-0">
            <div class="card-body">
              <h4 class="text-center">Sign Up</h4>
              <form class="login-form mt-4">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >First name <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                        name="s"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Last name <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                        name="s"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Birthday <span class="text-danger">*</span></label
                      >
                      <input type="date" class="form-control" required="" />
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Address <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Street name"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Number <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Address number"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Post Code <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Post code"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >City <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="City"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Country <span class="text-danger">*</span></label
                      >
                      <div class="position-relative">
                        <input
                          type="text"
                          class="form-control"
                          v-model="countrySearch"
                          placeholder="Search country"
                          @focus="showCountryDropdown = true"
                          @input="filterCountries"
                        />
                        <div
                          v-if="showCountryDropdown"
                          class="position-absolute w-100 bg-white border rounded shadow-sm"
                          style="
                            max-height: 200px;
                            overflow-y: auto;
                            z-index: 1000;
                          "
                        >
                          <div
                            v-for="country in filteredCountries"
                            :key="country.code"
                            class="p-2 cursor-pointer hover:bg-light"
                            @click="selectCountry(country)"
                          >
                            {{ country.name }}
                          </div>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        :value="selectedCountry?.code"
                        required
                      />
                    </div>
                  </div>
                  <!-- Add National Identity Number field for Bulgaria -->
                  <div class="col-md-12" v-if="selectedCountry?.code === 'BG'">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >National Identity Number (ЕГН)
                        <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your EGN"
                        v-model="nationalIdNumber"
                        maxlength="10"
                        pattern="[0-9]{10}"
                        required
                      />
                      <small class="text-muted"
                        >Please enter your 10-digit EGN number</small
                      >
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Your Email <span class="text-danger">*</span></label
                      >
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Password <span class="text-danger">*</span></label
                      >
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault"
                          >I Accept
                          <a href="#" class="text-primary"
                            >Terms And Condition</a
                          ></label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="d-grid">
                      <button class="btn btn-primary">Register</button>
                    </div>
                  </div>

                  <div class="mx-auto">
                    <p class="mb-0 mt-3">
                      <small class="text-dark me-2"
                        >Already have an account ?</small
                      >
                      <NuxtLink to="/login" class="text-dark fw-bold"
                        >Sign in</NuxtLink
                      >
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!---->
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- Hero End -->
</template>

<script setup>
import image from "../../assets/images/bg/bg-lines-one.png";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { countries } from "../utils/countries";

const countrySearch = ref("");
const showCountryDropdown = ref(false);
const selectedCountry = ref(null);
const nationalIdNumber = ref("");

const filteredCountries = computed(() => {
  if (!countrySearch.value) return countries;
  const search = countrySearch.value.toLowerCase();
  return countries.filter((country) =>
    country.name.toLowerCase().startsWith(search)
  );
});

const selectCountry = (country) => {
  selectedCountry.value = country;
  countrySearch.value = country.name;
  showCountryDropdown.value = false;
  if (country.code !== "BG") {
    nationalIdNumber.value = "";
  }
};

// Close dropdown when clicking outside
const closeDropdown = (e) => {
  if (!e.target.closest(".position-relative")) {
    showCountryDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}

.hover\:bg-light:hover {
  background-color: #f8f9fa;
}
</style>
