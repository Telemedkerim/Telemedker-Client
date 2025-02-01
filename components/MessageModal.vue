<template>
  <div
    v-if="isVisible"
    class="modal fade show"
    tabindex="-1"
    style="display: block"
    @click.self="onClose"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center p-4">
          <div class="avatar-md mx-auto mb-4">
            <div
              class="avatar-title rounded-circle bg-light text-primary h1 mb-0"
            >
              <i
                :class="
                  type === 'success'
                    ? 'uil uil-check-circle'
                    : type === 'error'
                    ? 'uil uil-exclamation-triangle'
                    : 'uil uil-info-circle'
                "
              ></i>
            </div>
          </div>
          <div class="pt-2 pb-3">
            <h5 class="mb-3">{{ title }}</h5>
            <p class="text-muted mb-4">{{ message }}</p>
            <button
              type="button"
              class="btn btn-primary w-100"
              @click="onConfirm"
            >
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isVisible" class="modal-backdrop fade show"></div>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "OK",
  },
  type: {
    type: String,
    default: "success",
    validator: (value) => ["success", "error", "info"].includes(value),
  },
});

const emit = defineEmits(["close", "confirm"]);

const onClose = () => {
  emit("close");
};

const onConfirm = () => {
  emit("confirm");
};

watch(
  () => props.isVisible,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}

.avatar-md {
  height: 4rem;
  width: 4rem;
}

.avatar-title {
  align-items: center;
  display: flex;
  font-weight: 500;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
