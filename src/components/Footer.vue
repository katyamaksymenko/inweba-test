<template>
  <div class="roboto py-10">
    <div class="flex items-center justify-between text-md">
      <div class="w-[15%]">
        <img alt="logo" class="cursor-pointer" src="/images/logo.svg" width="48.09" height="48.23" />
      </div>
      <a class="text-[var(--primary-color)]">
        © 2024 Dickens Consulting Group, LLC
      </a>
      <div class="flex space-x-10">
        <div
            v-for="item in footer"
            :key="item.id"
            class="base-text "
        >
          <button class=" ">
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const footer = [
  { id: 1, name: "Course", },
  { id: 2, name: "About",},
  { id: 3, name: "Contact", },
];

</script>



<style scoped>

</style>