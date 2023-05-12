<template>
  <!-- Carousel wrapper -->
  <div
    id="carouselMDExample"
    class="carousel slide carousel-fade"
    :data-ride="ride"
  >
    <!-- Slides -->
    <div class="carousel-inner shadow">
      <!-- Carousel items -->
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        :class="['carousel-item', { active: index === activeIndex }]"
      >
        <!-- <img :src="item.image" class="d-block w-100" :alt="'Slide ' + (index + 1)" /> -->
        <div class="card mb-3" style="max-width: 75%">
          <div class="row g-0">
            <div class="col-md-4">
              <!-- <img src="" class="img-fluid rounded-start" alt="..." /> -->
              <img :src="item.img" class="h-50 w-100" :alt="'Slide ' + (index + 1)" />

            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-start">{{ item.name }}</h5>
                <p class="card-text text-start">
                   {{ item.testimonial }}
                </p>
                <p class="card-text">
                  <small class="text-muted text-start">{{ item.relation }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Slides -->

    <!-- Controls -->
    <button
      class="carousel-control-prev"
      type="button"
      :data-target="'#carouselMDExample'"
      @click="previousSlide"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-target="'#carouselMDExample'"
      @click="nextSlide"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <!-- Controls -->

    <!-- Thumbnails -->
    <div
      class="carousel-indicators"
      style="margin-bottom: -80px; margin-left: 0px; margin-right: 0px"
    >
      <button
        class="border-0 button"
        type="button"
        v-for="(item, index) in carouselItems"
        :key="index"
        :data-target="'#carouselMDExample'"
        :data-slide-to="index"
        :class="{ active: index === activeIndex }"
        :aria-current="index === activeIndex ? 'true' : 'false'"
        :aria-label="'Slide ' + (index + 1)"
        style="width: 300px; height: 80px"
      >
        <div class="container">
          <div class="row">
            <div class="col-4">
              <img
                class="d-block w-100 shadow rounded rounded-circle img-fluid"
                :src="item.img"
              />
            </div>
            <div class="col">
              <h6 class="text-start m-0">{{ item.name }}</h6>
              <p class="text-start m-0">{{ item.relation }}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
    <!-- Thumbnails -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp",
          thumbnail:
            "https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(88).webp",
          id: 1,
          name: "Aliyah du Toit",
          relation: "Colleague",
          testimonial:
            "In the 2 months I have worked with Kauthar, it is clear that she is  a very hard-working, compassionate person. She never hesitates to help others and once she is faced with an issue, she will work at it until it is solved.",
          links: {
            github: "https://github.com/aliyahdutoit",
            socials: "",
          },
          img: "https://i.postimg.cc/TPBKQ3y1/aliyah.jpg",
        },
        {
          image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp",
          thumbnail:
            "https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(121).webp",
          id: 2,
          name: "Imraan Berksen",
          relation: "Colleague",
          testimonial:
            "Kauthar is really fun, interesting and full-hearted person. She's so friendly, honest and lovely to be around. She is shy at first but as you get to know her, she becomes more comfortable with you. She's also kind, caring and a good judge of character.",
          links: {
            github: "https://github.com/ImraanBernksen",
            socials: "",
          },
          img: "https://i.postimg.cc/LXLyXGtQ/imraan.jpg",
        },
        {
          image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp",
          thumbnail:
            "https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(121).webp",
          id: 3,
          name: "Candice Amon",
          relation: "Director",
          testimonial:
            "Kauthar loves to work on her own. Has the ability to engage very well. She has the willingness to push herself out of her comfort zone in order to grow in all aspects.",
          links: {
            github: "",
            socials: "",
          },
          img: "https://i.postimg.cc/pLN8qyz7/candiuce.jpg",
        },
        {
          image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp",
          thumbnail:
            "https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(121).webp",
          id: 4,
          name: "Ryan Thomas",
          relation: "Lecturer",
          testimonial:
            "Kauthar is not only a great student, but also a good help amongst her peers.Her ability to assist her peers with various issues while handling her own is admirable and shows her strength while learning and her ability to take what she's learnt and use it to it's fullest potential. She also has a good sense of humor and a bubbly personality.",
          links: {
            github: "",
            socials: "",
          },
          img: "https://i.postimg.cc/tJK1SmZP/ryan.jpg",
        },
        {
          image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp",
          thumbnail:
            "https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(121).webp",
          id: 5,
          name: "Seaba Mafestire",
          relation: "Colleague",
          testimonial:
            "Kauthar is a free spirit who works hard to achieve her goals and puts her all in her work and a good team player.",
          links: {
            github: "seabaraven@gmail.com",
            socials: "seabaraven@gmail.com",
          },
          img: "https://i.postimg.cc/rmbN1TTN/seaba.jpg",
        },
        {
          image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp",
          thumbnail:
            "https://mdbcdn.b-cdn.net/img/Photos/Others/Carousel-thumbs/img%20(31).webp",
          id: 6,
          name: "Keren Bruce",
          relation: "Colleague",
          testimonial:
            "Kauthar is a determined and energetic worker who strives to achieve her goals in the most efficient way possible . Her personality lights up any conversation she participates in and is surely a lovely presence to have in the workplace .",
          links: {
            github: "https://github.com/kerenkittybruce",
            socials: "https://www.instagram.com/kerenkittybruce/",
          },
          img: "https://i.postimg.cc/Xv0QF8nD/keren.jpg",
        },
      ],
      activeIndex: 0,
      ride: "carousel", // Controls automatic sliding
    };
  },
  methods: {
    previousSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.carouselItems.length) %
        this.carouselItems.length;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.carouselItems.length;
    },
  },
};
</script>

<style scoped>
.carousel-inner {
  height: 630px;
}

.carousel-item img {
  height: 630px;
  object-fit: cover;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  padding: 8px;
  width: 36px;
  height: 36px;
  transition: background-color 0.3s ease;
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.carousel-control-prev-icon {
  margin-right: 10px;
}

.carousel-control-next-icon {
  margin-left: 10px;
}

.carousel-indicators {
  margin-top: 10px;
}

.carousel-indicators button {
  background-color: rgba(0, 0, 0, 0.3);
  /* border: none;
  border-radius: 50%; */
  width: 100px;
  height: 100px;
  margin: 0;
  padding: 0;
  
  transition: background-color 0.3s ease-in;
}

.carousel-indicators button.active {
  background-color: white;
}

.carousel-indicators button:focus {
  outline: none;
}

.carousel-indicators button img {
  width: 100%;
  height: 50px;
  object-fit: fill;
  border-radius: 50%;
  opacity: 0.7;
}

.carousel-indicators button.active img {
  opacity: 1;
}

.button:nth-child(even) {
  background: lavender;
}

.button:nth-child(odd) {
  background: Thistle;
}

h6 {
  font-family: "Playfair Display";
}

h1 {
  font-family: "Playfair Display";
  font-weight: 300px;
  letter-spacing: 2px;
}

.relation {
  font-family: "Lucida Handwriting";
}

.name {
  font-family: "Playfair Display";
}

.testimonial {
  font-family: "Mulish";
  letter-spacing: 1px;
  line-height: 20px;
}

img {
  height: 50%;
  object-fit: fill;
}

.top {
  margin: 150px 0 100px 255px;
}

.card {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 15%;
}
</style>
