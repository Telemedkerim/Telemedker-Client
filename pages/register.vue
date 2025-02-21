<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      :class="{ show: showModal }"
      tabindex="-1"
      :style="{ display: showModal ? 'block' : 'none' }"
      @click.self="closeModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <button type="button" class="modal-close-btn" @click="closeModal">
            <font-awesome-icon icon="times" />
          </button>
          <div class="modal-body text-center p-4">
            <div class="icon-box mb-4">
              <font-awesome-icon
                :icon="isSuccess ? 'circle-check' : 'circle-xmark'"
                :class="{
                  'text-success': isSuccess,
                  'text-danger': !isSuccess,
                }"
                style="font-size: 64px"
              />
            </div>
            <h4
              class="mb-3"
              :class="{ 'text-success': isSuccess, 'text-danger': !isSuccess }"
            >
              {{ modalTitle }}
            </h4>
            <p class="mb-0 text-muted">{{ modalMessage }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal-backdrop fade"
      :class="{ show: showModal }"
      v-if="showModal"
    ></div>

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
                <h4 class="text-center">{{ $t("registration.title") }}</h4>
                <form
                  class="login-form mt-4"
                  @submit.prevent="handleSubmit"
                  novalidate
                >
                  <div class="row">
                    <!-- First Name -->
                    <div class="col-md-6">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.firstName }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.firstName.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          :placeholder="
                            $t('registration.fields.firstName.placeholder')
                          "
                          v-model="form.firstName"
                          @blur="validateField('firstName')"
                          @input="validateFieldOnInput('firstName')"
                          @keydown.enter.prevent="focusNextInput"
                        />
                        <small v-if="errors.firstName" class="text-danger">{{
                          errors.firstName
                        }}</small>
                      </div>
                    </div>

                    <!-- Last Name -->
                    <div class="col-md-6">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.lastName }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.lastName.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          :placeholder="
                            $t('registration.fields.lastName.placeholder')
                          "
                          v-model="form.lastName"
                          @blur="validateField('lastName')"
                          @input="validateFieldOnInput('lastName')"
                          @keydown.enter.prevent="focusNextInput"
                        />
                        <small v-if="errors.lastName" class="text-danger">{{
                          errors.lastName
                        }}</small>
                      </div>
                    </div>

                    <!-- Gender -->
                    <div class="col-md-6">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.gender }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.gender.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <select
                          class="form-select"
                          v-model="form.gender"
                          @change="validateField('gender')"
                          style="height: 45px"
                        >
                          <option value="">
                            {{ $t("registration.fields.gender.select") }}
                          </option>
                          <option value="male">
                            {{ $t("registration.fields.gender.options.male") }}
                          </option>
                          <option value="female">
                            {{
                              $t("registration.fields.gender.options.female")
                            }}
                          </option>
                          <option value="other">
                            {{ $t("registration.fields.gender.options.other") }}
                          </option>
                        </select>
                        <small v-if="errors.gender" class="text-danger">{{
                          errors.gender
                        }}</small>
                      </div>
                    </div>

                    <!-- Birthday -->
                    <div class="col-md-6">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.birthDate }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.birthday.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <div class="input-group">
                          <input
                            type="date"
                            class="form-control"
                            v-model="form.birthDate"
                            :placeholder="
                              $t('registration.fields.birthday.placeholder')
                            "
                            :max="maxDate"
                            :min="'1900-01-01'"
                            @blur="validateField('birthDate')"
                            @input="validateFieldOnInput('birthDate')"
                            style="color: #495057; height: 45px"
                          />
                          <span
                            class="input-group-text"
                            style="
                              background-color: #00b090;
                              border-color: #00b090;
                            "
                          >
                            <font-awesome-icon
                              icon="calendar-alt"
                              class="text-white"
                            />
                          </span>
                        </div>
                        <small v-if="errors.birthDate" class="text-danger">{{
                          errors.birthDate
                        }}</small>
                      </div>
                    </div>

                    <!-- Address -->
                    <div class="col-md-8">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.address }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.address.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          :placeholder="
                            $t('registration.fields.address.placeholder')
                          "
                          v-model="form.address"
                          @blur="validateField('address')"
                          @input="validateFieldOnInput('address')"
                          @keydown.enter.prevent="focusNextInput"
                        />
                        <small v-if="errors.address" class="text-danger">{{
                          errors.address
                        }}</small>
                      </div>
                    </div>

                    <!-- Address Number -->
                    <div class="col-md-4">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.addressNumber }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.addressNumber.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          :placeholder="
                            $t('registration.fields.addressNumber.placeholder')
                          "
                          v-model="form.addressNumber"
                          @blur="validateField('addressNumber')"
                          @input="validateFieldOnInput('addressNumber')"
                          @keydown.enter.prevent="focusNextInput"
                        />
                        <small
                          v-if="errors.addressNumber"
                          class="text-danger"
                          >{{ errors.addressNumber }}</small
                        >
                      </div>
                    </div>

                    <!-- Post Code -->
                    <div class="col-md-4">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.postCode }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.postCode.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          :placeholder="
                            $t('registration.fields.postCode.placeholder')
                          "
                          v-model="form.postCode"
                          @blur="validateField('postCode')"
                          @input="validateFieldOnInput('postCode')"
                          @keydown.enter.prevent="focusNextInput"
                        />
                        <small v-if="errors.postCode" class="text-danger">{{
                          errors.postCode
                        }}</small>
                      </div>
                    </div>

                    <!-- City -->
                    <div class="col-md-4">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.city }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.city.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          :placeholder="
                            $t('registration.fields.city.placeholder')
                          "
                          v-model="form.city"
                          @blur="validateField('city')"
                          @input="validateFieldOnInput('city')"
                          @keydown.enter.prevent="focusNextInput"
                        />
                        <small v-if="errors.city" class="text-danger">{{
                          errors.city
                        }}</small>
                      </div>
                    </div>

                    <!-- Country -->
                    <div class="col-md-4">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.country }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.country.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <div class="position-relative">
                          <input
                            type="text"
                            class="form-control"
                            v-model="countrySearch"
                            :placeholder="
                              $t('registration.fields.country.placeholder')
                            "
                            @focus="showCountryDropdown = true"
                            @input="filterCountries"
                            @blur="validateField('country')"
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
                        <small v-if="errors.country" class="text-danger">{{
                          errors.country
                        }}</small>
                      </div>
                    </div>

                    <!-- Conditional Fields for Bulgaria -->
                    <template v-if="showNationalIdField">
                      <!-- National ID Number -->
                      <div class="col-md-12">
                        <div
                          class="mb-3 position-relative"
                          :class="{ 'field-error': errors.nationalIdNumber }"
                        >
                          <label class="form-label">
                            {{ $t("registration.fields.nationalId.label") }}
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            :placeholder="
                              $t('registration.fields.nationalId.placeholder')
                            "
                            v-model="form.nationalIdNumber"
                            maxlength="10"
                            pattern="[0-9]{10}"
                            @blur="validateField('nationalIdNumber')"
                            @input="validateFieldOnInput('nationalIdNumber')"
                            required
                          />
                          <small
                            v-if="errors.nationalIdNumber"
                            class="text-danger"
                            >{{ errors.nationalIdNumber }}</small
                          >
                          <small class="text-muted">{{
                            $t("registration.fields.nationalId.hint")
                          }}</small>
                        </div>
                      </div>

                      <!-- Existing Patient -->
                      <div class="col-md-12">
                        <div
                          class="mb-3"
                          :class="{ 'field-error': errors.isExistingPatient }"
                        >
                          <label class="form-label">
                            {{
                              $t("registration.fields.existingPatient.label")
                            }}
                            <span class="text-danger">*</span>
                          </label>
                          <div class="d-flex gap-3">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-model="form.isExistingPatient"
                                :value="true"
                                id="patientYes"
                                @change="validateField('isExistingPatient')"
                                required
                              />
                              <label class="form-check-label" for="patientYes">
                                {{
                                  $t("registration.fields.existingPatient.yes")
                                }}
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                v-model="form.isExistingPatient"
                                :value="false"
                                id="patientNo"
                                @change="validateField('isExistingPatient')"
                                required
                              />
                              <label class="form-check-label" for="patientNo">
                                {{
                                  $t("registration.fields.existingPatient.no")
                                }}
                              </label>
                            </div>
                          </div>
                          <small
                            v-if="errors.isExistingPatient"
                            class="text-danger"
                            >{{ errors.isExistingPatient }}</small
                          >
                        </div>
                      </div>
                    </template>

                    <!-- Conditional Fields for Germany -->
                    <template v-if="showInsuranceFields">
                      <!-- Insurance Type -->
                      <div class="col-md-12">
                        <div
                          class="mb-3 position-relative"
                          :class="{ 'field-error': errors.insurance }"
                        >
                          <label class="form-label">
                            {{ $t("registration.fields.insuranceType.label") }}
                            <span class="text-danger">*</span>
                          </label>
                          <select
                            class="form-select"
                            v-model="form.insurance!.type"
                            @change="validateField('insurance')"
                            required
                            style="height: 45px"
                          >
                            <option value="">
                              {{
                                $t("registration.fields.insuranceType.select")
                              }}
                            </option>
                            <option value="state">
                              {{
                                $t(
                                  "registration.fields.insuranceType.options.state"
                                )
                              }}
                            </option>
                            <option value="private">
                              {{
                                $t(
                                  "registration.fields.insuranceType.options.private"
                                )
                              }}
                            </option>
                          </select>
                          <small v-if="errors.insurance" class="text-danger">{{
                            errors.insurance
                          }}</small>
                        </div>
                      </div>

                      <!-- Insurance Company -->
                      <div class="col-md-12" v-if="form.insurance?.type">
                        <div
                          class="mb-3 position-relative"
                          :class="{ 'field-error': errors.insurance }"
                        >
                          <label class="form-label">
                            {{
                              $t("registration.fields.insuranceCompany.label")
                            }}
                            <span class="text-danger">*</span>
                          </label>
                          <select
                            class="form-select"
                            v-model="form.insurance!.company"
                            @change="validateField('insurance')"
                            required
                            style="height: 45px"
                          >
                            <option value="">
                              {{
                                $t(
                                  "registration.fields.insuranceCompany.select"
                                )
                              }}
                            </option>
                            <option
                              v-for="company in insuranceOptions"
                              :key="company"
                              :value="company"
                            >
                              {{ company }}
                            </option>
                          </select>
                          <small v-if="errors.insurance" class="text-danger">{{
                            errors.insurance
                          }}</small>
                        </div>
                      </div>

                      <!-- Insurance Number -->
                      <div class="col-md-12" v-if="form.insurance?.type">
                        <div
                          class="mb-3 position-relative"
                          :class="{ 'field-error': errors.insurance }"
                        >
                          <label class="form-label">
                            {{
                              $t("registration.fields.insuranceNumber.label")
                            }}
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            :placeholder="
                              $t(
                                'registration.fields.insuranceNumber.placeholder'
                              )
                            "
                            v-model="form.insurance!.number"
                            @blur="validateField('insurance')"
                            @input="validateFieldOnInput('insurance')"
                            required
                          />
                          <small v-if="errors.insurance" class="text-danger">{{
                            errors.insurance
                          }}</small>
                        </div>
                      </div>
                    </template>

                    <!-- Email -->
                    <div class="col-md-12">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.email }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.email.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          :placeholder="
                            $t('registration.fields.email.placeholder')
                          "
                          v-model="form.email"
                          @blur="validateField('email')"
                          @input="validateFieldOnInput('email')"
                          @keydown.enter.prevent="focusNextInput"
                          required
                        />
                        <small v-if="errors.email" class="text-danger">{{
                          errors.email
                        }}</small>
                      </div>
                    </div>

                    <!-- Password -->
                    <div class="col-md-12">
                      <div
                        class="mb-3 position-relative"
                        :class="{ 'field-error': errors.password }"
                      >
                        <label class="form-label">
                          {{ $t("registration.fields.password.label") }}
                          <span class="text-danger">*</span>
                        </label>
                        <div class="position-relative">
                          <input
                            type="password"
                            class="form-control"
                            :placeholder="
                              $t('registration.fields.password.placeholder')
                            "
                            v-model="form.password"
                            @blur="validateField('password')"
                            @input="validateFieldOnInput('password')"
                            @keydown.enter.prevent="focusNextInput"
                            required
                          />
                          <font-awesome-icon
                            v-if="form.password"
                            icon="eye"
                            class="position-absolute"
                            style="
                              right: 10px;
                              top: 50%;
                              transform: translateY(-50%);
                              cursor: pointer;
                            "
                            @click="togglePasswordVisibility('password')"
                          />
                        </div>
                        <small v-if="errors.password" class="text-danger">{{
                          errors.password
                        }}</small>
                      </div>
                    </div>

                    <!-- Terms and Conditions -->
                    <div class="col-md-12">
                      <div class="mb-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="form.termsAccepted"
                            id="termsCheckbox"
                            @change="validateField('termsAccepted')"
                          />
                          <label class="form-check-label" for="termsCheckbox">
                            {{ $t("registration.terms.accept") }}
                            <a href="#" class="text-primary">{{
                              $t("registration.terms.link")
                            }}</a>
                          </label>
                        </div>
                        <small
                          v-if="errors.termsAccepted"
                          class="text-danger"
                          >{{ errors.termsAccepted }}</small
                        >
                      </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="col-md-12">
                      <div class="d-grid">
                        <button
                          class="btn btn-primary"
                          :disabled="isSubmitting"
                        >
                          <span
                            v-if="isSubmitting"
                            class="spinner-border spinner-border-sm me-2"
                          ></span>
                          {{
                            isSubmitting
                              ? $t("registration.messages.loading")
                              : $t("registration.submit.buttonText")
                          }}
                        </button>
                      </div>
                    </div>

                    <!-- Login Link -->
                    <div class="mx-auto">
                      <p class="mb-0 mt-3">
                        <small class="text-dark me-2">{{
                          $t("registration.submit.loginPrompt")
                        }}</small>
                        <NuxtLink to="/login" class="text-dark fw-bold">
                          {{ $t("registration.submit.loginText") }}
                        </NuxtLink>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from "vue";
import { z } from "zod";
import { useI18n } from "vue-i18n";
import { useLocation } from "~/composables/useLocation";
import { focusNextInput } from "~/utils/index";
import image from "../../assets/images/bg/bg-lines-one.png";
import { countries } from "~/utils/countries";
import { krankenkassen, private_krankenkassen } from "~/utils/krankenkassen";

// Types
interface Country {
  code: string;
  name: string;
  dialCode?: string;
}

interface Insurance {
  type?: "state" | "private";
  company?: string;
  number?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "other" | "";
  birthDate: string;
  address: string;
  addressNumber: string;
  postCode: string;
  city: string;
  country: Country | null;
  email: string;
  password: string;
  termsAccepted: boolean;
  nationalIdNumber?: string;
  isExistingPatient?: boolean;
  insurance?: Insurance;
}

// Composables
const { t, locale } = useI18n();
const config = useRuntimeConfig();

// State
const form = reactive<FormData>({
  firstName: "",
  lastName: "",
  gender: "" as "male" | "female" | "other" | "",
  birthDate: "",
  address: "",
  addressNumber: "",
  postCode: "",
  city: "",
  country: null,
  email: "",
  password: "",
  termsAccepted: false,
  insurance: {
    type: undefined,
    company: undefined,
    number: undefined,
  },
  isExistingPatient: undefined,
});

const errors = reactive<Record<keyof FormData | string, string | null>>({});
const isSubmitting = ref(false);
const countrySearch = ref("");
const showCountryDropdown = ref(false);
const ipCountry = ref<string | null>(null);
const showModal = ref(false);
const isSuccess = ref(false);
const modalTitle = ref("");
const modalMessage = ref("");

// Computed
const maxDate = computed(() => {
  const today = new Date();
  return today.toISOString().split("T")[0];
});

const filteredCountries = computed(() => {
  if (!countrySearch.value) return countries;
  const search = countrySearch.value.toLowerCase();
  return countries.filter((country) =>
    country.name.toLowerCase().includes(search)
  );
});

const showNationalIdField = computed(() => form.country?.code === "BG");
const showInsuranceFields = computed(() => form.country?.code === "DE");

const insuranceOptions = computed(() => {
  if (!form.insurance?.type) return [];
  return form.insurance.type === "state"
    ? krankenkassen
    : private_krankenkassen;
});

// Validation Schema
const validationSchema = {
  firstName: z.string().min(1, t("registration.validation.firstName")),
  lastName: z.string().min(1, t("registration.validation.lastName")),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: t("registration.validation.gender") }),
  }),
  birthDate: z.string().min(1, t("registration.validation.birthDate")),
  address: z.string().min(1, t("registration.validation.address")),
  addressNumber: z.string().min(1, t("registration.validation.addressNumber")),
  postCode: z.string().min(1, t("registration.validation.postCode")),
  city: z.string().min(1, t("registration.validation.city")),
  country: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .nullable()
    .refine((val) => val !== null, {
      message: t("registration.validation.country"),
    }),
  email: z
    .string()
    .min(
      1,
      t("registration.validation.required").replace(
        "{field}",
        t("registration.fields.email.label")
      )
    )
    .email(t("registration.validation.email")),
  password: z
    .string()
    .min(8, t("registration.validation.password.minLength"))
    .regex(/[a-z]/, t("registration.validation.password.lowercase"))
    .regex(/[A-Z]/, t("registration.validation.password.uppercase"))
    .regex(/[0-9]/, t("registration.validation.password.number"))
    .regex(/[^a-zA-Z0-9]/, t("registration.validation.password.specialChar")),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: t("registration.validation.termsRequired"),
  }),
  nationalIdNumber: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!form.country || form.country.code !== "BG") return true;
        return /^\d{10}$/.test(val || "");
      },
      { message: t("registration.validation.nationalId") }
    ),
  isExistingPatient: z
    .boolean()
    .optional()
    .refine(
      (val) => {
        if (!form.country || form.country.code !== "BG") return true;
        return typeof val === "boolean";
      },
      { message: t("registration.validation.existingPatient") }
    ),
  insurance: z
    .object({
      type: z.enum(["state", "private"]).optional(),
      company: z.string().optional(),
      number: z.string().optional(),
    })
    .optional()
    .refine(
      (val) => {
        if (!form.country || form.country.code !== "DE") return true;
        if (!val?.type || !val?.company || !val?.number) return false;
        return true;
      },
      { message: t("registration.validation.insurance") }
    ),
};

// Methods
const validateField = (fieldName: keyof FormData) => {
  if (validationSchema[fieldName as keyof typeof validationSchema]) {
    try {
      validationSchema[fieldName as keyof typeof validationSchema]?.parse(
        form[fieldName]
      );
      errors[fieldName] = null;
    } catch (error) {
      if (error instanceof z.ZodError) {
        errors[fieldName] = error.errors[0].message;
      }
    }
  }
};

const validateFieldOnInput = (fieldName: keyof FormData) => {
  if (errors[fieldName]) {
    validateField(fieldName);
  }
};

const selectCountry = (country: Country) => {
  form.country = country;
  countrySearch.value = country.name;
  showCountryDropdown.value = false;
  validateField("country");

  // Initialize insurance object when selecting Germany
  if (country.code === "DE" && !form.insurance) {
    form.insurance = {
      type: undefined,
      company: undefined,
      number: undefined,
    };
  }
};

const togglePasswordVisibility = (fieldId: string) => {
  const input = document.getElementById(fieldId) as HTMLInputElement;
  if (input) {
    input.type = input.type === "password" ? "text" : "password";
  }
};

const filterCountries = () => {
  // This function is implicitly called by the template
  // The filtering is handled by the filteredCountries computed property
  return;
};

const validateAllFields = () => {
  Object.keys(form).forEach((key) => {
    validateField(key as keyof FormData);
  });

  // Additional validations for conditional fields
  if (form.country?.code === "BG") {
    validateField("nationalIdNumber");
    validateField("isExistingPatient");
  }
  if (form.country?.code === "DE") {
    validateField("insurance");
  }

  return !Object.values(errors).some((error) => error !== null);
};

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  // Validate all fields
  if (!validateAllFields()) {
    // Scroll to the first error
    const firstErrorElement = document.querySelector(".field-error");
    if (firstErrorElement) {
      firstErrorElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  isSubmitting.value = true;

  try {
    // Create a copy of the form data and transform the country object
    const formData = {
      ...form,
      country: form.country?.code,
      countryName: form.country?.name,
      ipCountry: ipCountry.value,
      gender: form.gender,
    };

    console.log("Submitting form data:", formData);

    const response = await fetch(`${config.public.baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale.value,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || t("registration.messages.errorMessage"));
    }

    // Show success modal
    isSuccess.value = true;
    modalTitle.value = t("registration.messages.success");
    modalMessage.value = t("registration.messages.successMessage");
    showModal.value = true;

    // Redirect after 4 seconds
    setTimeout(() => {
      showModal.value = false;
      navigateTo("/login");
    }, 4000);
  } catch (error) {
    console.error("Registration error:", error);
    // Show error modal
    isSuccess.value = false;
    modalTitle.value = t("registration.messages.error");
    modalMessage.value =
      error instanceof Error
        ? error.message
        : t("registration.messages.errorMessage");
    showModal.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

const closeModal = () => {
  if (!isSuccess.value) {
    // Only allow closing if it's an error modal
    showModal.value = false;
  }
};

// Lifecycle
onMounted(async () => {
  try {
    const locationData = await useLocation();
    console.log("Location data:", locationData);
    if (locationData?.country) {
      ipCountry.value = locationData.country;
      // Find and set the country in the form if it exists in our countries list
      const userCountry = countries.find(
        (c) => c.code === locationData.country
      );
      if (userCountry) {
        selectCountry(userCountry);
      }
    }
  } catch (error) {
    console.error("Error getting location:", error);
  }
});

// Watch for country changes to reset conditional fields
watch(
  () => form.country?.code,
  (newCode) => {
    if (newCode === "DE") {
      form.nationalIdNumber = undefined;
      form.isExistingPatient = undefined;
    } else if (newCode === "BG") {
      form.insurance = {
        type: undefined,
        company: undefined,
        number: undefined,
      };
    } else {
      form.nationalIdNumber = undefined;
      form.isExistingPatient = undefined;
      form.insurance = {
        type: undefined,
        company: undefined,
        number: undefined,
      };
    }
  }
);
</script>

<style lang="scss" scoped>
.field-error {
  input,
  select {
    border-color: var(--warning);
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
  }
  label {
    color: var(--warning);
  }
}

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

// Update modal styles
.modal {
  background-color: transparent;
  &.show {
    display: block;
  }
}

.modal-backdrop {
  &.show {
    opacity: 0.2;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  border: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  position: relative;
}

.icon-box {
  i {
    font-size: 64px;
    animation: scaleIn 0.3s ease-in-out;

    &.text-success {
      color: #28a745 !important;
    }

    &.text-danger {
      color: #dc3545 !important;
    }
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade {
  transition: all 0.3s ease-in-out;
  &.show {
    opacity: 1;
  }
}

// Add animation for modal
.modal-dialog {
  transform: translateY(-50px);
  transition: transform 0.3s ease-out;
  .modal.show & {
    transform: translateY(0);
  }
}

.modal-close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: rgba(0, 0, 0, 0.15);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  color: #333;
  z-index: 1050;

  i {
    font-size: 18px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.25);
    color: #000;
  }
}
</style>
