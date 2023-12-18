<template lang="">
    <div class="main-container">
        <h1 v-if="getOrders.orders.length" class="numorders">{{ getOrders.orders ? getOrders.orders.length : '0'}}</h1>
        <div class="sub-container">
            <div class="product-container">
                <div class="product-card" v-for="(item, index) in getProducts.products" :key="index">
                    <img :src="item.Img" alt="">
                    <h1>{{item.Name}}</h1>
                    <p>In Stock: {{item.Stock}}</p>
                    <p>{{item.Price}} Bath</p>
                    <button class="button-style" @click="addCart(item._id)">ADD CART</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            getProducts:[],
            getOrders:[],
            // totalOrders:'',
            id:'',
            addtoCart:{
                ordername: 'Username',
                quantity: 1
            }
        }
    },
    methods:{
        fetchProducts(){
                axios.get('http://localhost:3000/products').then((response)=>{
                this.getProducts = response.data
                console.log(response.data)
            });
        },
        fetchOrders(){
            axios.get('http://localhost:3000/orders').then((response)=>{
                this.getOrders = response.data
                // this.totalOrders = getOrders.length
                console.log(response.data)
            });
        },
        async addCart(id){
            try {
                const {data} = await this.axios.post('http://localhost:3000/products/'+ id +'/orders', this.addtoCart)
                console.log(data);
                this.fetchOrders();
                this.successAlert()
                // alert(id)
            } catch (error) {
                console.log(error);
            }
        },
        successAlert(){
            Swal.fire({
                position:'center',
                title: 'Success!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        }
    },
    created(){
        this.fetchProducts();
    },
    mounted(){
        this.fetchOrders();
    }
}
</script>
<style>
    *{
        color: white;
        font-size: 15px;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    p{
        margin:0px !important;
        padding-top: 10px;
    }
    .main-container{
        display:flex;
        max-width: 100%;
        min-height: 100vh;
        height: auto;
        background: rgb(178, 175, 226);
        /* background: linear-gradient(180deg, rgba(2,0,36,1) 62%, rgba(0,0,59,1) 100%); */
        padding: 20px;
    }
    .sub-container{
        display:flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        flex-wrap: wrap;
        /* background-color: rgb(155, 155, 255); */
        padding: 20px;
    }
    .product-container{
        justify-content: start;
        width: 80%;
        height: 100%;
        display:flex;
        flex-direction: row;
        /* background-color: rgb(125, 255, 99); */
        padding: 20px 0px 20px 125px;
        gap: 20px;
        flex-wrap: wrap;
    }
    .product-card{
        position: relative;
        padding: 5px;
        width: 28%;
        height: 280px;
        background-color: rgb(3, 5, 21);
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.432);
    }
    .product-card img{
        height: 130px;
        margin-bottom: 5px;
    }
    .button-style{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 35px;
        background-color: rgb(6, 9, 32);
    }
    .numorders{
        position: absolute;
        top: -68px;
        right:15px;
        z-index: 999;
        text-align: center;
        background-color: rgb(53, 64, 211);
        width: 25px;
        height: 25px;
        border-radius: 200px;
        font-size: 15px;
    }
</style>