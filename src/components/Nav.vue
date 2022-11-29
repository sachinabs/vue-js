<template>


    <div class="container">
        <div class="logoBox">
            <span class="Logo">Vue js Api Call</span>
        </div>
        <div class="links">

            <router-link class="nav" to="/">Random Joke</router-link>
            <router-link class="nav" to="/facts">Number Facts</router-link>
            <router-link class="nav" to="/marval">Marvel Quote</router-link>

        </div>
    </div>


</template>
  
<script module >
// event handiling 
export default {
    name: "Mynav",
    data: function () { //sate data
        return {};
    },
    props: { //get the value through the props from another component

    },
    methods: { // functions for the component

    },
};
</script>
  
<style>
.container {
    display: flex;
    height: 100px;
    background: #66BFBF;
    align-items: center;
}


.logoBox {

    margin-left: 102px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;

}

.links {
    margin: auto;
    margin-right: 155px;

}

.nav {
    margin-left: 59px;
    text-decoration: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height */
    color: #D7D7D7;
}



.nav:focus {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height */


    color: #FFFFFF;
}
</style>