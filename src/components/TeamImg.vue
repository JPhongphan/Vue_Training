<template>
    <div class="container-img">
        <img data-aos="fade-up" data-aos-duration="2000" src="../assets/yao.png"/>
        <img data-aos="fade-up" data-aos-duration="2300" :src="img_3"/>
        <img data-aos="fade-up" data-aos-duration="2600" :src="img_4"/>
        <img data-aos="fade-up" data-aos-duration="2900" src="https://img2.pic.in.th/pic/Furina_Icon.png"/>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                img_3:'https://img2.pic.in.th/pic/Xingqiu_Icon.png',
                img_4: require('../assets/Raiden.png')
            }
        }
    }
</script>

<style>
    .container-img{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    .container-img img{
        width: 120px;
        height: 120px;
        border-radius: 100px;
        /* border: 1px solid black; */
        box-shadow: 0px 0.5px 4px rgba(197, 197, 197, 0.573);
    }
</style>