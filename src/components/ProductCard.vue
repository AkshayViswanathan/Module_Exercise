<template>

  <v-card
    class="mx-auto"
    max-width="344"

  >

    <img
     :src="product.productimage"
      height="200px"
      cover
    />

    <v-card-title>
     {{ product.productName }}
    </v-card-title>

    <v-card-subtitle>
      {{ product.price}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
        @click="handleClick"
      >
        Add To Cart
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
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
      show,
      sendEvent,
    };
  },
  emits: ['callAlert'],
};
</script> -->

<script setup>

  const props = defineProps(['product']);
  const emit = defineEmits(['cardClick']);
  const handleClick = () => {
  emit('cardClick', props.product);
  }

</script>