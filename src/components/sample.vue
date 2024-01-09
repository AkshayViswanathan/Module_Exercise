<!-- 
/* --------------------- scrpit---------------------------- * /

<script lang="js" setup>

import {reactive, computed} from "vue";
import { usevuelidate } from '@vuelidate/core'
import {required, email, sameAs, helpers } from '@vuelidate/validators'

const formData = reactive({   
 input1Email : " ",
 password : "",
 confirmPassword:"",
 textarea : " ",
 radio1 : " ",
 country : " ", 

})

const containsUser = (value )=>{
 return value.includes('email')
}

const rules= computed(()=>{
  return { 

   input1Email : {required, email, containsUser: helpers.withMessage(" incorrect email", containsUser) },
   password : { required },
   confirmPassword : { required, sameAs: sameAs(formData.password)} ,
   textarea : { required },
   radio1 : { required },
   country : { required }, 

  }
})


const v$ = usevuelidate( rules, formData ) 

import { ref } from 'vue'
const input1Email = ref('')
const password = ref('')
const confirmPassword = ref(" ")
const textarea = ref('')
const radio1 = ref('')
const country = ref('')


const submitForm = async()=>{

const result = await v$.value.$validate();

  if( result){
    alert(" success,form sumitted");
  }
  else{
    alert("error, form not submitted")
  
  }

}


const options = [
  {
    value: 'India',
    label: 'India',
  },
  {
    value: 'USA',
    label: 'USA',
  },
  {
    value: 'China',
    label: 'China',
  },
  {
    value: 'Africa',
    label: 'Africa',
  },
  {
    value: 'UK',
    label: 'UK',
  },
]






</script>
/* --------------------------template-------------------------------- */

<template>
  <form >

<div class="container">  
   <div class="input1">
       <label for="email" class="lable1">Enter email</label>
       <el-input type="email" 
                   v-model="formData.input1Email" 
                     name="email" 
                       placeholder="@gmail.com" />
                       
 <span  v-for="error in v$.input1Email.$errors"
:key="error.$uid"> 
{{ error.$message }} 
</span>
 </div>


    <div class="input2">
         <label class="lable2">Enter password</label>

         <el-input
            v-model="formData.password"
              type="password"
                placeholder="Please enter password"
                  show-password/>
                  <span  v-for="error in v$.password.$errors"
:key="error.$uid"> 
{{ error.$message }} 
</span>
</div>

<div class="input2">
         <label class="lable2">confirm password</label>

         <el-input
            v-model="formData.confirmPassword"
              type="password"
                placeholder="Please enter password"
                  show-password/>
                  <span  v-for="error in v$.confirmPassword.$errors"
:key="error.$uid"> 
{{ error.$message }} 
</span>
</div>

<div class="input3">
    <label class="lable3">Enter message</label>
    <el-input
       v-model="formData.textarea"
         :rows="2"
           type="textarea"
             placeholder="Please input"/>
</div>

<div style="margin-top: 20px" class="radio">
  <label class="lable3">Gender </label>
    <el-radio-group v-model="formData.radio1">
      <el-radio-button label="Female" />
      <el-radio-button label="Male" />
    </el-radio-group>
    <span  v-for="error in v$.radio1.$errors"
:key="error.$uid"> 
{{ error.$message }} 
</span>
  </div>

<div class="dropdown">
    <label class="lable3">Country </label>
    <el-select v-model="formData.country" class="m-2" placeholder="Select" size="large" > 
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value" />
      </el-select>
      <span  v-for="error in v$.country.$errors"
:key="error.$uid"> 
{{ error.$message }} 
</span>
</div>
<div class="Submit button">
  <el-button type="success" @click="submitForm">Submit</el-button>
</div>
</div>
<div>
  <p1>
  errors:
  </p1>
  <span v-for="error in v$.$errors" :key="error.$uid">{{ error.$property }} - {{ error.$message }} </span>
</div>
</form>setup

</template> -->
