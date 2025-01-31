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
        <div class="col-lg-8 col-md-10">
          <div class="card login-page bg-white shadow mt-4 rounded border-0">
            <div class="card-body">
              <h4 class="text-center">Sign Up</h4>
              <form class="login-form mt-4" @submit="handleSubmit">
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
                        v-model="firstName"
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
                        v-model="lastName"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Birthday <span class="text-danger">*</span></label
                      >
                      <div class="input-group">
                        <input
                          type="date"
                          class="form-control"
                          v-model="selectedDate"
                          :max="formatDate(new Date())"
                          :min="'1900-01-01'"
                          required
                          style="color: #495057; height: 45px"
                        />
                        <span class="input-group-text bg-primary">
                          <i class="fas fa-calendar-alt text-white"></i>
                        </span>
                      </div>
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
                        v-model="address"
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
                        v-model="addressNumber"
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
                        v-model="postCode"
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
                        v-model="city"
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
                  <!-- Insurance Type Selection -->
                  <div class="col-md-12">
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Insurance Type
                        <span class="text-danger">*</span></label
                      >
                      <select
                        class="form-select"
                        v-model="selectedInsuranceType"
                        required
                        style="height: 45px"
                      >
                        <option
                          v-if="['BG', 'DE'].includes(selectedCountry?.code)"
                          value="state"
                        >
                          State Insurance
                        </option>
                        <option
                          v-if="['BG', 'DE'].includes(selectedCountry?.code)"
                          value="private"
                        >
                          Private Insurance
                        </option>
                        <option value="self">Self Payment / Tourist</option>
                      </select>
                    </div>
                  </div>
                  <!-- Insurance Details for Germany -->
                  <template
                    v-if="
                      selectedCountry?.code === 'DE' &&
                      selectedInsuranceType === 'state'
                    "
                  >
                    <div class="col-md-6">
                      <div class="mb-3 position-relative">
                        <label class="form-label"
                          >Insurance Company
                          <span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter insurance company"
                          v-model="insuranceCompany"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3 position-relative">
                        <label class="form-label"
                          >Insurance Number
                          <span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter insurance number"
                          v-model="insuranceNumber"
                          required
                        />
                      </div>
                    </div>
                  </template>
                  <!-- Insurance Number for Bulgaria -->
                  <div
                    class="col-md-12"
                    v-if="
                      selectedCountry?.code === 'BG' &&
                      selectedInsuranceType === 'state'
                    "
                  >
                    <div class="mb-3 position-relative">
                      <label class="form-label"
                        >Insurance Number
                        <span class="text-danger">*</span></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter insurance number"
                        v-model="insuranceNumber"
                        required
                      />
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
                        v-model="email"
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
                        v-model="password"
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
                          v-model="termsAccepted"
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
                    <div v-if="errorMessage" class="alert alert-danger mt-3">
                      {{ errorMessage }}
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="d-grid">
                      <button class="btn btn-primary" :disabled="isLoading">
                        {{ isLoading ? "Registering..." : "Register" }}
                      </button>
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
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { countries } from "../utils/countries";

const countrySearch = ref("");
const showCountryDropdown = ref(false);
const selectedCountry = ref(null);
const nationalIdNumber = ref("");
const selectedDate = ref("");
const selectedInsuranceType = ref("self");
const insuranceCompany = ref("");
const insuranceNumber = ref("");
const userCountry = ref(null);

// Form data refs
const firstName = ref("");
const lastName = ref("");
const address = ref("");
const addressNumber = ref("");
const postCode = ref("");
const city = ref("");
const email = ref("");
const password = ref("");
const termsAccepted = ref(false);

// Form submission handling
const isLoading = ref(false);
const errorMessage = ref("");

// Watch for country changes to update insurance type
watch(
  () => selectedCountry.value?.code,
  (newCode) => {
    if (!["BG", "DE"].includes(newCode)) {
      selectedInsuranceType.value = "self";
    }
  }
);

// Watch for country or insurance type changes to reset insurance fields
watch(
  [() => selectedCountry.value?.code, () => selectedInsuranceType.value],
  ([newCountry, newInsuranceType]) => {
    if (!["BG", "DE"].includes(newCountry) || newInsuranceType !== "state") {
      insuranceCompany.value = "";
      insuranceNumber.value = "";
    }
  }
);

const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

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

  // Reset national ID if not Bulgaria
  if (country.code !== "BG") {
    nationalIdNumber.value = "";
  }

  // Set default insurance type based on country
  if (!["BG", "DE"].includes(country.code)) {
    selectedInsuranceType.value = "self";
  }
};

// Close dropdown when clicking outside
const closeDropdown = (e) => {
  if (!e.target.closest(".position-relative")) {
    showCountryDropdown.value = false;
  }
};

// Get user's country on component mount
const getUserCountry = async () => {
  try {
    const response = await fetch("https://ipinfo.io/json?token=3f925abfddf59d");
    const data = await response.json();
    userCountry.value = data.country;
  } catch (error) {
    console.error("Error fetching location:", error);
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
  getUserCountry();
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!termsAccepted.value) {
    errorMessage.value = "Please accept the terms and conditions";
    return;
  }

  isLoading.value = true;
  errorMessage.value = "";

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    birthDate: selectedDate.value,
    address: address.value,
    addressNumber: addressNumber.value,
    postCode: postCode.value,
    city: city.value,
    country: selectedCountry.value?.code,
    email: email.value,
    password: password.value,
    insuranceType: selectedInsuranceType.value,
    ipCountry: userCountry.value, // Add user's IP-based country
  };

  // Add conditional fields based on country and insurance type
  if (selectedCountry.value?.code === "BG") {
    formData.nationalIdNumber = nationalIdNumber.value;
    if (selectedInsuranceType.value === "state") {
      formData.insuranceNumber = insuranceNumber.value;
    }
  }

  if (
    selectedCountry.value?.code === "DE" &&
    selectedInsuranceType.value === "state"
  ) {
    formData.insuranceCompany = insuranceCompany.value;
    formData.insuranceNumber = insuranceNumber.value;
  }
  console.log(formData);
  try {
    const config = useRuntimeConfig();
    const response = await fetch(`${config.public.baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    // Redirect to login page on success
    navigateTo("/login");
  } catch (error) {
    errorMessage.value =
      error.message || "An error occurred during registration";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}

.hover\:bg-light:hover {
  background-color: #f8f9fa;
}

input[type="date"] {
  position: relative;

  &::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
}

.input-group-text {
  height: 45px;
  display: flex;
  align-items: center;
}
</style>
