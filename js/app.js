const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      activeChatIndex: 0,
      newMessage: {
        date: "",
        message: "",
        status: "sent",
      },
    };
  },

  methods: {
    addMsg() {
      const newMessageCopy = {
        ...this.newMessage,
      };

      if (this.newMessage.message.length > 0) {
        this.contacts[this.activeChatIndex].messages.push(newMessageCopy);
        this.newMessage.message = "";
      }
    },
  },

  created() {
    console.log(this.contacts);
  },
}).mount("#app");
