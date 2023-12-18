<template lang="">
    <div>
        <div class="card-product" v-for="(item, index) in getProducts.products" :key="index">
            <img :src="item.Img" alt="">
            <p>{{item.Name}}</p>
            <p>{{item.Stock}}</p>
            <p>Price: {{item.Price}}</p>
            <div class="button">
                <button @click="deleteItem(item)"><p style="margin:0px">delete</p></button>
                <button @click="editItem(item)"><p style="margin:0px">edit</p></button>
            </div>
        </div>
        <button class="sombot" @click="newItem()"><p style="margin:0px">New Item</p></button>
        
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
    },
    computed: {
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
                alert('success')
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
                alert('success')
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
                alert('success')
                this.fetchProducts()
                this.closeItem()
            } catch (error) {
                console.log(error);
            }
        }

    },
    created() {
        this.fetchProducts();
    }
}
</script>
<style>
.container {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.card-product {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.279);
    display: flex;
    flex-direction: column;
    position: relative;
    width: 20%;
    height: auto;
    padding: 20px;
    border-radius: 5px;
    gap: 5px;
}

.card-product img {
    width: 100%;
}

.button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5%;
}

.button button {
    width: 45%;
    border-radius: 5px;
    height: 30px;
    color: white;
    background-color: black;
}

.sombot {
    background-color: red;
}</style>