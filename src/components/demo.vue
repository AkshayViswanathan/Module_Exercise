<template>

    <div class="container">  
       <div class="input1">
    
           <label for="email" class="lable1">Enter email</label>
           <el-input type="text" 
                      v-model="state.email" 
                         placeholder="@gmail.com" />
                         <span class="message" v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }}</span>
    
    </div> 
     
      <div class="input2">
             <label class="lable2"> password</label>
    
             <el-input
                v-model="state.password"
                  type="password"
                    placeholder="password"
                      show-password/>
                      <span class="message" v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }}</span>
    </div>
    
    <div class="input2">
             <label class="lable2"> password</label>
    
             <el-input
                v-model="state.confirmPassword"
                  type="password"
                    placeholder="confirm password"
                      show-password/>
                      <span class="message" v-if="v$.confirmPassword.$error"> {{ v$.confirmPassword.$errors[0].$message }}</span>

    </div>

   
<div id="divbox">
    <div style="margin-top: 20px" class="radiobutton">
    <el-radio-group v-model="state.radio">
      <el-radio-button label="Female" />
      <el-radio-button label="Male" />
    </el-radio-group>
    <span class="message" v-if="v$.radio.$error">{{ v$.radio.$errors[0].$message }}</span>
  </div>

  <div class="dropdown">  

<el-select v-model="state.value" clearable placeholder="Select">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
 />  
  </el-select>
  <span class="message" v-if="v$.value.$error">{{ v$.value.$errors[0].$message }}</span>

</div>


</div>


  
    <div class="Submit button">
      <el-button type="success" @click="submitForm" style="color: rgb(255, 255, 255); ">Submit</el-button>
    </div>

    </div>
    
    
    
    </template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, sameAs, minLength } from '@vuelidate/validators';
import { reactive, computed } from 'vue';


export default{
    
    data() {
    return {
      value: '',
      options: [
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
          value: 'UAE',
          label: 'UAE',
        },
        {
          value: 'other',
          label: 'other',
        },

      ],

      radio: 'Female',
      radio: "male"
      
    };
  },
   
  
 
    setup(){
        
  
        const state = reactive({
            email: "",
         password: "",
         confirmPassword: "",
         value: "",
         radio: "",
         

        })

        const rules= computed(()=>{
            return{
                email: {required, email },
               password: {required, minLength: minLength(6) },
               confirmPassword: {required, sameAs: sameAs(state.password) },
               value: {required },
               radio: {required }

            }
        })

        const v$ = useVuelidate(rules, state)
        return {
            state,
            v$,
            rules,

            
        }
        
    },
    

    methods:{
    submitForm(){
        console.log(this.v$);
     this.v$.$validate()
     if(!this.v$.$error){
        alert('validation Sucessful')
     } else{
        alert("validation failed")
     }
    }
}
}
 
</script>

<style>

.container{
    background-color: rgba(20, 44, 88, 0.822);
   align-items: center;
   padding: 50px ;
   height: 600px;
   
}

.input1, .input2, .input3{
    margin: 20px 20px;
width: 70%;   
align-items: center; 
height: 60px;

}
.radiobutton{
    margin: 20px 20px;
width: 70%;   
align-items: center; 
height: 60px;


    
}
.dropdown{margin: 20px 20px;
width: 70%;   
align-items: center; 
height: 60px;



}

.lable1, .lable2, .lable3{
    color: azure;
    margin-right: 20px;
}
.message{
 
  color: rgb(255, 0, 0);
}
#divbox{
    display: flex;
justify-content: flex-end;

}




</style>
  