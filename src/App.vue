<script setup>
import AppBar from "./components/AppBar.vue";
import Welcome from "./components/Welcome.vue"
import Advantage from "./components/Advantage.vue";
import AboutUs from './components/AboutUs.vue';
import OurCourses from './components/OurCouses.vue';
import Form from './components/Form.vue';
import Testimonials from "./components/Testimonials.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <div class="">
    <header >
      <AppBar class="content "/>
    </header>
  </div>
    <main>
      <section >
        <Welcome class="content "/>
      </section >
      <section class="dark-bg">
        <Advantage class="content "/>
      </section>
      <section class="light-bg">
        <AboutUs class="content "/>
        <OurCourses class="content "/>
      </section>
      <section class="bg-[var(--primary-color)]">
        <Form class="content "/>
      </section>
      <section>
        <section class="light-bg">
          <Testimonials class="content "/>
          <FAQ class="content "/>
          <Footer class="content"/>
        </section>
      </section>
    </main>
</template>

<style scoped>


</style>
