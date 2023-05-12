<template>
  <div class="background">
    <h4>
      "Building Dreams, Crafting Success: A Showcase of My Project Journey"
    </h4>
    <h1>My Projects</h1>

    <div>
    <div class="accordion" :id="accordionId">
      <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
        <h2 class="accordion-header" :id="'heading' + index">
          <button class="accordion-button" type="button" :data-bs-toggle="'#collapse' + index" :aria-expanded="item.expanded" :aria-controls="'collapse' + index" @click="toggleAccordion(index)">
            <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
          </button>
        </h2>
        <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: item.expanded }" :aria-labelledby="'heading' + index" :data-bs-parent="accordionId">
          <div class="accordion-body">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionItems: [
        {
          title: "Accordion Item #1",
          content: "This is the first item's accordion body. It is shown by default...",
          expanded: true
        },
        {
          title: "Accordion Item #2",
          content: "This is the second item's accordion body. It is hidden by default...",
          expanded: false
        },
        {
          title: "Accordion Item #3",
          content: "This is the third item's accordion body. It is hidden by default...",
          expanded: false
        }
      ],
      accordionId: "accordionExample"
    };
  },
  methods: {
    toggleAccordion(index) {
      this.accordionItems.forEach((item, i) => {
        item.expanded = i === index ? !item.expanded : false;
      });
    }
  }
};
</script>

<style scoped>
.background {
  background: #e4eee8;
  width: 100%;
  height: 100%;
  border: solid 40px;
  border-image-source: url(https://i.postimg.cc/7LRXxVy2/another-one-removebg-preview.png);
  border-image-slice: 126 91 130 83;
  border-image-width: 42px 42px 42px 42px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: round round;
}

.accordion-item {
  background: transparent;
}

h4 {
  font-family: "Lucida Handwriting";
  padding-top: 10px;
}

h1 {
  font-family: "Bagnard", "sans-serif";
}

.card {
  width: 100%;
  height: auto;
  background: transparent;
  border: none;
}

.card-body {
  background: transparent;
}

.accordion-button {
width: 90%;
height: auto;
display: inline-flex;
}

/* Add transition to accordion arrow */
.accordion-button::after {
  transition: transform 0.3s ease;
}

/* Rotate arrow icon when accordion is open */
.accordion-button[aria-expanded="true"]::after {
  transform: rotate(90deg);
}
</style>
 

