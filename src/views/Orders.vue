<template>
    <div>
        <div class="main-container">
            <h1 v-if="getOrders.orders.length" class="numorders">{{ getOrders.orders ? getOrders.orders.length : '0'}}</h1>
            <div class="detail-orders">
                <h1>Total Price: {{ sumTotal }} Bath</h1>
                <h1>Orders: {{ getOrders.orders.length }} </h1>
            </div>
        <div class="sub-container">
            <div class="order-container">
                <div class="order-card" v-for="(item, index) in getOrders.orders" :key="index">
                    <div>
                        <p>Order ID: {{item._id}}</p>
                        <p>Order By: {{item.Ordername}}</p>
                        <p>Product: {{item.Products[0].Product_name}}</p>
                    </div>
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <p>Quantity: {{item.Quantity}}</p>
                        <p>Price: {{item.Total}} Bath</p>
                    </div>
                    <button class="orderDelete-buttom" @click="deleteOrder(item._id)">Delete</button>
                </div>
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
            getOrders:[],
            totalPrice:'',
        }
    },
    methods:{
        fetchOrders(){
            axios.get('http://localhost:3000/orders').then((response)=>{
                this.getOrders = response.data
                // this.totalOrders = getOrders.length
                console.log(response.data)
            });
        },
        async deleteOrder(id){
            try {
                const {data} = await this.axios.delete('http://localhost:3000/orders/'+id)
                console.log(data);
                this.successAlert();
                this.fetchOrders()
            } catch (error) {
                console.log(error);
            }
        },
        successAlert(){
            Swal.fire({
                position:'center',
                title: 'Delete Success!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        },
        calculateSumTotal() {
            let totalPrice = 0;
            for (let i = 0; i < this.getOrders.orders.length; i++) {
            totalPrice += this.getOrders.orders[i].Total;
            }
            return totalPrice;
        }
    },
    computed:{
        sumTotal(){
            return this.calculateSumTotal();
        }
    },
    created(){
        this.fetchOrders();
    }
}
</script>
<style scoped>
    .order-container{
        justify-content: start;
        width: 80%;
        height: 100%;
        display:flex;
        flex-direction: column;
        /* background-color: rgb(125, 255, 99); */
        padding: 20px;
        gap: 20px;
        flex-wrap: wrap;
    }
    .order-card{
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-radius: 20px;
        position: relative;
        padding: 20px;
        width: 100%;
        height: auto;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.233);
    }
    .order-card p{
        color: black;
    }
    .orderDelete-buttom{
        width: 20%; 
        background-color: rgb(230, 23, 23);
        border-radius: 10px;
    }
    .detail-orders{
        padding: 10px 10px 10px 19px;
        gap: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: white;
        height: 60px;
        width: 29%;
        border-radius: 10px;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.347);
    }
    .detail-orders h1{
        color: black;
    }
</style>