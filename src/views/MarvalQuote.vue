<template>
    <div class="joke-container">
        <div class="box">
            <div class="joke-division">

                <span class="type">Movie : {{ this.type }} <span v-if="this.year"> || Speaker : {{ this.year
                }}</span>
                </span>
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
    name: "Marval",
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
            this.isloading = true;
            this.caption = '';
            this.year = '';
            this.type = '';
            try {
                let data = await UserService.getMarvalQuote();
                this.isloading = true;
                this.caption = data.data.Quote;
                this.year = data.data.Speaker;
                this.type = data.data.Title;
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
            let data = await UserService.getMarvalQuote();
            this.isloading = true;
            this.caption = data.data.Quote;
            this.year = data.data.Speaker;
            this.type = data.data.Title;
            this.isloading = false;

        } catch (error) {
            console.log("catch" + error);
        }
    }
}
</script>
  
  
<style>

</style>