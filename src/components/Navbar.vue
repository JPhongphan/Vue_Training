<template>
    <div class="navbar-style">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Google_Play_Games_logo_%282023%29.svg/1833px-Google_Play_Games_logo_%282023%29.svg.png">
        <router-link style="text-decoration: none;" to="/products">
            <h1 class="name-logo">GAME STORE</h1>
        </router-link>
        <router-link class="cart-btn" to="/orders">
            <button>My Cart</button>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .navbar-style{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 999;
        padding: 0px 15px;
        width: 100%;
        height: auto;
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.368);
    }
    .logo{
        margin: 10px;
        width: 50px;
    }
    .name-logo{
        color: black;
        font-size: 30px;
    }
    .cart-btn{
        width: 8%;
        padding: 10px;
        background-color: rgb(66, 190, 66);
        border-radius: 30px;
        color: white !important;
    }
</style>