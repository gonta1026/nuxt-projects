<template>
  <div>
    <h1 class="title">
      お問い合わせ
    </h1>
    
    <form-contact
    :propsForm="form"
    @submit="submit"/>
    <form @submit.prevent="add">
      <label for="name">名前</label>
      <input id="name" type="text" name="name" v-model="name">
    </form>
    <ul>
      <li v-for="user in users" :key="user.id">{{user.name}}</li>
    </ul>
    <footer>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
  import FormContact from "~/components/FormContact.vue"
  import moment from "moment"
  export default {
    components:{
      FormContact
    },
    created: function() {
      this.$store.dispatch('users/init')
    },
    computed: {
      ...mapState('users',["users"]),
    },
    methods: {
      ...mapMutations('users', ["updateUsersName", "add"]),
      ...mapActions('users', [ "remove", "toggle"]),
    },
    data(){
      return {
        name: "",
        form: {
          title: "",
          body: "",
          email: "",
          startDate: "",
          endDate: "",
          hobbies: [],
          foods: [],
          gender: "",
          subject: "",
          check: false,
          submitCheck: false
        },
      }
    },
    methods:{
      submit($v){
        console.log($v.form.$model);
        // this.form.body = "";        
      },
      add(){
        this.$store.dispatch("users/add", this.name),
        this.name = ""
      }
    }
  }
</script>

<style>
  form {
    margin-top: 100px;
  }
  footer {
    margin-top: 100px;
  }

</style>