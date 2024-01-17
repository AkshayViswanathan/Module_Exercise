<template>
   <h2>Contact Page</h2>
   <ul>

      <li>
         <ProductList />
      </li>
   </ul>


 
</template>

<script>

import ProductList from '../products/productlist.vue'
export default {
  components: {
    ProductList,
  },
};
</script>