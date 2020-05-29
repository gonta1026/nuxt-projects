<template>
  <form>
    <div>
      <p>{{form}}</p>
    </div>
    <hr>
    <div>
      <p>{{$v.form.start_date}}</p>
    </div>
    <hr>
    <div>
      <p>{{hobby}}</p>
    </div>
    <div class="form-group">
      <label>性別</label>
      <div>
        <label class="form-check form-check-inline is-invalid">
          <input class="form-check-input" type="radio" value="male" v-model="$v.form.gender.$model">
          男性
        </label>
        <label class="form-check form-check-inline">
          <input class="form-check-input" type="radio" value="female" v-model="$v.form.gender.$model">
          女性
        </label>
        <div class="text-danger" v-if="$v.form.gender.$error">
          性別を選択してください。
        </div>
      </div>

    </div>
    <div class="form-group">
      <label>件名</label>
      <input type="text" class="form-control" aria-label="件名" v-model="$v.form.title.$model">
      <div class="text-danger" v-if="$v.form.title.$error && !$v.form.title.required">
        件名を入力してください。
      </div>
      <div class="text-danger" v-if="$v.form.title.$error && !$v.form.title.maxLength">
        件名は200文字以内で入力してください。
      </div>
    </div>
    
    <div class="form-group">
      <label>メール</label>
      <input type="text" class="form-control" aria-label="メール" v-model="$v.form.email.$model">
      <div class="text-danger" v-if="$v.form.email.$error && !$v.form.email.required">
        メールアドレスを入力してください。
      </div>
      <div class="text-danger" v-if="$v.form.email.$error && !$v.form.email.email && form.submitCheck">
        メールアドレスは正しい形式で入力してください。
      </div>
    </div>
    <!-- 終了日が入力されているかををウオッチ -->
    <!-- 本日以降の日付で入力されないといけない。 -->
  
    <div class="form-group">
      <label>開始日</label>
        <input type="date" class="form-control" aria-label="開始日" v-model="$v.form.start_date.$model">
      <div class="text-danger" v-if="$v.form.start_date.$error && !$v.form.start_date.required">
        開始日を入力してください。
      </div>
      <div class="text-danger" v-if="$v.form.start_date.$error && !$v.form.start_date.minValue">
        開始日を終了日より前の日で入力してください。
      </div>
    </div>

    <!-- 開始日が入力されているかをウオッチ。 -->
    <!-- 本日以降の日付で入力されていないといけない。 -->


    <div class="form-group">
      <label>終了日</label>
        <input type="date" class="form-control" aria-label="開始日" v-model="$v.form.end_date.$model">
      <div class="text-danger" v-if="$v.form.end_date.$error && !$v.form.end_date.required">
        終了日を入力してください。
      </div>
      <div class="text-danger">
        終了日を開始日より前の日で入力してください。
      </div>
    </div>

    <div class="form-group">
      <label>部署</label>
      <select class="form-control" aria-label="部署" v-model="$v.form.subject.$model">
        <option value="null">選択してください</option>
        <option value="somu">総務部</option>
        <option value="sales">営業部</option>
        <option value="hanbai">販売部</option>
      </select>
      <div class="text-danger" v-if="$v.form.subject.$error">
        部署を選択してください。
      </div>
    </div>

    <!-- foodsでmultipleにするとコンソールでエラーがでる。-->

    <!-- <div class="form-group">
      <label>好きな食べ物</label>
      <select v-bind:multiple="isMultiple" class="form-control" aria-label="好きな食べ物" v-model="$v.form.foods.$model">
        <option value="banana">りんご</option>
        <option value="banana">バナナ</option>
        <option value="meron">メロン</option>
        <option value="ichigo">いちご</option>
      </select>
      <div class="text-danger" v-if="$v.form.foods.$error">
         好きな食べ物は選択してください。
      </div>
    </div> -->

    <select class="form-control" aria-label="好きな食べ物" v-model="hobby" multiple>
        <option value="banana">バスケ</option>
        <option value="soccer">サッカー</option>
        <option value="meron">野球</option>
        <option value="ichigo">ダンス</option>
    </select>

    <div class="form-group">
      <label>本文</label>
      <textarea type="text" class="form-control" rows="5" aria-label="本文" v-model="$v.form.body.$model"/>
      <div class="text-danger" v-if="$v.form.body.$error && !$v.form.body.required">
        本文を入力してください。
      </div>
      <div class="text-danger" v-if="$v.form.body.$error && !$v.form.body.minLength">
        本文は100文字以上で入力してください。
      </div>
    </div>
    <label class="form-group form-check">
      <input type="checkbox" class="form-check-input" v-model="$v.form.check.$model">
      個人情報の取扱に同意します。
      <div class="text-danger" v-if="$v.form.check.$error">
        個人情報の取扱に同意してください。
      </div>
    </label>
    <button type="submit" class="btn btn-primary" @click.prevent="submit">送信</button>
  </form>
</template>

<script>

  import {maxLength, minLength, required, email} from "vuelidate/lib/validators"
  import moment from "moment"
  const is = param =>value => value === param;
  // moment(new Date()).format('YYYY/MM/DD')
  const isDate = (value) => {
  return value === true
}

export default {
    props: {
      value: {
        type: Object,
        required: true
      },
    },
    filters: {
      datefilter: function(date){
        return moment(date).format('YYYY/MM/DD');
      }
    },
    data() {
      return {
        form: null,
        isMultiple: true,
        hobby: []
      }
    },
    mounted() {
      console.log(this.value)
      this.form = {...this.value}
      // this.form = this.value
    },
    methods: {
      submit() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.form.submitCheck = true; // 送信後に表示してほしいエラーにはこの判定を使う。
          console.log("バリデーションエラー")
        } else {
          this.$emit("submit", this.$v);
        }
      }
    },
    validations: {
      form: {
        title: {
          required,
          maxLength: maxLength(200)
        },
        email: {
          required,
          email
        },
        start_date: {
          required,
          isDate: {
            isDate: isDate(Date)
          }
        },
        end_date: {
          required,
        },
        body: {
          required,
          minValue: minLength(100)
        },
        foods: {
          required
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