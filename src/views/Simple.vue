<template>
    <div >
        <v-row>
            <v-col col="12">
                <Hello :name="name" 
                    @callAlert="callAlert"
                    @callItem = "callItem"
                />
            </v-col>
            <v-col cols="12">
                <v-btn color="success" @click="conditionName = !conditionName">TRUE</v-btn>
                <v-btn color="success" @click="callAlert()">Alert</v-btn>
                <v-text-field
                    v-model = "alerValue"
                    name="alerValue"
                    label="input text alert"
                    id="alerValue"
                ></v-text-field>
                <v-btn color="success" @click="callItem(alerValue)">text alert</v-btn>
                <!-- <h1 v-if="conditionName">{{ name }}</h1> -->
            </v-col>
            <v-col cols="4" v-for="(item, index) in items" :key="index">
                <v-card>
                    <v-img :src="item.img"/>
                    <v-card-title primary-title>
                        {{ item.name }}
                    </v-card-title>
                    <v-btn color="success" @click="callItem(item.name)">TRUE</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { EventBus } from '@/EventBus'
import Hello from '../components/HelloWorld.vue'
    export default{
        components:{
            Hello
        },
        mounted(){
            EventBus.$on('callAlertService', this.callAlert)
            EventBus.$on('callItemService', this.callItem)
        },
        data(){
            return{
                name:"Phongphan Prangmas",
                alerValue:'zx',
                conditionName: true,
                items: [
                    {
                        name:'Yaoyao',
                        img:require('../assets/yao.png'),

                    },
                    {
                        name:'Furina',
                        img:'https://img2.pic.in.th/pic/Furina_Icon.png',

                    },
                    {
                        name:'Xingqui',
                        img:'https://img2.pic.in.th/pic/Xingqiu_Icon.png',

                    },
            
                ]
            }
        },
        methods:{
            callAlert(){
                alert('Halooo')
            },
            callItem(item){
                alert("Name: " + item)
            }
        }
    }
</script>