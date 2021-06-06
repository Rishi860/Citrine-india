<template>
  <v-simple-table class="ml-10 mt-10 ">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left" v-for="item in headers" :key = "item.text">
            {{item.text}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in products"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <v-container>
            <input type="number" v-model="item.cart.count">
          </v-container>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import CatalogServices from '../services/catalogServices'
export default {
  data () {
      return {
        headers: [
          {
            text: 'Product',
            align: 'start',
            sortable: false,
            value: 'name',
            width : '500px',
          },
          { text: 'Price', value: 'price' , sortable:false },
          { text: 'Quantity', value: 'quantity' , sortable:false },
          { text: 'Total', value: 'total' , sortable:false},
        ],
        products: [
          {
            name: 'Item1',
            price: 100
          },
          {
            name : 'Item2',
            price : 200
          },
          {
            name : 'Item3',
            price : 300
          },
          {
            name : 'Item4',
            price : 400
          },
          {
            name : 'Item5',
            price : 500
          },
        ],
      }
    },
    async mounted(){
        const id =  this.$store.state.user._id;
        this.products = await CatalogServices.cart(id);
    },
    methods :{
      changequant(operator , pos){
        console.log(pos);
        // const field = document.querySelector('#quantity-form');
        // let x = parseInt(field[pos]);
        // if(x === 0 && operator.char === '-') return;
        // if(operator.char === '-') x-=1;
        // else x+=1;
        // field[pos].value = x;
      }
    }
  }
</script>

<style>

</style>
