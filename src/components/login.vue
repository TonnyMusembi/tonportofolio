<template>
  <div class="l-onboard">
    <div class="l-onboard-center">
      <div class="ui centered grid">
        <template>
          <div>
            <b-form-datepicker
              v-model="value"
              :min="min"
              :max="max"
              locale="en"
            ></b-form-datepicker>
          </div>
        </template>

        <div class="row">
          <div class="sixteen wide computer only column">
            <div class="padding-xl"></div>
          </div>
          <div class="sixteen wide center aligned column padding-bottom-md">
            <!-- <router-link class="padding-bottom-md" to="/"><img src="../assets/logo.png" height="40" /></router-link> -->
          </div>
          <div
            class="twelve wide computer fourteen wide tablet sixteen wide mobile column"
          >
            <h1 class="padding-bottom-lg text-medium text-center">Forgot Password</h1>
            <div class="ui negative message" v-show="resetStatus">
              {{ resetStatusMessage }}
            </div>
            <form class="ui form" v-on:submit.prevent="forgotPassword">
              <div class="field">
                <label>Enter your phone number</label>
                <div class="ui large input">
                  <input
                    type="text"
                    placeholder="07xxxxxxxx"
                    required
                    v-model="username"
                  />
                </div>
              </div>
              <div class="field">
                <button
                  id="button-reset"
                  type="submit"
                  class="ui large green fluid button"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
