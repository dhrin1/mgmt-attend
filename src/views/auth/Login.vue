<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Sprout Solutions
        </h1>
        <p class="leading-relaxed mt-4">
          Sprout Solutions helps employers of all sizes with the HR platform for
          the future of work. By automating HR and Payroll management,
          recruitment and onboarding, employee engagement, and performance
          management, Sprout impacts the lives of every Filipino by improving
          business in the Philippines.
        </p>
      </div>
      <div
        class="lg:w-2/6 md:w-1/2 bg-white shadow-lg border rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Sign Up
        </h2>
        <div class="relative mb-4">
          <Input type="text" name="email" label="Email" />
        </div>
        <div class="relative mb-4">
          <Input type="password" name="password" label="Password" />
        </div>
        <Button custom-class="bg-green-primary text-white">Signin</Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Input from "@/components/shared/forms/Input.vue";
import Button from "@/components/shared/forms/Button.vue";
</script>
