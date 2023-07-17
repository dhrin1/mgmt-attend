<script setup></script>
<template>
  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
    >
      <div class="text-center lg:w-2/3 w-full">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Sprout Solutions Management System
        </h1>
        <p class="mb-8 leading-relaxed">
          Sprout Solutions helps employers of all sizes with the HR platform for
          the future of work. By automating HR and Payroll management,
          recruitment and onboarding, employee engagement, and performance
          management, Sprout impacts the lives of every Filipino by improving
          business in the Philippines. This system is created by Alhdrin Gungon
          to comply the requirements for applying the role of Mid Frontend
          Developer.
        </p>
        <div class="flex justify-center">
          <button
            @click="$router.push('/attendance')"
            class="inline-flex text-white bg-green-primary border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Let's Check
          </button>
          <button
            @click="$router.push('/login')"
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
