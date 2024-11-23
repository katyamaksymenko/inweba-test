

<template>
  <div class="py-14 ">
    <h2 class="h2-head poppins bg-[#FBFBFB] py-8 pl-10 rounded-[14px] ">advantages</h2>
    <div class="advantage-list mt-6 ">
      <div class="flex space-x-6 text-center ">
        <div
            v-for="item in advantagesItems"
            :key="item.id"
            class="py-7 px-12 advantages-block rounded-[14px]"
        >
          <img :src="item.img" :alt="item.name" class="mx-auto">
          <h4 class="py-3 poppins">
            {{item.name}}
          </h4>
          <p class="text-lg poppins advantages-text base-text">
            {{item.text}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const advantagesItems = [
  {
    id: 1,
    img: '/images/Rocket.svg',
    name: "Launch Your Coaching Career",
    text: "A comprehensive course track to ICF credentialing",
  },
  {
    id: 2,
    img: "/images/Lamp.svg",
    name: "Coaching in the Workplace",
    text: "Serve as a thought leader within your organization",
  },
  {
    id: 3,
    img: "/images/Book.svg",
    name: "Continuing Coaching Education",
    text: "Beginner or a seasoned pro, you'll find a course right for you",
  },
];

</script>

<style scoped>

</style>