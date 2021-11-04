<template>
  <div class="hello">
    <!-- <h1>Vue Counter: {{ counter }}</h1>
    <button @click="handleIncrement">Increment</button>
    <button @click="handleDecrement">Decrement</button> -->
    <div class="shop-container">
      <p id="shop-text">Carrinho:</p>
      <p id="shop-counter">{{ shopCounter }}</p>
    </div>
  </div>
</template>

<script>
import { eventListeners } from '../../react-counter/events.js';

export default {
  name: 'HelloWorld',
  methods: {
    handleIncrement() {
      this.counter += 1;
    },
    handleDecrement() {
      this.counter -= 1;
    },
    handleAddProduct() {
      this.shopCounter += 1;
    },
    handleRemoveProduct() {
      this.shopCounter -= 1;
    }
  },
  mounted() {
      // window.addEventListener('addProduct', e => {
      // this.handleAddProduct();
    // });
    // window.addEventListener('removeProduct', e => {
      // this.handleRemoveProduct();
    // });
    eventListeners.addProduct(this.shopCounter);
    eventListeners.removeProduct(this.shopCounter);
  },
  unmounted() {
      window.removeEventListener('addProduct', e => {
      console.log('aaaaaaa');
      this.handleAddProduct;
    });
    window.removeEventListener('removeProduct', e => {
      console.log('bbbbbbbb');
      handleRemoveProduct;
    });
  },
  data() {
    return { counter: 0, shopCounter: 0 }
  }
}
</script>

<style>
.shop-container {
  display: flex;
  justify-content: center;
  background-color: #42b883;
}

#shop-counter {
  padding-left: 2vh;
}

#shop-text {
  color: #35495e;
}
</style>
