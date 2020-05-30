<template>
  <div>
    <h1 class="title">
      お問い合わせ
    </h1>
    
    <form-contact
  
    :propsForm="form"
    @submit="submit"/>
  </div>
</template>

<script>
  import FormContact from "~/components/FormContact.vue"
  import moment from "moment"
  export default {
    components:{
      FormContact
    },
    data(){
      return {
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
      }
    }
  }
</script>

<style>

</style>