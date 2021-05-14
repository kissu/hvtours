<template>
  
  <div>

<div class="theme-hero-area">
      <div class="theme-hero-area-bg-wrap">
        <div class="theme-hero-area-bg" style="background-image:url('https://www.happyvoyaging.com/themes/mmpt21/assets/img/adult-book-business-cactus-297755_1500x800.jpeg');"></div>
        <div class="theme-hero-area-mask theme-hero-area-mask-strong"></div>
      </div>
      <div class="theme-hero-area-body">
        <div class="theme-page-section _pt-100 theme-page-section-xl">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <div class="theme-login theme-login-white">
                  <div class="theme-login-header">
                    <h1 class="theme-login-title">Sign In</h1>
                    <p class="theme-login-subtitle">Login into your HappyVoyaging account</p>
                  </div>
                  <div class="theme-login-box">
                    <div class="theme-login-box-inner">
                      <form class="theme-login-form" @submit.prevent="logIn">
                        <div class="form-group theme-login-form-group">
                          <input class="form-control" name="email" v-model="login.email" placeholder="Email Address"/>
                        </div>
                        <div class="form-group theme-login-form-group">
                          <input class="form-control" name="password" v-model="login.password" placeholder="Password"/>
                          <p class="help-block">
                            <a href="/account/register">Forgot password?</a>
                          </p>
                        </div>
                        <div class="form-group">
                          <div class="theme-login-checkbox">
                            <label class="icheck-label">
                              <input class="icheck" type="checkbox"/>
                              <span class="icheck-title">Keep me logged in</span>
                            </label>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-uc btn-dark btn-block btn-lg">Sign In</button>
                      </form>
                      <div class="theme-login-social-separator">
                        <p>or sign in with social media</p>
                      </div>
                      <div class="theme-login-social-login">
                        <div class="row" data-gutter="10">
                          <div class="col-xs-6">
                            <a class="theme-login-social-login-facebook" href="#">
                              <i class="fa fa-facebook-square"></i>
                              <span>Sign in with
                                <br/>
                                <b>Facebook</b>
                              </span>
                            </a>
                          </div>
                          <div class="col-xs-6">
                            <a class="theme-login-social-login-google" href="" @click.prevent="loginClicked()">
                              <i class="fa fa-google-plus-circle"></i>
                              <span>Sign in with
                                <br/>
                                <b>Google</b>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="theme-login-box-alt">
                      <p>Don't have an account? &nbsp;
                        <a href="/account/register">Sign up.</a>
                      </p>
                    </div>
                  </div>
                  <p class="theme-login-terms">By logging in you accept our
                    <a href="#">terms of use</a>
                    <br/>and
                    <a href="#">privacy policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>   

</template>

<script>
export default {

  middleware: 'guest',
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
methods: {
  async logIn() {
    let data = this.login;
    this.loading = true;
    try {
      let res = await this.$auth.loginWith("local", {
        data
      });
      this.loading = false;
      let user = res.data.data.userid;
      this.$auth.$storage.setUniversal("pro", user)
      this.$auth.setUser(user);
      //console.log(res);
      //this.$notify({
        //group: "success",
        //title: "Success!",
        //text: "Welcome!"
      //});
    } catch (error) {
      this.loading = false;
      console.log(error);
      //this.$notify({
        //group: "error",
        //title: "Error!",
        //text: error.response
          //? error.response.data.error
          //: "Sorry an error occured, check your internet"
      //});
    }
  },

  async loginClicked() {
            try {
                let res = await this.$auth.loginWith('google');
                console.log("login result: " + res);
            } catch (err) {
                console.log("login error: " + err);
            }

            //console.log("i am clicked");
        }
}
}
</script>

<style>

</style>