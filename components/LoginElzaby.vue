<template>
  <section class="form my-4 mx-5">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-lg-5">
          <img
            class="img-fluid"
            src="~assets/images/Ezzaby-page-004.jpg"
            alt=""
            srcset=""
          >
          <div class="col-lg-7 px-5 pt-5">
            <img
              class="img-fluid"
              src="~/assets/images/header3.png"
              alt=""
              srcset=""
            >
            <form>
              <div class="form-row">
                <div class="col-lg-7">
                  <input
                    type="text"
                    placeholder="username"
                    class="form-control my-3 p-4"
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <input
                    type="password"
                    placeholder="password"
                    class="form-control my-3 p-4"
                  >
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-7">
                  <button type="submit" class="btn1 mt-3 mb-5">
                    Login
                  </button>
                </div>
              </div>
              <nuxt-link to="#">
                forgot password
              </nuxt-link>
              <p>
                Dont have a account?
                <nuxt-link to="#">
                  Register here
                </nuxt-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'LoginElzaby'
}
</script>
<style scoped>
/* .form{
  width: 100%;
height: 700px;
} */
.row {

  background-color: white;
  border-radius: 10px;
  box-shadow: 12px 12px 22px gray;
}
img {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.btn1 {
  /* border: none; */
  /* outline: none; */
  height: 50px;
  width: 100%;
  background-color: blue;
  color: white;
  border-radius: 4px;
  font-weight: bold;
}
.btn1:hover {
  background-color: white;
  border: 1px solid;
  color: black;
}
</style>
