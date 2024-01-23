<template>


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

<el-select v-model="state.country" clearable placeholder="Select">
<el-option
  v-for="item in options"
  :key="item.value"
  :label="item.label"
  :value="item.value"
  /> 
</el-select>


<el-button type="success"  @click="submitForm">submit</el-button>


  <div class="table"> 
    
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="email" label="email" width="180" />
      <el-table-column prop="password" label="password" width="180" />
      <el-table-column prop="country" label="country" />
      <el-table-column prop="radio" label="radio" />

      <el-table-column >
        <template #default="{ row }"> 
      <el-button size="small" type="warning" @click="editRow(row)" > Edit </el-button>
      <el-button size="small" type="danger"  @click="removeRow(row)" > Delete </el-button>
      
    </template>
    </el-table-column>
    </el-table>

  </div>

  <el-dialog

      v-model="dialogVisible"
        title="Tips"
          width="30%"
           class="dialogBoc">
            <div class="input1">
  
           <label for="email" class="lable1">Enter email</label>

           <el-input type="text" 
                     placeholder="@gmail.com" 
                     v-model="editFormData.email"/>
                                                  </div> 

<div class="input2">
    <label class="lable2"> password</label>

      <el-input
         type="password"
           placeholder="password"
             show-password
             v-model="editFormData.password"/>
</div>


<div id="divbox">
    <div style="margin-top: 20px" class="radiobutton">
        <el-radio-group v-model="editFormData.radio" >
        <el-radio-button label="Female" >Female</el-radio-button>
        <el-radio-button label="Male" > Male</el-radio-button>
        </el-radio-group>

    </div>
</div>

 <div class="dropdown">

    <el-select clearable placeholder="Select"  v-model="editFormData.country" >
     <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"  
       /> 
         </el-select>
 </div>

     <el-form-item>
          <el-button type="primary" @click="saveChanges">Save Changes</el-button>
          <el-button @click="closeEditModal">Cancel</el-button>
     </el-form-item>

</el-dialog>

 

  </div>
</div>
  
  
  </template>


<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength } from '@vuelidate/validators';
import { ref, reactive, computed } from 'vue';



const tableData = ref([]);

const dialogVisible = ref(false);
const editFormData = ref({});
 // Clear the form data and hide the edit modal
      editFormData.value = {};
      dialogVisible.value = false;
      

const closeEditModal = () => {
    editFormData.value = {};
    dialogVisible.value = false;
  };


  const editRow = (row) => {  
    editFormData.value = { ...row };
    dialogVisible.value = true;
    console.log(editFormData.value);
  };
  
  const removeRow = (row) => {
    const index = tableData.value.indexOf(row);
    tableData.value.splice(index, 1);
  };
  
  const saveChanges = () => {
    // Find the index of the row being edited by its ID
    const index = tableData.value.findIndex(row => row.id === editFormData.value.id);
  
    // Replace the existing row with the changes
    if (index !== -1) {
      // Update the properties of the found row
      tableData.value[index].email = editFormData.value.email;
      tableData.value[index].password = editFormData.value.password;
      tableData.value[index].gender = editFormData.value.radio;
      tableData.value[index].country = editFormData.value.country;
    }
    
   
  };
  
  function generateRandomId() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const randomString = randomNumber.toString();
    const timestamp = new Date().getTime();
    const randomId = `${timestamp}${randomString}`;
    return randomId;
  }


    // Define your data properties using ref and reactive
    const state = reactive({
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
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
      country: { required },
      radio: { required },
    }));



    // Create a v$ object using useVuelidate
    const v$ = useVuelidate(rules, state);

  


    // Define a function to handle form submission
    const submitForm = async () => {
      let result = await v$.value.$validate();
                                              

      if (result) {
          tableData.value.push({
          id: generateRandomId(),
          email: state.email,
          password: state.password,
          radio: state.radio,
          country: state.country,
        });
        
    
    
        // Reset form state and validation
        state.email = "";
        state.password = "";
        state.radio = "Female";
        state.country = "";
        state.confirmPassword = "";

        v$.value.$reset();

       
       

};



      }

    

   
  
  



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

</style>