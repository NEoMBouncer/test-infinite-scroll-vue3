<template>
  <div class="space-y-6 xl:space-y-10">
    <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" :src="post.imageUrl" alt="avatar-img" />
    <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
      <div class="font-medium w-full flex flex-col items-center text-lg leading-6 space-y-1">
        <h3 class="text-white">{{ post.name }}</h3>
        <p class="text-indigo-400">{{ post.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>

/**
 * @module components/Card
 * @desc Card component for render user data
 * @vue-prop {Object} user List item of users
 * @vue-data post: {
 *    name: {String},
 *    email: {String},
 *    imageUrl: {String}
 * }
 */

export default {
  name: "Card",
  props: {
    post: Object
  },
}
</script>