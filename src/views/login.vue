<template>
<div>



     <div class="ten wide computer fourteen wide tablet sixteen wide mobile column">
            <h1 class="text-center padding-bottom-lg text-medium">Login</h1>
            <div class="ui negative message" v-show="loginStatus">
              {{ loginStatusMessage }}
            </div>
            <form class="ui form" v-on:submit.prevent="login">
              <div class="field" id="input-username">
                <label>Enter Phone Number / Email</label>
                <div class="ui large input">
                  <input
                    type="text"
                    placeholder="Enter Phone Number / Email"
                    required
                    v-model="username"
                  />
                </div>
              </div>
              <div class="field" id="input-password">
                <label>Enter Password</label>
                <div class="ui large input">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    required
                    v-model="password"
                  />
                </div>
              </div>
              <div class="field">
                <button id="login" type="submit" class="ui large green fluid button">
                  Login
                </button>
              </div>
              <div class="padding-top-md"></div>
              <div class="two middle aligned fields">
                <div class="field">
                  <router-link class="ui basic button" :to="{ name: 'forgot' }"
                    >Forgot password?</router-link
                  >
                </div>
                <div class="field">
                  <router-link :to="{ name: 'signup' }" class="ui fluid primary button"
                    >Sign Up</router-link
                  >
                </div>
              </div>
            </form>
          </div>
</div>
</template>
<script>
export default {
    setup() {
        
    },

computed(){
    function generateOTP() {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
  
document.write("OTP of 6 digits: ")
document.write( generateOTP() );
}
}
</script>
<style>
</style>
