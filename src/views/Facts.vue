<template>
    <div class="joke-container">
        <div class="box">
            <div class="joke-division">

                <span class="type">Type : {{ this.type }} fact || year : {{ this.year }} </span>
                <h3 class="question">{{ this.caption }}</h3>

                <span v-if="this.isloading">Loading...</span>
                <div class="btn">
                    <button class="nextbtn" @click="bringData">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script >
import { UserService } from "../services/services"


export default {
    name: "Facts",
    data: function () { //sate data
        return {
            caption: '',
            year: "",
            type: '',
            isloading: ''
        };
    },
    props: { //get the value through the props from another component

    },
    methods: { // functions for the component
        bringData: async function () {

            try {
                let data = await UserService.getFact();
                this.isloading = true;
                this.caption = data.data.text;
                this.year = data.data.year;
                this.type = data.data.type;
                this.isloading = false;

            } catch (error) {
                console.log("catch" + error);
            }
        }

    },
    created: async function () {
        // if (window.location.pathname == "/facts") {
        //     this.path = true;
        // }
        try {
            this.isloading = true;
            let data = await UserService.getFact();
            this.caption = data.data.text;
            this.year = data.data.year;
            this.type = data.data.type;
            this.isloading = false;

        } catch (error) {
            console.log("catch" + error);
        }
    }
}
</script>
  
  
<style>

</style>