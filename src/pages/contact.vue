<template>
   <h2>Contact Page</h2>
   <Popup />
   <ul>

      <li>
         <ProductList />
      </li>
   </ul>


 
</template>

<script>
// import Popup from "../components/DialogBox.vue"

import ProductList from '../products/productlist.vue'
export default {
  components: {
    ProductList,
    
    
  },
};
</script>