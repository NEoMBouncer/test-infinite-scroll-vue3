<template>
  <div class="space-y-6">
<!--    <img-->
<!--        class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"-->
<!--        :src="imageUrl"-->
<!--        alt="avatar-img"-->
<!--    />-->
    <div class="space-y-2">
      <div class="text-lg leading-6 font-medium space-y-1">
        <h3>{{ post.name }}</h3>
        <p class="text-indigo-600">{{ post.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    // name: {
    //   type: String,
    //   default: '',
    // },
    // imageUrl: {
    //   type: String,
    //   default: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    // },
    // email: {
    //   type: String,
    //   default: '',
    // },
    post: Object
  },
}
</script>

<style lang="scss" scoped>

</style>