<template>
  <div class="joke-container">
    <div class="box">
      <div class="joke-division">
        <span class="type">Type : {{ this.categories }} </span>
        <h3 class="question">{{ this.question }}</h3>
        <h4 class="punchline">
          {{ this.punchline }} </h4>
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
  name: "RandomJoke",
  data: function () { //sate data
    return {
      categories: "",
      question: "",
      punchline: ""
    };
  },
  props: { //get the value through the props from another component

  },
  methods: { // functions for the component
    bringData: async function () {
      try {
        let joke = await UserService.fetchdata()
        const randomNumber = Math.floor(Math.random() * 376) + 1
        this.punchline = joke.data[randomNumber].punchline;
        this.question = joke.data[randomNumber].setup;
        this.categories = joke.data[randomNumber].type;
      } catch (error) {
        console.log("catch" + error);
      }
    }

  },
  created: async function () {
    try {
      let joke = await UserService.fetchdata()
      const randomNumber = Math.floor(Math.random() * 376) + 1
      this.punchline = joke.data[randomNumber].punchline;
      this.question = joke.data[randomNumber].setup;
      this.categories = joke.data[randomNumber].type;
    } catch (error) {
      console.log("catch" + error);
    }
  }
};
</script>


<style>
.joke-container {
  display: flex;
  height: calc(100vh - 100px);
  justify-content: center;
  align-items: center;
  background: #F5F5F5;
}

.box {
  width: 861px;
  height: 468px;
  background: #FFFFFF;
  border: 1px solid rgba(239, 239, 239, 0.44);
  box-shadow: 34px 72px 32px rgba(194, 194, 194, 0.02), 19px 40px 27px rgba(194, 194, 194, 0.08), 9px 18px 20px rgba(194, 194, 194, 0.13), 2px 4px 11px rgba(194, 194, 194, 0.15), 0px 0px 0px rgba(194, 194, 194, 0.15);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.type {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */


  color: #A9A9A9;

}

.question {

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 48px;
  /* identical to box height */
  text-align: center;
  width: 550px;
  color: #6A6A6A;

}

.punchline {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  /* identical to box height */
  text-align: center;
  color: #000000;
}

.nextbtn {
  align-items: center;
  width: 280px;
  height: 46px;
  text-align: center;
  background: #66bfbfdf;
  border-radius: 5px;
  border-color: transparent;
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.nextbtn:hover {
  background: #66BFBF;
  letter-spacing: 2px;
}

.btn {

  display: flex;
  justify-content: center;
}
</style>