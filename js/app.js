const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeChatIndex: 0,
    };
  },

  created() {
    console.log(this.contacts);
  },
}).mount("#app");
