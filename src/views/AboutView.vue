<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 image">
        <div class="item">
          <div class="polaroid">
            <img src="https://i.postimg.cc/FRc9pwqG/meh.jpg" alt="" />
            <div class="caption">&#10047; Kauthar Brandt &#10047;</div>
          </div>
        </div>
        <br />
        <div class="basic-info">
          <p class="side-heading text-start">
            Summary Of <br /><span class="side-main text-dark">MYSELF</span>
          </p>
          <p class="text-start">Interests</p>
          <ul class="text-start">
            <li>Cooking</li>
            <hr>
            <li>Experimenting</li>
            <hr>
            <li>Reading</li>
            <hr>
            <li>Sketching</li>
            <hr>
            <li>Designing</li>
          </ul>
        </div>
      </div>
      <div class="col info">
        <h1 class="main-heading">
          UNVEILING THE TAPESTRY OF KAUTHAR: A JOUNEY INTO MY WORLD
        </h1>
        <h5 class="text-start pt-3 subheading">Personal & Professional</h5>
        <h1 class="text-dark fw-bold text-start">Background</h1>
        <p class="text-start">
          Greetings! I'm Kauthar, a 19-year-old residing in Mitchell's Plain.
          Recently, I accomplished a significant milestone in my life as I
          graduated from Life Choices Academy, earning the title of a certified
          Full-Stack Developer. My passion lies in the realms of creative
          thinking and design, particularly in the fascinating realm of UI/UX
          development.
        </p>
        <p class="text-start">
          Driven by my goals, I embody determination and organization in all
          aspects of my life. Assisting others, especially in troubleshooting
          code-related challenges, brings me immense joy. I thrive when faced
          with complex errors that require innovative solutions. While I am
          proficient at working independently, I also relish collaborating
          within a team. Occasionally, I take the lead in projects, utilizing my
          skills in planning and delivering compelling presentations.
        </p>
        <p class="text-start">
          Overall, I am an individual who possesses a fervor for continuous
          growth, fueled by my dedication to helping others and my affinity for
          exploring the limitless possibilities of coding and design.
        </p>
        <div class="container middle">
          <div class="row">
            <div class="col">
              <h6 class="fw-bold goals text-start">Short-Term Goals</h6>
              <p class="text-start">
                <ul>
                  <li class="text-start">Improve Code Quality and Efficiency</li>
                </ul>
              </p>
            </div>
            <div class="col">
              <h6 class="fw-bold goals text-start">Long-Term Goals</h6>
              <p class="text-start">
               <ul>
                <li class="text-start">Successful UI/UX Developer Job</li>
               </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/bagnard");

/* * {
  box-sizing: border-box;
} */

h3,
.side-heading {
  color: black;
  font-family: "Lucida Handwriting";
}
.container-fluid {
  width: 100%;
  height: 100%;
}

.info {
  width: 100%;
  height: 100vh;
  background-image: url(https://i.postimg.cc/V6Hd8rM7/newlogo.png);
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: center;
  background-blend-mode: darken;
}

.image {
  background-color: #e4eee8;
}

h1,
.side-main {
  font-family: "Bagnard", sans-serif;
  font-size: 30px;
  letter-spacing: 4px;
}

.middle {
  margin: 50px auto;
  padding-left: 0;
}

.polaroid {
  background: #fff;
  padding-top: 1rem;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
}

.polaroid > img {
  width: 92%;
  height: 80%;
}
.caption {
  font-size: 1rem;
  text-align: center;
  line-height: 2.5em;
  font-family: "Lucida Handwriting";
  padding: 10px 0 10px 0;
}

.item {
  width: 100%;
  margin-top: 1rem;
  filter: grayscale(100%);
}

.item .polaroid:before {
  content: "";
  transition: all 0.35s;
}

.item {
  transform: scale(0.8, 0.8) rotate(5deg);
  transition: all 0.35s;
}

.item:hover {
  filter: none;
  transform: scale(1, 1) rotate(0deg) !important;
  transition: all 0.35s;
}
.item:hover .polaroid:before {
  content: "";
  transform: rotate(0deg);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  transition: all 0.35s;
}

.subheading {
  font-family: "Lucida Handwriting";
}

.main-heading {
  font-size: 20px;
  padding: 10px 0 10px 0;
  text-decoration: underline;
}

.goals {
  font-family: "Lucida Handwriting";
  text-decoration: underline;
}
</style>
