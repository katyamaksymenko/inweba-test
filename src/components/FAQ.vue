<template>
  <div class="pb-6 roboto">
    <h2 class="h2-head pt-20 pb-2">
      FAQ
    </h2>
    <div class="flex space-x-6">
      <div class="text-[#343434] w-[57.6%]">
        <div
            v-for="(item, index) in items"
            :key="item.id"
            class="border border-[1px] border-[#003366] rounded-[16px] pt-6 pb-2 px-10 mt-7"
        >
          <div class="flex items-center justify-between">
            <p class="text-xl font-500 pb-8 mt-4">
              {{ item.title }}
            </p>
            <button @click="toggle(index)">
              <img
                  :src="item.isOpen ? item.image2 : item.image"
                  :alt="item.isOpen ? 'minus' : 'plus'"
                  class=""
              >
            </button>
          </div>
          <p
              v-if="item.isOpen"
              class="text-[1.125rem] w-[88%] pt-8 pb-10 border-t border-t-[1px] border-t-[var(--primary-color)] font-400"
          >
            {{ item.text }}
          </p>
        </div>
      </div>
      <div class="rounded-[14px] w-[40.6%] bg-[var(--primary-color)] mt-7 ">
        <h5 class="poppins uppercase text-center pt-16 pb-10 border-b border-1 border-[#FBFBFB] mx-16 text-[var(--white-color)] text-[1.5rem]">
          Ask your question
        </h5>
        <form
            action=""
            class="flex pt-12 pb-8 flex-col mx-16 ">
          <input type="text" placeholder="Name" class="py-5 px-4 mb-5">
          <input type="text" placeholder="Email" class="py-5 px-4 mb-5">
          <input type="text" placeholder="Enter Your Question Here ....." class="pt-5 pb-16 px-4 mb-5">
        </form>
        <button class="flex justify-center mx-auto text-xl text-[var(--primary-color)] bg-[var(--white-color)] py-4 px-7 mb-10 rounded-[14px]">
          Send your message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const items = reactive ([
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur. Bibendum proin",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in eget sit. Lacus iaculis sed mollis mi massa tortor scelerisque sed amet. Turpis et sit tincidunt eget. Dolor nisl fermentum cras erat nisl facilisis. Et.",
    image: "./images/plus.svg",
    image2: "./images/minus.svg",
    isOpen: false,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur. Bibendum proin",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in eget sit. Lacus iaculis sed mollis mi massa tortor scelerisque sed amet. Turpis et sit tincidunt eget. Dolor nisl fermentum cras erat nisl facilisis. Et.",
    image: "./images/plus.svg",
    image2: "./images/minus.svg",
    isOpen: false,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur. Bibendum proin",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in eget sit. Lacus iaculis sed mollis mi massa tortor scelerisque sed amet. Turpis et sit tincidunt eget. Dolor nisl fermentum cras erat nisl facilisis. Et.",
    image: "./images/plus.svg",
    image2: "./images/minus.svg",
    isOpen: false,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur. Bibendum proin",
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum lacus nulla in eget sit. Lacus iaculis sed mollis mi massa tortor scelerisque sed amet. Turpis et sit tincidunt eget. Dolor nisl fermentum cras erat nisl facilisis. Et.",
    image: "./images/plus.svg",
    image2: "./images/minus.svg",
    isOpen: false,
  }
   ])
const toggle = (index) => {
  items[index].isOpen = !items[index].isOpen;
};

</script>



<style scoped>

</style>