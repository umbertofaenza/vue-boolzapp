const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
    };
  },

  created() {
    console.log(this.contacts);
  },
}).mount("#app");
