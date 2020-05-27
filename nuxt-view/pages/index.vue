<template>
  <div class="container">
    {{users}}
  </div>
</template>

<script>
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users"
const datas = axios.get(url);
  // axios.get(url)
export default {
  data: ()=>({
    users: []
  }),
  async mounted(){
    const datas = await axios.get(url)
    console.log(this.users = datas.data)
  }

}
</script>
