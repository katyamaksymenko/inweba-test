<template>
  <div>
    <h2 class="h2-head pt-20 pb-8">
      Testimonials
    </h2>
    <div class="">
        <div class="flex space-x-4 overflow-hidden">
          <div
              v-for="(slide, index) in visibleSlides"
              :key="slide.id"
              class=""
          >
            <div class="flex border border-[1px] border-[#003366] rounded-[12px] p-5 ">
              <img
                  :src="slide.image"
                  :alt="slide.name"
                  class="rounded-[12px] flex transition-transform ease-in-out duration-1000"
              >
              <div class="pl-5">
                <h3
                    class="text-[1.25rem] capitalize font-500 poppins">
                  {{ slide.name }}
                </h3>
                <p
                    class="text-sm text-gray-500 roboto text-[1rem] py-2"
                >
                  {{ slide.role }}
                </p>
                <div
                    class="flex justify-left"
                >
                  <span
                      v-for="n in slide.review"
                      :key="n"
                      class="text-yellow-400 text-xl"
                  >
                    <img
                      src="/images/star.svg"
                      alt="star"
                    >
                  </span>
                </div>
                <p
                    class="text-sm text-gray-600 roboto text-[1rem] pt-3 pr-16 leading-[1.5]"
                >
                  {{ slide.feedback }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center mt-6 mx-auto max-w-[222px] rounded-full border border-1px border-[#BFCCD8] p-3">
          <button
              @click="prevSlide"
              :disabled="currentIndex === 0"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-[#c2d1E0] hover:bg-[#003366] disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <img src="/images/left.svg" alt="">
          </button>

          <!-- Page Indicators -->
          <div class="flex space-x-2">
            <button
                v-for="(_, index) in totalPages"
                :key="index"
                @click="goToPage(index)"
                class="w-[13px] h-[4px] rounded-[2px] bg-[#c2d1E0] hover:bg-[#003366]"
                :class="[ currentIndex === index ? 'bg-blue-950' : '',
                          currentIndex === index ? 'w-[18px]' : '',
  ]"
            ></button>
          </div>

          <!-- Next Button -->
          <button
              @click="nextSlide"
              :disabled="currentIndex === totalPages - 1"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-[#c2d1E0] hover:bg-[#003366] disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <img src="/images/right.svg" alt="">
          </button>
        </div>
      </div>


  </div>

</template>

<script setup>
import { ref, computed } from "vue";

const slides = ref([
  {
    id: 1,
    name: "Name",
    role: "Role Here",
    image: "./images/photo.svg",
    feedback:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    review: 5
  },
  {
    id: 2,
    name: "Name",
    role: "Role Here",
    image: "./images/photo1.svg",
    feedback:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    review: 5
  },
  {
    id: 3,
    name: "Kate",
    role: "Role Here",
    image: "./images/photo.svg",
    feedback:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    review: 3
  },
  {
    id: 4,
    name: "Nick",
    role: "Role Here",
    image: "./images/photo1.svg",
    feedback: "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    review: 4
  },
  {
    id: 5,
    name: "Sanda",
    role: "Role Here",
    image: "./images/photo.svg",
    feedback:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    review: 3
  },
  {
    id: 6,
    name: "Mick",
    role: "Role Here",
    image: "./images/photo1.svg",
    feedback: "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    review: 1
  },
  {
    id: 7,
    name: "Name",
    role: "Role Here",
    image: "./images/photo.svg",
    feedback:
        "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    review: 5
  },
  {
    id: 4,
    name: "Name",
    role: "Role Here",
    image: "./images/photo1.svg",
    feedback: "Lorem ipsum dolor sit amet consectetur. Sed commodo lorem sit nec ut. Habitant mattis in vitae sagittis maecenas sed. Sed sit posuere sed sit rhoncus. Nunc leo eu volutpat laoreet est arcu odio vitae egestas. Porttitor urna.",
    review: 2
  },
]);

const currentIndex = ref(0); // Current slide index
const slidesPerPage = 2;

const totalPages = computed(() => Math.ceil(slides.value.length / slidesPerPage));

const visibleSlides = computed(() =>
    slides.value.slice(
        currentIndex.value * slidesPerPage,
        (currentIndex.value + 1) * slidesPerPage
    )
);

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const nextSlide = () => {
  if (currentIndex.value < totalPages.value - 1) {
    currentIndex.value++;
  }
};

const goToPage = (page) => {
  currentIndex.value = page;
};

</script>



<style scoped>
button {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

</style>


