<template>
  <div>
    <h2 class="h2-head mb-6">Our courses</h2>
    <div class="border-2 border-[var(--primary-color)] p-10 rounded-[14px] mb-6" v-for="item in course" :key="item.id">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img :src="item.img" :alt="item.name" class="mr-4">
          <h4 class="poppins">{{ item.title }}</h4>
        </div>
        <div class="flex roboto cursor-pointer">
          <img :src="item.img2" :alt="item.name2" class="mr-3 bg-[#003366] rounded-full w-[40px] h-[40px]">
          <p class="about-text roboto mt-[4px] base-text">{{ item.name2 }}</p>
        </div>
      </div>
      <div class="flex gap-4 py-10 roboto">
        <div v-for="tag in item.tags" :key="tag.id" class="flex space-x-2 bg-[#E0E7EF] px-6 py-4 rounded-[45px]">
          <img :src="tag.img" :alt="tag.name">
          <p>{{ tag.text }}</p>
        </div>
      </div>
      <h5 class="roboto about-text text-[var(--primary-color)] font-medium pb-2">{{ item.headerText }}</h5>
      <div v-for="(section, index) in item.sections" :key="index" class="roboto text-[#343434] text-lg py-2">
        <h6>{{ section.title }}</h6>
        <ul>
          <li v-for="(listItem, idx) in section.items" :key="idx" class="flex items-center py-1">
            <img src="/images/li.svg" :alt="listItem.text" class="w-6 h-6 mr-4">
            <span>{{ listItem.text }}</span>
          </li>
        </ul>
      </div>
      <div class="flex text-3xl uppercase roboto text-[var(--primary-color)] pt-4 pb-8">
        <p>{{ priceText }}</p>
        <img :src="priceImg" alt="item.name4" class="px-4">
        <p class="font-3xl">{{ price }}</p>
      </div>
      <button class="main-button px-[5.355rem] uppercase py-[0.856rem] roboto">{{ textButton }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Use ref to make course reactive
const course = ref([
  {
    headerText: "The Three Primary Coaching Program Models:",
    title: "Level 1 (ACC Track) Experiential Executive Coaching Program",
    id: 1,
    img: "/images/star-button.svg",
    img2: "/images/arrow-top.svg",
    name: "Course Icon",
    name2: "Details",
    tags: [
      { id: 1, img: "/images/watch.svg", text: "60-hour" },
      { id: 2, img: "/images/tv.svg", text: "Online" },
      { id: 3, img: "/images/english.svg", text: "English" },
    ],
    sections: [
      {
        title: "1. Level 1 (ACC Track) Experiential Executive Coaching Program",
        items: [
          { text: "How to acquire the necessary skills and techniques for certification." },
          { text: "Progress from data intake to knowledge acquisition and understanding." },
          { text: "Achieve competence and transcendence in coaching abilities." },
        ],
      },
      {
        title: "2. Level 1 (ACC Track) Experiential Executive Coaching Program",
        items: [
          { text: "How to acquire the necessary skills and techniques for certification." },
          { text: "Progress from data intake to knowledge acquisition and understanding." },
          { text: "Achieve competence and transcendence in coaching abilities." },
        ],
      },
      {
        title: "3. Level 1 (ACC Track) Experiential Executive Coaching Program",
        items: [
          { text: "How to acquire the necessary skills and techniques for certification." },
          { text: "Progress from data intake to knowledge acquisition and understanding." },
          { text: "Achieve competence and transcendence in coaching abilities." },
        ],
      },
    ],
  },
  {
    headerText: "The Three Primary Coaching Program Models:",
    title: "Level 1 (ACC Track) Experiential Executive Coaching Program",
    id: 1,
    img: "/images/star-button.svg",
    img2: "/images/arrow-top.svg",
    name: "Course Icon",
    name2: "Details",
    tags: [
      { id: 1, img: "/images/watch.svg", text: "60-hour" },
      { id: 2, img: "/images/tv.svg", text: "Online" },
      { id: 3, img: "/images/english.svg", text: "English" },
    ],
    sections: [
      {
        title: "1. Level 1 (ACC Track) Experiential Executive Coaching Program",
        items: [
          { text: "How to acquire the necessary skills and techniques for certification." },
          { text: "Progress from data intake to knowledge acquisition and understanding." },
          { text: "Achieve competence and transcendence in coaching abilities." },
        ],
      },
      {
        title: "2. Level 1 (ACC Track) Experiential Executive Coaching Program",
        items: [
          { text: "How to acquire the necessary skills and techniques for certification." },
          { text: "Progress from data intake to knowledge acquisition and understanding." },
          { text: "Achieve competence and transcendence in coaching abilities." },
        ],
      },
      {
        title: "3. Level 1 (ACC Track) Experiential Executive Coaching Program",
        items: [
          { text: "How to acquire the necessary skills and techniques for certification." },
          { text: "Progress from data intake to knowledge acquisition and understanding." },
          { text: "Achieve competence and transcendence in coaching abilities." },
        ],
      },
    ],
  },
]);

const priceText = "Price";
const priceImg = "/images/line.svg";
const price = "$6,499";
const textButton = "Join";
</script>

<style scoped>
</style>
