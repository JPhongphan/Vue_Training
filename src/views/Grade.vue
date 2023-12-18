<template lang="">
    <div class="container">
        <div class="subcontainer">
            <h1>Grade Calculator</h1>
            <div class="hidefild">
                <p style="font-weight:bolder; color:green" v-if="alertText">{{alertText}}</p>
            </div>
            <input v-model="gradePoint" placeholder="Enter your point">
            <button class="submit" @click="callAlert(gradePoint)">Submit</button>
        </div>
        <p class="errortext-style" v-if="errorText">{{errorText}}</p>
        <img v-if="errorText" class="img-alert" src="https://media.tenor.com/QOzDNKfYPbIAAAAi/paimon-genshin-impact.gif" alt="">
        <img v-if="alertText == 'Grade A : You so handsome!!'" class="img-cong" src="https://64.media.tumblr.com/afb7cfe52100cf84b35a459ac56c4857/a73fa2b7646e891d-10/s500x750/de9d70aedca0b70229ea7812f705a2605d185192.png" alt="">
        <img v-if="alertText == 'Grade B : Chill Chill'" class="img-cong" style="transform:scaleX(-1)" src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-1/sticker_13.png?647046bbdaac1ca3728c9de02ad210dc&d=200x200" alt="">
        <img v-if="alertText == 'Grade C : It ok...'" class="img-cong" src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-pack-02/sticker_2.png?a0307a4117e8a37e0b3e05c5cca11627&d=200x200" alt="">
        <img v-if="alertText == 'Grade D : Keep going'" class="img-cong" style="transform:scaleX(-1)" src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-paimon-1/sticker_2.png?647046bbdaac1ca3728c9de02ad210dc&d=200x200" alt="">
        <img v-if="alertText == 'Grade F : Ah!! Focus now'" class="img-cong"  src="https://media.tenor.com/RUIHKOchBmYAAAAi/paimon-genshin-impact-paimon.gif" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
            gradePoint:'',
            alertText:'',
            errorText:''
        }
    },
    methods:{
        callAlert(point){
            if(point < 0 || point > 100 || point == ''){
                this.errorText = "''Please enter score between 0 - 100''"
                this.alertText = false
            }
            else if(point >= 80 && point <= 100){
                this.alertText = "Grade A : You so handsome!!"
                this.errorText = false
            }
            else if(point >= 70 && point < 80){
                this.alertText = "Grade B : Chill Chill"
                this.errorText = false
            }
            else if(point >= 60 && point < 70){
                this.alertText = "Grade C : It ok..."
                this.errorText = false
            }
            else if(point >= 50 && point < 60){
                this.alertText = "Grade D : Keep going"
                this.errorText = false
            }
            else if(point >= 0 && point < 50){
                this.alertText = "Grade F : Ah!! Focus now"
                this.errorText = false
            }
            else if(typeof point != Number){
                this.errorText = " ''Plase enter number score'' "
                this.alertText = false
            }
        }
    }
}
</script>
<!-- <style>
    *{
        box-sizing: border-box;
        padding: 0;
        position: relative;
    }
    .img-cong{
        position: absolute;
        left: 800px;
        width: 250px;
        height: 250px;
    }
    .errortext-style{
        color: brown;
        font-weight: bolder;
        position: absolute;
        bottom: 120px;
        right: 530px;
    }
    .img-alert{
        position: absolute;
        bottom: 70px;
        right: 380px;
        width: 150px;
        height: 150px;
    }
    .v-application p{
        margin: 0;
    }
    .container{
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        display:flex;
    }
    .subcontainer{
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.453);
        border-radius: 20px;
        padding: 30px;
    }
    .subcontainer input{
        /* border: 1px solid black; */
        box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.453);
        border-radius: 5px;
        margin: 20px 0;
        height: 50px;
        width: 100%;
        text-align: center;
    }
    .submit{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(47, 47, 47);
        color: white;
        font-weight: 300;
        width: 100%;
        height: 50px;
        transform: translateY(-5px);
        border: 2px solid rgb(47, 47, 47);
        box-shadow: 0px 3px 0px rgb(12, 12, 12);
        border-radius: 5px;
        transition-duration: 0.2s;
    }
    .submit:active{
        color: black;
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(47, 47, 47);
        transform: translateY(0px);
        transition-duration: 0.2s;
        box-shadow: 0px 0px 0px rgb(12, 12, 12);
    }
    .hidefild{
        text-align: center;
        margin-top: 5px;
        width: 100%;
        height: 25px;
    }
</style> -->