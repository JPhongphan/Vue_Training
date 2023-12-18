<template>
    <div class="main-container">
        <button class="button-add" @click="newItem()">+</button>
        <div class="sub-container">
            <div class="product-container">
                <div class="product-card" v-for="(item, index) in getProducts.products" :key="index">
                    <img :src="item.Img" alt="">
                    <h1>{{item.Name}}</h1>
                    <p>In Stock: {{item.Stock}}</p>
                    <p>{{item.Price}} Bath</p>
                    <div class="button-container">
                        <button class="button-edit" @click="editItem(item)">Edit</button>
                        <button class="button-delete" @click="deleteItem(item)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog width="540" v-model="dialogEdit">
            <v-card>
                <v-card-title>
                <span style="color:black;" class="text-h5">{{ saveMode }}</span>
                </v-card-title>
                <v-card-text>
                
                    <v-row>
                    <v-col cols="12">
                        <v-text-field
                        v-model="postProduct.name"
                        name="name"
                        label="Product Name"
                        id="name"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        v-model="postProduct.price"
                        price="price"
                        label="Price"
                        id="price"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        v-model="postProduct.img"
                        img="img"
                        label="Link Image"
                        id="img"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        v-model="postProduct.stock"
                        stock="stock"
                        label="Stock"
                        id="stock"
                        ></v-text-field>
                    </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>                
                    <v-btn width="250" color="error" variant="text" @click="closeItem()"> Cancel </v-btn>               
                    <v-btn width="250" color="success" variant="text" @click="saveSelect()"> Save </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            getProducts: [],
            id: '',
            dialogEdit: false,
            postProduct: {
                name: '',
                price: '',
                img: '',
                stock: ''
            },
            defaultProduct: {
                name: '',
                price: '',
                img: '',
                stock: ''
            },
        }
    },computed: {
        saveMode() {
            return this.id == '' ? 'New Item' : 'Edit Item'
        }
    },
    methods: {
        fetchProducts() {
            axios.get('http://localhost:3000/products').then((response) => {
                this.getProducts = response.data
                console.log(response.data)
            });
        },
        newItem() {
            this.id = '',
                this.postProduct = { ...this.defaultProduct }
            this.dialogEdit = true
        },
        editItem(item) {
            this.id = item._id;
            this.postProduct = { ...item };
            this.dialogEdit = true;
        },
        closeItem() {
            this.id = '',
                this.postProduct = { ...this.defaultProduct }
            this.dialogEdit = false
        },
        saveSelect() {
            if (this.id != '') {
                this.savePutdata()
            } else this.savePostdata()
        },
        async savePostdata() {
            try {
                const { data } = await this.axios.post('http://localhost:3000/products', this.postProduct)
                console.log(data);
                this.successCreateAlert()
                this.fetchProducts()
                this.closeItem()
            } catch (error) {
                console.log(error);
            }
        },
        async savePutdata() {
            try {
                const { data } = await this.axios.put('http://localhost:3000/products/' + this.id, this.postProduct)
                console.log(data);
                this.successEditAlert()
                this.fetchProducts()
                this.closeItem()
            } catch (error) {
                console.log(error);
            }
        },
        async deleteItem(item) {
            try {
                const { data } = await this.axios.delete('http://localhost:3000/products/' + item._id)
                console.log(data);
                this.fetchProducts()
                this.closeItem()
                this.successDeleteAlert()
            } catch (error) {
                console.log(error);
            }
        },
        successCreateAlert(){
            Swal.fire({
                position:'center',
                title: 'Created Success!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        },
        successDeleteAlert(){
            Swal.fire({
                position:'center',
                title: 'Deleted Success!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        },
        successEditAlert(){
            Swal.fire({
                position:'center',
                title: 'Edited Success!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        },

    },
    created() {
        this.fetchProducts();
    }
}
</script>
<style scoped>
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
    .button-container{
        position: absolute;
        bottom: 10px;
        left: 0;
        display: flex; 
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .button-edit{
        width: 45%;
        height: 30px;
        background-color: rgb(174, 84, 11);
        border-radius: 5px;
    }
    .button-delete{
        width: 45%;
        height: 30px;
        background-color: rgb(113, 16, 16);
        border-radius: 5px;
    }
    .button-add{
        position: fixed;
        bottom: 5%;
        right: 1%;
        z-index: 999;
        background-color: rgb(26, 108, 17);
        height: auto;
        width: 60px;
        font-size: 40px;
        border-radius: 200px;
    }
</style>