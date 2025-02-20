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
              <h4 class="text-center">Email Validation</h4>

              <!-- Loading State -->
              <div v-if="isValidating" class="text-center mt-4">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Validating...</span>
                </div>
                <p class="mt-2">Validating your email...</p>
              </div>

              <!-- Message Display -->
              <div v-if="message" class="alert alert-info mt-4" role="alert">
                {{ message }}
              </div>

              <!-- Resend Form -->
              <form
                v-if="showResendForm"
                class="mt-4"
                @submit.prevent="resendValidationEmail"
              >
                <div class="mb-3">
                  <label class="form-label"
                    >Email <span class="text-danger">*</span></label
                  >
                  <div class="position-relative">
                    <input
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors.userEmail }"
                      placeholder="Enter your email"
                      v-model="userEmail"
                      @blur="validateField('userEmail')"
                      @input="validateFieldOnError('userEmail')"
                      required
                    />
                    <div v-if="errors.userEmail" class="invalid-feedback">
                      {{ errors.userEmail }}
                    </div>
                  </div>
                </div>

                <div class="d-grid">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="isSubmitting || errors.userEmail"
                  >
                    <span
                      v-if="isSubmitting"
                      class="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    {{
                      isSubmitting ? "Sending..." : "Resend Validation Email"
                    }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import image from "../../assets/images/bg/bg-lines-one.png";
import { ref, reactive, onMounted } from "vue";
import { z } from "zod";

const route = useRoute();
const message = ref("");
const isValidating = ref(true);
const config = useRuntimeConfig();
const baseUrl = config.public.baseUrl;
const showResendForm = ref(false);
const userEmail = ref("");
const isSubmitting = ref(false);

const errors = reactive({
  userEmail: null,
});

const { locale } = useI18n();
const emailSchema = z.string().email("Please enter a valid email address");

const validateField = (fieldName) => {
  const result = emailSchema.safeParse(userEmail.value);
  if (!result.success) {
    errors[fieldName] = result.error.errors[0].message;
  } else {
    errors[fieldName] = null;
  }
};

const validateFieldOnError = (fieldName) => {
  if (errors[fieldName]) {
    validateField(fieldName);
  }
};

const resendValidationEmail = async () => {
  if (!userEmail.value) {
    validateField("userEmail");
    return;
  }
  if (errors.userEmail) {
    return;
  }

  try {
    isSubmitting.value = true;
    const { data, error } = await useFetch(
      `${baseUrl}/auth/resend-validation-email`,
      {
        method: "POST",
        body: { email: userEmail.value },
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": locale.value,
        },
        mode: "cors",
        credentials: "include",
      }
    );

    if (error.value) {
      message.value =
        error.value?.data?.message || "Failed to resend validation email.";
    } else if (data.value) {
      message.value = "Validation email has been sent successfully.";
      showResendForm.value = false;
    } else {
      message.value = "Failed to send validation email. Please try again.";
    }
  } catch (err) {
    console.error(err);
    message.value = "An error occurred while resending the email.";
  } finally {
    isSubmitting.value = false;
  }
};

const validateToken = async (token) => {
  try {
    isValidating.value = true;
    message.value = "Starting validation process...";

    try {
      const response = await $fetch(`${baseUrl}/auth/validate-email`, {
        method: "POST",
        body: { token },
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": locale.value,
          Accept: "application/json",
        },
        mode: "cors",
        credentials: "include",
        retry: 0,
        onRequest({ options }) {
          console.log("[Validation] Request details:", {
            url: `${baseUrl}/auth/validate-email`,
            method: options.method,
            headers: options.headers,
            mode: options.mode,
            credentials: options.credentials,
          });
        },
        onRequestError({ error }) {
          console.error("[Validation] Request failed:", error);
          throw error;
        },
        onResponse({ response }) {
          console.log("[Validation] Response details:", {
            status: response.status,
            headers: response.headers,
            data: response._data,
          });
        },
        onResponseError({ response }) {
          console.error("[Validation] Response error:", {
            status: response.status,
            statusText: response.statusText,
            data: response._data,
          });
          throw new Error(
            response._data?.message || `Response error: ${response.statusText}`
          );
        },
      });

      if (response) {
        console.log("[Validation] Success response:", response);
        message.value = "Your email has been successfully validated!";
        showResendForm.value = false;
        setTimeout(() => {
          navigateTo("/login");
        }, 3000);
      } else {
        throw new Error("No response data received");
      }
    } catch (fetchError) {
      console.error("[Validation] Fetch error:", fetchError);

      // Check if it's a CORS error
      if (
        fetchError.message?.includes("CORS") ||
        fetchError.message?.includes("Failed to fetch")
      ) {
        console.error("[Validation] Possible CORS issue detected");
        message.value =
          "Unable to connect to the server. Please try again later.";
        showResendForm.value = true;
      } else if (
        fetchError.message?.toLowerCase().includes("already validated")
      ) {
        message.value = fetchError.message;
        showResendForm.value = false;
        setTimeout(() => {
          navigateTo("/login");
        }, 3000);
      } else {
        message.value =
          fetchError.message || "Validation failed. Please try again.";
        showResendForm.value = true;
      }
    }
  } catch (err) {
    console.error("[Validation] Caught error:", err);
    message.value = "An error occurred during validation.";
    showResendForm.value = !message.value
      .toLowerCase()
      .includes("already validated");
  } finally {
    isValidating.value = false;
  }
};

onMounted(async () => {
  const token = route.query.token;
  console.log("[Mount] Token present:", !!token);

  if (!token) {
    console.log("[Mount] No token found in query");
    message.value = "Invalid request. No validation token provided.";
    isValidating.value = false;
    showResendForm.value = true;
    return;
  }

  await validateToken(token);
});
</script>

<style lang="scss" scoped>
.bg-half-130 {
  padding: 220px 0;
  background-size: cover;
  align-self: center;
  position: relative;
  background-position: center center;
}

.card {
  border: none;
  box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;

  .card-body {
    padding: 2.5rem;
  }
}

.invalid-feedback {
  display: block;
}

.spinner-border {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
