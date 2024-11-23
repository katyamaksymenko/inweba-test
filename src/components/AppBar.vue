<template>
  <div class="roboto py-3 app-bar">
    <div class="flex text-md">
      <div class="w-[64%]">
        <img alt="logo" class="cursor-pointer" src="/images/logo.svg" width="48.09" height="48.23" />
      </div>
      <div class="w-[40%] flex justify-between">
        <div
            v-for="item in appBarItems"
            :key="item.id"
            class="flex items-center space-x-2 px-2 py-3 base-text "
        >
          <button @click="toggleDropdown(item.id)" class=" ">
            {{ item.name }}
          </button>
          <button
              v-if="item.dropdown"
              @click="toggleDropdown(item.id)"
              class="inline-flex items-center "
          >
            <img
                :class="item.iconClass"
                src="/images/dropdown.svg"
                alt="">
          </button>
          <div
              v-if="item.dropdown && item.showDropdown"
              class="absolute top-14"
          >
            <button
                v-for="subItem in item.subItems"
                :key="subItem.id"
                class="flex py-1">
              {{ subItem.name }}
            </button>
          </div>
        </div>
        <div>
          <button class="px-8 py-3.5 main-button">
            Login
          </button>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";

const appBarItems = ref([
  { id: 1, name: "Home" },
  { id: 2, name: "Courses", dropdown: true, showDropdown: false, iconClass: "",
    subItems: [
      { id: 1, name: "Team" },
      { id: 2, name: "Careers" },
    ]
  },
  { id: 3, name: "About" },
  { id: 3, name: "Contact us" },
]);
// Toggle dropdown for specific menu item
const toggleDropdown = (id) => {
  const item = appBarItems.value.find((item) => item.id === id);
  if (item && item.dropdown) {
    item.showDropdown = !item.showDropdown;
    item.iconClass = item.showDropdown ? 'rotate-icon' : '';
  }
};

</script>



<style scoped>
.rotate-icon {
  transform: rotate(180deg);
  transform-origin: center;
}

</style>
