<template>

  <v-card
    class="mx-auto"
    max-width="344"

   display="flex" 
    flex-wrap= "wrap" >

    <img
     :src="product.productimage"
      height="190px"
      cover />

    <v-card-title>
     {{ product.productName }}
    </v-card-title>

    <v-card-subtitle>
      Cost: $ {{ product.price}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="green"
        variant="text"
        @click="handleClick" > Click </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'
        "
        @click="show = !show" >  more  </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text >
         {{  product.discription }}
        </v-card-text>
      </div>
    </v-expand-transition>
      

 

  </v-card>

</template>

<!-- <script>
 export default {
  props: {
    // Define the product prop
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    show: false,
  }),

ssetup(props, { emit }) {
    const show = ref(false);

    function sendEvent() {
      emit("callAlert", props.product.productName);
      console.log(props.product.productName);
    }

    return {
      show,emit
      sendEvent,
    };
  },
  emits: ['callAlert'],
};
</script> -->

<script setup>
import { ref } from 'vue';

  const show = ref(false);

 

  const props = defineProps(['product']);
  const emit = defineEmits(['cardClick']);
  const handleClick = () => {
  emit('cardClick', props.product);
  }

</script>
<style>



</style>