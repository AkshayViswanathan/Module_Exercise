<!-- <template>
    <Popup  @cardClick="handleClick"/>
  
      <div class="container">
        <div id="formtext" > 
    
          <h2 > Form Validation</h2>
        </div>
    
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
               <label class="lable2"> Confirm password</label>
      
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
        <el-radio-button label="Female" >Female</el-radio-button>
        <el-radio-button label="Male" > Male</el-radio-button>
      </el-radio-group>
      <span class="message" v-if="v$.radio.$error">{{ v$.radio.$errors[0].$message }}</span>
    </div>
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
    
      <div class="table"> 
    
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="email" label="email" width="180" />
          <el-table-column prop="password" label="password" width="180" />
          <el-table-column prop="country" label="country" />
          <el-table-column prop="radio" label="radio" />
  
          <el-table-column >
          <ElButton size="small" type="warning" @click="editRow(row.value)" > Edit </ElButton>
          <ElButton size="small" type="danger"  @click="" > Delete </ElButton>
          
      
        </el-table-column>
        </el-table>
    
      </div>
    
    
      </div>
    </div>
      
      
      </template>
    
    
    <script setup>
    import { useVuelidate } from '@vuelidate/core';
    import { required, email, sameAs, minLength } from '@vuelidate/validators';
    import { ref, reactive, computed } from 'vue';
    import Popup from './DialogBox.vue'
   
  
    //edit button onclick function
  //   const editRow = (row) => {
   import Popup from "../components/DialogBox.vue"
  //   state.email = row.email;
  //   state.password = row.password; 
  //   state.value = row.country;
  //   state.radio = row.radio;
  
  //   // Open the dialogbox
  //   dialogVisible.value = true;
  // };
  
  
  
        // Define your data properties using ref and reactive
        const state = reactive({
          email: "",
          password: "",
          confirmPassword: "",
          value: "",
          radio: "Female",
        });
    
        const options = [
          { value: 'India', label: 'India' },
          { value: 'USA', label: 'USA' },
          { value: 'China', label: 'China' },
          { value: 'UAE', label: 'UAE' },
          { value: 'other', label: 'other' },
        ];
    
        const radioOptions = ["Female", "Male"];
    
        // Define your validation rules using computed
        const rules = computed(() => ({
          email: { required, email },
          password: { required, minLength: minLength(6) },
          confirmPassword: { required, sameAs: sameAs(state.password) },
          value: { required },
          radio: { required },
        }));
    
        // Create a v$ object using useVuelidate
        const v$ = useVuelidate(rules, state);
    
        // Define the table data using ref
        const tableData = ref([]);
    
        // Define a function to handle form submission
        const submitForm = async () => {
          let result = await v$.value.$validate();
    console.log(result);
          if (result) {
            tableData.value.push({
              email: state.email,
              password: state.password,
              radio: state.radio,
              country: state.value,
            });
            
            // Reset form state and validation
            state.email = "";
            state.password = "";
            state.radio = "Female";
            state.value = "";
            state.confirmPassword = "";
    
            v$.value.$reset();
  
            function handleClick(){
              return 
            }
          }
        };
    
        // Return the properties and methods for use in the template
        return {
          state,
          options,
          radioOptions,
          v$,
          tableData,
          submitForm,
          // editRow
        
  
        };
      
    
    
    
    </script>
  
    
  
  <style>
  
  .container{
    background-color: rgba(20, 44, 88, 0.822);
   align-items: center;
   padding: 50px ;
   height: 1000px;
   color: aliceblue;
   font-style: italic;
  
   
  }
  
  .input1, .input2, .input3{
    margin: 20px 20px;
  width: 70%;   
  
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
  
  .table{
    margin-top: 20px;
    color: black;
  }
  
  
  
  
  </style>
  
  
     -->