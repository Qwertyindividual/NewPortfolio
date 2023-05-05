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
          <!-- <div class="screen">
            <div class="screen-image"></div>
            <div class="screen-content">


            </div>
          </div> -->
          <!--Section: Contact v.2-->
<section class="mb-4">

<!--Section heading-->
<h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
<!--Section description-->
<p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div class="row">

    <!--Grid column-->
    <div class="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <!--Grid row-->
            <div class="row">

                <!--Grid column-->
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control">
                        <label for="name" class="">Your name</label>
                    </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control">
                        <label for="email" class="">Your email</label>
                    </div>
                </div>
                <!--Grid column-->

            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control">
                        <label for="subject" class="">Subject</label>
                    </div>
                </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">

                <!--Grid column-->
                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>
            <!--Grid row-->

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div class="status"></div>
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
            </li>

            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
            </li>

            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
            </li>
        </ul>
    </div>
    <!--Grid column-->

</div>

</section>
<!--Section: Contact v.2-->
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

/* :root {
  --background-rgb: 29 30 34;

  --blue-rgb: 33 150 243;
  --primary-rgb: var(--blue-rgb);
}

.screen {
  width: 65%;
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
  overflow: hidden;
  margin: 10% auto;
}

@keyframes pan-overlay {
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 0% -100%;
  }
}

.screen-overlay {
  background: linear-gradient(
    rgb(var(--primary-rgb) / 0.15),
    rgb(var(--primary-rgb) / 0.15) 3px,
    transparent 3px,
    transparent 9px
  );
  background-size: 100% 9px;
  height: 100%;
  width: 100%;
  animation: pan-overlay 22s infinite linear;
}

@keyframes pan-image {
  0% {
    background-position: 36% 42%;
    background-size: 200%;
  }

  20% {
    background-position: 30% 35%;
    background-size: 200%;
  }

  20.0001% {
    background-position: 60% 85%;
    background-size: 500%;
  }

  40% {
    background-position: 49% 81%;
    background-size: 500%;
  }

  40.0001% {
    background-position: 80% 42%;
    background-size: 300%;
  }

  60% {
    background-position: 84% 33%;
    background-size: 300%;
  }

  60.0001% {
    background-position: 0% 0%;
    background-size: 300%;
  }

  80% {
    background-position: 15% 4%;
    background-size: 300%;
  }

  80.0001% {
    background-position: 80% 10%;
    background-size: 300%;
  }

  100% {
    background-position: 72% 14%;
    background-size: 300%;
  }
}

.screen > .screen-image {
  background-image: url("https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80");
  background-image: url("https://i.postimg.cc/8CxKJ6Tk/contact-page-background.jpg");
  background-image: url("https://i.postimg.cc/Y07wFVtS/contact.jpg");
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-size: 300%;
  background-position: 0% 0%;
  filter: sepia(100%) hue-rotate(160deg);
  opacity: 0.6;
  animation: pan-image 15s linear infinite;
}


.info {
  margin: 50% auto;
} */
</style>
