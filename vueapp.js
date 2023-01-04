var app = new Vue({
  el: "#app",
  data: {
    lessons: [],
  },
  created() {
    fetch("http://localhost:3000/lessons")
      .then((response) => response.json())
      .then((lessons) => {
        this.lessons = lessons;
      });
  },
});
