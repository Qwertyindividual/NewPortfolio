<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <div class="socials">
            <div class="row">
              <a href="https://github.com/Qwertyindividual" target="_blank"
                ><i
                  class="fa-brands fa-github fa-xl social"
                  style="color: #635f5f"
                ></i
              ></a>
            </div>
            <div class="row">
              <a href="https://www.linkedin.com/in/kauthar-brandt-6a3838219/"
                ><i
                  class="fa-brands fa-linkedin fa-xl social"
                  style="color: #635f5f"
                ></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col text-start">
          <h1>Web Developer <span>&amp;</span></h1>
          <h1>An Aspiring UX/UI Designer</h1>
          <div class="intro">
            <p>
              Allow me to introduce myself: My name is Kauthar Brandt, Im a
              Full-Stack Developer intern at Life Choices Academy -
            </p>
            <hr />
            <div class="tech-stack row">
              <div class="col">
                <i class="fa-brands fa-html5 fa-xl" style="color: #000000"></i>
              </div>
              <div class="col">
                <i
                  class="fa-brands fa-css3-alt fa-xl"
                  style="color: #000000"
                ></i>
              </div>
              <div class="col">
                <i
                  class="fa-brands fa-square-js fa-xl"
                  style="color: #000000"
                ></i>
              </div>
              <div class="col">
                <i
                  class="fa-brands fa-bootstrap fa-xl"
                  style="color: #000000"
                ></i>
              </div>
              <div class="col">
                <i class="fa-brands fa-vuejs fa-xl" style="color: #000000"></i>
              </div>
              <div class="col">
                <i
                  class="fa-solid fa-database fa-xl"
                  style="color: #000000"
                ></i>
              </div>
              <div class="col">
                <i
                  class="fa-brands fa-node-js fa-xl"
                  style="color: #000000"
                ></i>
              </div>
              <div class="col">
                <i
                  class="fa-brands fa-wordpress fa-xl"
                  style="color: #000000"
                ></i>
              </div>
            </div>
            <hr class="mb-5" />
            <div class="row">
              <div class="col-4">
                <button>Learn More</button>
              </div>
              <div class="col">
                <button>View My Work</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: #e4eee8;
}
img {
  width: 100%;
  height: 75vh;
}

span {
  border: solid 2px black;
  border-radius: 50%;
  padding: 6px 15px;
}

h1 {
  font-size: 50px;
  font-family: "Playfair Display";
  font-weight: 300;
  letter-spacing: 3px;
}

p {
  font-family: "Mulish";
  margin-bottom: 30px;
}

.intro {
  width: 45%;
}

a {
  margin-bottom: 20px;
}

.socials {
  margin: 75% auto;
}

button {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px 20px;
  border-radius: 15px;
  transition: all 0.3s;
}

img {
  width: 20%;
  height: 20%;
  float: left;
}

.row {
  margin-top: 20px;
}
</style>
