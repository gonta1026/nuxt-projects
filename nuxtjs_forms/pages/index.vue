<template>
  <div>
    <h1 class="title">
      お問い合わせ
    </h1>
    <form-contact v-model="form" @submit="submit"/>
  </div>
</template>

<script>
  import FormContact from "~/components/FormContact.vue"

  export default {
    components:{
      FormContact
    },
    data(){
      return {
        form: {
          title: "",
          body: "",
          gender: null,
          subject: null,
          check: false
        }
      }
    },
    methods:{
      submit($v){
        console.log($v.form.$model)
        this.form.body = "";
      }
    }
  }
</script>

<style>

</style>