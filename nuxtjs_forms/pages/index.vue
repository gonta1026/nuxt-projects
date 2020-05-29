<template>
  <div>
    <h1 class="title">
      お問い合わせ
    </h1>
    
    <form-contact
    :propsTitle="form.title"
    :propsBody="form.body"
    :propsEmail="form.email"
    :propsStartDate="form.startDate"
    :propsEndDate="form.startDate"
    :propsHobbies="form.hobbies"
    :propsFoods="form.foods"
    :propsGender="form.gender"
    :propsSubject="form.subject"
    :propsCheck="form.check"
    :propsSubmitCheck="form.submitCheck"
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
          gender: null,
          subject: null,
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