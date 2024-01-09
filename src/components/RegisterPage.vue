/*----------------------template-------------------- */
<template>

  <div class="container">  
     <div class="input1">
  
         <label for="email" class="lable1">Enter email</label>
         <el-input type="text" 
                    v-model="state.email" 
                       placeholder="@gmail.com" />
                       <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }}</span>
  
  </div> 
   
    <div class="input2">
           <label class="lable2"> password</label>
  
           <el-input
              v-model="state.password"
                type="password"
                  placeholder="password"
                    show-password/>
                    <span v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }}</span>
  </div>
  
  <div class="input3">
           <label class="lable2"> password</label>
  
           <el-input
              v-model="state.confirmPassword"
                type="password"
                  placeholder="confirm password"
                    show-password/>
                    <span v-if="v$.confirmPassword.$error"> {{ v$.confirmPassword.$errors[0].$message }}</span>

  </div>
  <div class="Submit button">
    <el-button  class="button" type="success" @click="submitForm">Submit</el-button>
  </div>
  </div>
  
  
  </template>

/*----------------------------script------------------------ */
<script>
import useVuelidate from '@vuelidate/core';
import { required, email, sameAs, minLength } from '@vuelidate/validators';
import { reactive, computed } from 'vue';


export default{

  setup(){
      const state = reactive({
                 email: "",
              password: "",
       confirmPassword: "",
      })

      const rules= computed(()=>{
          return{
              email: {required, email },
             password: {required, minLength: minLength(6) },
             confirmPassword: {required, sameAs: sameAs(state.password) },

          }
      })

      const v$ = useVuelidate(rules, state)
      return {
          state,
          v$,
      }
  },
  

  methods:{
  submitForm(){
      console.log(this.v$);
      console.log(this.state);
   this.v$.$validate()
   if(!this.v$.$error){
      alert('sucess validation')
   } else{
      alert("validation failed")
   }
  }
}
}

</script>


/* ------------------------------ CSS ------------------------------*/ 
<style>

.container{
    background-color: rgba(20, 44, 88, 0.822);
   align-items: center;
   padding: 50px ;
}

.input1, .input2, .input3, .dropdown, .radio{
    margin: 20px 20px;
width: 70%;   
align-items: center; 
height: 90px;

}

.lable1, .lable2, .lable3{
    color: azure;
    margin-right: 20px;
}
span{
 
  color: rgb(255, 9, 9);
}



</style>
  