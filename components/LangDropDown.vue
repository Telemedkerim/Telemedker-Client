<template>
  <ClientOnly>
    <div
      ref="customSelect"
      class="lang-switcher"
      :class="{ 'lang-switcher--active': isOpen }"
    >
      <button
        ref="selectBtn"
        class="lang-button"
        :class="{ 'lang-button--active': isOpen }"
        role="combobox"
        :aria-expanded="isOpen"
        aria-haspopup="listbox"
        :aria-controls="'select-dropdown'"
        :aria-activedescendant="
          isOpen ? `option-${highlightedIndex}` : undefined
        "
        @click.stop="toggleDropdown"
      >
        <img
          :src="`/img/flags/${$i18n.locale}.svg`"
          :alt="$i18n.locale"
          class="flag-icon"
          aria-hidden="true"
        />
        <span class="lang-code">{{ $i18n.locale.toUpperCase() }}</span>
      </button>

      <ul
        v-show="isOpen"
        id="select-dropdown"
        ref="listContainer"
        class="lang-dropdown"
        role="listbox"
        tabindex="-1"
      >
        <li
          v-for="(locale, index) in availableLocales"
          :key="locale.code"
          ref="listItems"
          role="option"
          :aria-selected="$i18n.locale === locale.code"
          :class="{
            'lang-option--highlighted': highlightedIndex === index,
          }"
          class="lang-option"
          @click.stop="switchLanguage(locale.code, index)"
        >
          <NuxtLink
            class="lang-option__link"
            :to="switchLocalePath(locale.code)"
            tabindex="-1"
          >
            <input
              :id="locale.code"
              type="radio"
              name="language-code"
              :checked="$i18n.locale === locale.code"
              :aria-label="`Select ${locale.name}`"
              class="lang-option__input"
            />
            <label :for="locale.code" class="lang-option__label">
              <img
                :src="`/img/flags/${locale.code}.svg`"
                :alt="locale.name"
                class="flag-icon"
                aria-hidden="true"
              />
              <span class="lang-name">{{ locale.name }}</span>
            </label>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const isOpen = ref(false);
const customSelect = ref<HTMLElement | null>(null);
const listItems = ref<HTMLElement[]>();
const listContainer = ref<HTMLElement>();
const highlightedIndex = ref(0);

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const findLocaleIndex = () => {
  const index = locales.value.findIndex((l) => l.code === locale.value);
  highlightedIndex.value = index !== -1 ? index : 0;
};

const toggleDropdown = (event: Event) => {
  event.preventDefault();
  isOpen.value = !isOpen.value;
};

const switchLanguage = async (code: string, index: number) => {
  locale.value = code;
  isOpen.value = false;
  highlightedIndex.value = index;
};

const scrollPosition = (direction: number): void => {
  nextTick(() => {
    const items = listItems.value as HTMLElement[];
    highlightedIndex.value = Math.min(
      Math.max(0, highlightedIndex.value + direction),
      availableLocales.value.length - 1
    );
    const top = items[highlightedIndex.value].offsetTop;
    listContainer.value?.scrollTo({ top, behavior: "smooth" });
  });
};

const handleKeydown = (event: KeyboardEvent) => {
  if (["Escape", "ArrowDown", "ArrowUp", "Enter"].includes(event.key)) {
    event.preventDefault();
    event.stopPropagation();
  }

  switch (event.key) {
    case "Escape":
      isOpen.value = false;
      break;
    case "ArrowDown":
      if (isOpen.value) {
        highlightedIndex.value =
          (highlightedIndex.value + 1) % availableLocales.value.length;
        scrollPosition(0);
      }
      break;
    case "ArrowUp":
      if (isOpen.value) {
        if (highlightedIndex.value > 0) {
          highlightedIndex.value =
            (highlightedIndex.value - 1 + availableLocales.value.length) %
            availableLocales.value.length;
          scrollPosition(0);
        }
      }
      break;
    case "Enter":
      if (isOpen.value && highlightedIndex.value >= 0) {
        switchLanguage(
          availableLocales.value[highlightedIndex.value].code,
          highlightedIndex.value
        );
      }
      break;
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    customSelect.value &&
    !customSelect.value.contains(event.target as Node) &&
    isOpen.value
  ) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("click", handleClickOutside);
  findLocaleIndex();
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeydown);
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
.lang-switcher {
  position: relative;
  display: inline-block;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
}

.flag-icon {
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 50%;
}

.lang-code {
  font-size: 14px;
  font-weight: 500;
}

.lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 150px;
  z-index: 1000;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &.active {
    background: rgba(0, 0, 0, 0.05);
  }

  &--highlighted {
    background: rgba(0, 0, 0, 0.05);
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }

  &__input {
    position: absolute;
    left: 0;
    opacity: 0;

    &:focus ~ .lang-option__label {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  &__label {
    width: 100%;
    cursor: pointer;
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }
}

.lang-name {
  font-size: 14px;
  text-align: left;
}

.lang-switcher {
  &--active .lang-button {
    opacity: 0.8;
  }
}
</style>
