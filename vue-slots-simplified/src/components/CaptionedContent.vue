<template>
  <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <figure class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <img src="https://tailwindcss.com/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg" alt="" class="w-full h-96 object-cover rounded-lg sm:h-60 sm:col-span-2 lg:col-span-full" loading="lazy">
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <figcaption class="font-medium">
              <div class="text-slate-700 dark:text-slate-500">
                <slot>Caption</slot>
              </div>
            </figcaption>
        </div>
      </figure>

      <figure class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <slot name="content">
          <img src="https://tailwindcss.com/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg" alt="" class="w-full h-96 object-cover rounded-lg sm:h-60 sm:col-span-2 lg:col-span-full" loading="lazy">
        </slot>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <figcaption class="font-medium">
              <div class="text-slate-700 dark:text-slate-500">
                <slot name="caption">Caption</slot>
              </div>
            </figcaption>
        </div>
      </figure>

  </main>
</template>

<script>
</script>