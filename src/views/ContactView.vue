<template>
  <div class="contact">
    <div class="container main">
      <div class="row">
        <div class="col">
          <div class="info text-start">
            <h6 class="text-dark">Contact Me</h6>
            <h1>Get in touch with me</h1>
            <div class="socials">
              <a href="https://github.com/Qwertyindividual" target="_blank"
                ><i
                  class="fa-brands fa-github fa-xl social"
                  style="color: #635f5f"
                ></i
              ></a>
              <a href="https://www.linkedin.com/in/kauthar-brandt-6a3838219/"
                ><i
                  class="fa-brands fa-linkedin fa-xl social"
                  style="color: #635f5f"
                ></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="box box1">
            <div class="oddboxinner">

              <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container contact-info">
    <div class="row">
      <div class="col">
        <div class="container phone">
          <div class="row">
            <div class="col-1 icon">
              <i class="fa-solid fa-phone" style="color: #d8e2dc"></i>
            </div>
            <div class="col information">073-6164-107</div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="container email">
          <div class="row">
            <div class="col-1 icon">
              <i class="fa-solid fa-envelope" style="color: #d8e2dc"></i>
            </div>
            <div class="col information">brandtkauthar@gmail.com</div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="container location">
          <div class="row">
            <div class="col-1 icon">
              <i class="fa-solid fa-location-pin" style="color: #d8e2dc"></i>
            </div>
            <div class="col information">Mitchells Plain, Cape Town</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container space"></div>
  <FooterComponent />
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: content;
  height: 100%;
  width: 100%;
  background: linear-gradient(#d8e2dc 75%, white 25%);
}

h6 {
  font-family: "Muli";
}

h1 {
  font-family: "Playfair Display";
  font-weight: bold;
}

.main {
  margin: auto;
}

section {
  background-color: white;
}

.icon {
  background-color: black;
  padding: 3px;
}

.phone,
.email,
.location {
  box-shadow: 14px 19px 40px -2px #a8afa8;
  -webkit-box-shadow: 14px 19px 40px -2px #a8afa8;
  -moz-box-shadow: 14px 19px 40px -2px #a8afa8;
  font-family: "Playfair Display";
  padding: 25px;
  margin: 15px 0 15px 0;
}

.social {
  padding-right: 20px;
}

.space {
  width: 100%;
  height: 100px;
}

.box{
  width:75%;
  height: 75vh;
  background: transparent;
  border: solid black;
  border-color: black;
}

.box1{
  border-width: 3px 4px 3px 5px;
  border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
  transform: rotate(2deg);
}

.oddboxinner{
  margin:15px;
  transform: rotate(-2deg);
}

.form-control {
  border-bottom: solid 1px black;
  background: transparent;
}
</style>
