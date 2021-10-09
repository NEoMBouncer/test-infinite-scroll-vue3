<template>
  <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-18">
    <div class="space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
      </div>
      <ul role="list"
          ref='scrollComponent'
          class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
        <li v-for="post in posts">
          <Card :post="post"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { ref, onMounted, onUnmounted } from 'vue'
import getPosts from "./api/get-people.js"

export default {
  components: {
    Card
  },
  setup() {
    console.log(2)
    // Date
    const posts = ref(getPosts(10))
    const scrollComponent = ref(null)

    const loadMorePosts = () => {
      let newPosts = getPosts(10)
      posts.value.push(...newPosts)
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })
    const handleScroll = (e) => {
      let element = scrollComponent.value
      if ( element.getBoundingClientRect().bottom < window.innerHeight ) {
        loadMorePosts()
      }
    }

    return {
      posts,
      scrollComponent
    }
  },
}
</script>


<style lang="scss">

</style>
