<template>
  <form>
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

  
    <div class="form-group">
      <label>開始日</label>
        <input type="date" class="form-control" aria-label="開始日" v-model="$v.form.startDate.$model">
      <div class="text-danger" v-if="$v.form.startDate.$error && !$v.form.startDate.required">
        開始日を入力してください。
      </div>
      <div class="text-danger" v-if="$v.form.startDate.$error && !$v.form.startDate.minValue">
        開始日を終了日より前の日で入力してください。
      </div>
    </div>



    <div class="form-group">
      <label>終了日</label>
        <input type="date" class="form-control" aria-label="終了日" v-model="$v.form.endDate.$model">
      <div class="text-danger" v-if="$v.form.endDate.$error && !$v.form.endDate.required">
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

<!-- 
    <div class="form-group">
      <label>好きな食べ物</label>
      <select class="form-control" aria-label="好きな食べ物" v-model="$v.form.foods.$model" multiple>
        <option value="apple">りんご</option>
        <option value="banana">バナナ</option>
        <option value="meron">メロン</option>
        <option value="ichigo">いちご</option>
      </select>
      <div class="text-danger" v-if="$v.form.foods.$error">
         好きな食べ物は選択してください。
      </div>
    </div> -->


    <div class="form-group">
      <label>趣味</label>
      <select class="form-control" aria-label="好きな趣味" v-model="$v.form.hobbies.$model" multiple>
        <option value="soccer">サーカー</option>
        <option value="baseboll">野球</option>
        <option value="basket">バスケット</option>
      </select>
      <div class="text-danger" v-if="$v.form.hobbies.$error && !$v.form.hobbies.required">
         好きな食べ物は選択してください。
      </div>
    </div>

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
      propsTitle: {
        // type: String,
        // required: true
      },
      propsBody: {
        // type: String,
        // required: true
      },
      propsEmail: {
        // type: String,
        // required: true
      },
      propsStartDate: {
        // type: Date,
        // required: true
      },
      propsEndDate: {
        // type: Date,
        // required: true
      },
      propsHobbies: {
        // type: Array,
        // required: true
      },
      propsFoods: {
        // type: Array,
        // required: true
      },
      propsGender: {
        // type: String,
        // // required: true
      },
      propsSubject: {
        // type: String,
        // required: true
      },
      propsCheck: {
        // type: Boolean,
        // required: true
      },
      propsSubmitCheck: {
        // type: Boolean,
        // required: true
      }
      // propsForm: {
      //   type: Object,
      //   required: true
      // },
    },
    // filters: {
    //   datefilter: function(date){
    //     return moment(date).format('YYYY/MM/DD');
    //   }
    // },
    data() {
      return {
        form: null,
      }
    },
    created() {
      this.form = {
        title: this.propsTitle,
        body: this.propsBody,
        email: this.propsEmail,
        startDate: this.propsStartDate,
        endDate: this.propsEndDate,
        hobbies: this.propsHobbies,
        foods: this.propsFoods,
        gender: this.propsGender,
        subject: this.propsSubject,
        check: this.propsCheck,
        submitCheck: this.propsSubmitCheck
      }
    },
    methods: {
      submit() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.form.submitCheck = true; // 送信後に表示してほしいエラーにはこの判定を使う。
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
        startDate: {
          required,
        },
        endDate: {
          required,
        },
        body: {
          required,
          minValue: minLength(100)
        },
        foods: {
          required
        },
        hobbies: {
          required,
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