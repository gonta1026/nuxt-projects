<template>
  <div>
    <h1 class="title">
      お問い合わせ
    </h1>
    <form>
      <div class="form-group">
        <label>性別</label>
        <div>
          <label class="form-check form-check-inline">
            <input class="form-check-input" type="radio" value="male" v-model="$v.form.gender.$model">
            男性
          </label>
          <label class="form-check form-check-inline">
            <input class="form-check-input" type="radio" value="female" v-model="$v.form.gender.$model">
            女性
          </label>
        </div>
      </div>
      <div class="form-group">
        <label>件名</label>
        <input type="text" class="form-control" aria-label="件名" v-model="$v.form.title.$model">
      </div>
      <div class="form-group">
        <label>部署</label>
        <select class="form-control" aria-label="部署" v-model="$v.form.subject.$model">
          <option :value="null">選択してください</option>
          <option value="somu">総務部</option>
          <option value="sales">営業部</option>
          <option value="hanbai">販売部</option>
        </select>
      </div>
      <div class="form-group">
        <label>本文</label>
        <textarea type="text" class="form-control" rows="5" aria-label="本文" v-model="$v.form.body.$model"/>
      </div>
      <label class="form-group form-check">
        <input type="checkbox" class="form-check-input" v-model="$v.form.check.$model">
        個人情報の取扱に同意します。
      </label>
      <button type="submit" class="btn btn-primary" @click.prevent="submit">送信</button>
    </form>
  </div>
</template>

<script>
import {required,maxLength,minLength} from "vuelidate/lib/validators"
const is = (param) => value => value === param;

export default {
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
    submit(){
      if(this.$v.$invalid){
        console.log("バリデーションエラー")
      }else{
        console.log(this.form)
      }
    }
  },
 validations: {
    form: {
      title: {
        required,
        maxLength: maxLength(200)
      },
      body: {
        required,
        minLength:minLength(10)
      },
      gender: {required},
      subject: {required},
      check: {
        is: is(true)
      }
    }
  }
}
</script>

<style>

</style>