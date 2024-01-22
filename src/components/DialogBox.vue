<template>
<!-- <button @click="popupbutton"> on click</button> -->
<el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
  class="dialogBoc">
  <div class="input1">
    
    <label for="email" class="lable1">Enter email</label>
    <el-input type="text" 
                
                  placeholder="@gmail.com" />
                 

</div> 

<div class="input2">
      <label class="lable2"> password</label>

      <el-input
  
           type="password"
             placeholder="password"
               show-password/>
</div>

<div class="input2">
      <label class="lable2"> Confirm password</label>

      <el-input
           type="password"
             placeholder="confirm password"
               show-password/>
           

</div>


<div id="divbox">
<div style="margin-top: 20px" class="radiobutton">
<el-radio-group >
<el-radio-button label="Female" >Female</el-radio-button>
<el-radio-button label="Male" > Male</el-radio-button>
</el-radio-group>

</div>
</div>

<div class="dropdown">  

<el-select clearable placeholder="Select">
<el-option
v-for="item in options"
:key="item.value"
:label="item.label"
:value="item.value"
/> 
</el-select>


</el-dialog>


</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const dialogVisible = ref(false); // or ref(false) if you want it initially hidden
    // ... other setup logic

// const popupbutton =( )=>{
// dialogVisible.value = true;
// }


    return {
      dialogVisible,
      // popupbutton,
      // ... other values to expose
    };
  },
  // ... other component options
}
</script>

<style>
.dialogBoc{

    background-color: blue;
    color: rgb(255, 255, 255);
}
</style>
