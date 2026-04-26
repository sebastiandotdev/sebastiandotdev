<template>
  <section
    class="min-h-screen font-sans p-10 md:p-20 flex items-center justify-center"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl w-full"
    >
      <div class="flex flex-col gap-6 items-start">
        <h2
          class="text-6xl md:text-8xl font-black leading-tight m-0 flex items-center gap-2 flex-wrap"
        >
          I design top notch websites
        </h2>

        <button
          class="mt-12 px-10 py-5 text-2xl font-bold bg-glacier border-4 rounded-4xl border-border hover:translate-x-1 hover:translate-y-1"
        >
          See Portfolio
        </button>
      </div>

      <div
        class="relative flex justify-center items-center border-4 border-border p-10"
      >
        <div class="relative">
          <div class="flex justify-center gap-x-24 mb-4">
            <div class="w-4 h-4 bg-black dark:bg-white rounded-full"></div>
            <div class="w-4 h-4 bg-black dark:bg-white rounded-full"></div>
          </div>

          <div
            class="relative border-4 border-border p-4 w-[400px] h-[500px] flex flex-col"
          >
            <div class="flex-grow my-6 flex items-center justify-center">
              <span class="text-9xl">{{ ':)' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
