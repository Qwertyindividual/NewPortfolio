<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Welcome to my Portfolio</h3>
          <p>Web Devloper && Aspiring UX/UI Designer</p>
          <div class="buttons">
            <button>Get in touch</button>
            <button>View my Work</button>
          </div>
        </div>
        <div class="col-6 spline">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: content;
  height: 100%;
  width: 100%;
  /* background-image: url(https://i.postimg.cc/x1gZyxRd/homepage-background.jpg); */
  /* background-image: url(https://i.postimg.cc/x1qmDjkv/potential-background-image.jpg); */
  background-image: url(https://i.postimg.cc/pdRFkYyC/potential-backgriund.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-size: 50% 100%;
  background-position: right;
  background-color: #aaa8af;
}

button {
  display: inline-block;
}

.container {
  margin: auto;
}

</style>
