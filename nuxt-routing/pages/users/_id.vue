<template>
  <section>
    <h1>{{message}}</h1>
    {{this.$route.params.id}}
  </section>
</template>

<script>
export default {
  data: ()=>({
    message: "idページを表示中"
  }),
  validate({params}){
    return /^\d+$/.test(params.id)
  }
}
</script>