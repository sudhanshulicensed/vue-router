<template>
  <div class="test">
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.body }}</p>
  </div>
</template>

<script>

// import SingleBlog from "@/components/SingleBlog.vue"
import axios from 'axios'

export default {
  name: 'BlogView',
  components: {
    // SingleBlog,
  },
  data(){
      return {
          id: "",
          blog:{}
      }
  },
  async mounted(){
    //   console.log(this.$route.params.id);
      this.id = this.$route.params.id;
    //   this.$http.get('http://jsonplaceholder.typicode.com.posts/' + this.id).then(function(data){
    //     console.log(daa);
    //     this.blog = data.body;
    //   })
    await axios.get(`https://swapi.dev/api/people/${this.id}`).then((response) => {
    console.log(response.data);
    })
  }
}
</script>
