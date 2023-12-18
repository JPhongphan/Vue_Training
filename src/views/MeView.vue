
<template>
    <div class="main-container main-container-style">
      <div class="sub-container sub-container-style">
        <div data-aos="fade-right" data-aos-duration="1000" class="text-section">
          <h2 style="font-weight: 600; font-size: 18px;">Hello my name is Jame</h2>
          <h1>Phongphan Prangmas</h1>
          <p style="font-weight: lighter; font-size: 18px; margin-bottom: 10px;">Computer Science Naresuan University</p>
          <p style="font-weight: lighter; font-size: 18px;"><span style="color: rgb(30, 123, 30);">Like :</span> Front-End | <span style="color: rgb(123, 30, 30);">Don't Like :</span> Back-End</p>
          <div class="hobie-button">
            <div class="hobie-button-chlid">Game</div>
            <div class="hobie-button-chlid">Movie</div>
            <div class="hobie-button-chlid">Music</div>
          </div>
          <p style="display: flex; justify-content: center; font-weight: 600; font-size: 25px; margin-top: 30px;">"Creative Thinking"</p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" class="img-section">
          <img class="img-profile" src="../assets/img-profile.6ac9636c.png" alt="">
        </div>
      </div>
      <TeamImg />
    </div>
</template>

<script>
  import TeamImg from '../components/TeamImg.vue'
  export default{
    components:{
      TeamImg
    }
  }
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,400;1,100;1,200&display=swap" rel="stylesheet');
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet');
 @import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,600;1,100&display=swap" rel="stylesheet');
  *{
    font-family: 'Kanit', sans-serif;
   /* background-color: black; */
   /* color: white; */
  }
  span{
    font-weight: 600;
  }
  .img-profile{
    width: 100%;
  }
  .main-container{
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
  }
  .sub-container{
    padding: 20px;
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .main-container-style{
    /* height: auto;
    padding: 10px;
    border: 1px solid black; */
  }.sub-container-style{
    height: auto;
    padding: 20px 0px;
    /* border: 1px solid rgb(255, 255, 255);
    box-shadow: 0px 2px 4px rgb(213, 213, 213); */
    border-radius: 10px;
  }
  .img-section{
    padding: 10px;
    width: 25%;
    display: flex;
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .text-section{
    padding: 10px;
    width: 100%;
  }
  .hobie-button{
    align-items: center;
    /* justify-content: center; */
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .hobie-button-chlid{
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
    transition-duration: 0.5s;
  }
  .hobie-button-chlid:hover{
    color: black;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(47, 47, 47);
    transform: translateY(0px);
    transition-duration: 0.5s;
    box-shadow: 0px 0px 0px rgb(12, 12, 12);
  }
</style>