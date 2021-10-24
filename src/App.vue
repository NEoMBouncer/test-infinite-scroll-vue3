<template>
  <div class="bg-gray-900">
    <div class="space-y-12 max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-18">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl text-white font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
      </div>
      <ul role="list"
          ref='scrollComponent'
          class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
        <li v-for="post in posts" class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
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
    /**
     * App.vue Date
     * @vue-data {array} [posts = []] a list of users
     * @vue-data {array} [resPosts = []] new users when scrolling
     * @vue-data {scrollComponent} [scrollComponent = null] use scrollComponent
     */
    const posts = ref([])
    const resPosts = ref([])
    const scrollComponent = ref(null)

    /**
     * Adding a list of users when requesting an API
     */
    getPosts()
        .then(res => res)
        .then(data => posts.value = data);

    /**
     * function of adding to the list of users when scrolling
     */
    const loadMorePosts = async() => {
      // API request call
     await getPosts()
          .then(res => res)
          .then(data => resPosts.value = data);
     // change of date
      let newPosts = resPosts.value
      posts.value = [...posts.value, ...newPosts];
    }
    /**
     * function of throttle Scroll
     * @return {Function} Returns throttle function.
     */
    const throttle = (fn, wait) => {
      let time = Date.now();
      return function() {
        if ((time + wait - Date.now()) < 0) {
          fn();
          time = Date.now();
        }
      }
    }

    /**
     * function of call infitite scroll
     */
    const handleScroll = () => {
      let element = scrollComponent.value
      // checking indentation for a function call
      if ( element.getBoundingClientRect().bottom - 30 < window.innerHeight) {
        loadMorePosts()
      }
    }

    /**
     * App.vue `onMounted` hook
     * @description function call on page load
     */
    onMounted( () => {
      window.addEventListener("scroll", throttle(handleScroll, 100))
    })

    /**
     * App.vue `onUnmounted` hook
     * @description function call when scrolling the page
     */
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })

    /**
     * App.vue Date call
     * @return {posts, scrollComponent} Returns
     */
    return {
      posts,
      scrollComponent
    }
  },
}
</script>