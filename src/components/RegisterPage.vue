
/*------------------------template----------------------------*/
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
            v-model="state.password.password"
              type="password"
                placeholder="password"
                  show-password/>
                  <span v-if="v$.password.password.$error"> {{ v$.password.password.$errors[0].$message }}</span>
</div>

<div class="input2">
         <label class="lable2"> password</label>

         <el-input
            v-model="state.password.confirm"
              type="password"
                placeholder="confirm password"
                  show-password/>
                  <span v-if="v$.password.confirm.$error"> {{ v$.password.confirm.$errors[0].$message }}</span>
</div>
<div class="Submit button">
  <el-button type="success" @click="submitForm">Submit</el-button>
</div>
</div>


</template>

/*--------------------------------------script------------------------------- */
<script lang="js" setup>


  import {required, email,minLength, sameAs } from '@vuelidate/validators'
  import { reactive, computed } from 'vue';
  import usevalidate from "@vuelidate/core"


   const state =reactive({
      email: "",
      password:{
        password: "",
        confirm: " ",
      },
    } ) 
    
    const rules = computed(()=> {
      return {
        email: { required, email },
        password:{
          password: { required, minLength: minLength(6) },
          confirm:{ required, sameAs: sameAs(state.password.password)},
        }
      };
    });
    
    const v$ = usevalidate(rules, state)
    
  
  async function submitForm (){
    await this.v$.$validate() 
    if(!this.v$.$error){
      alert("Success, form submitted")
    }else{
      alert("validation failed")
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

}

.lable1, .lable2, .lable3{
    color: azure;
    margin-right: 20px;
}


</style>
  