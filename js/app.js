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
      newReply: {
        date: "",
        message: "ok",
        status: "received",
      },
      filterText: "",
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

        setTimeout(this.autoReply, 1000);
      }
    },

    deleteMsg(index) {
      this.contacts[this.activeChatIndex].messages.splice(index, 1);
    },

    autoReply() {
      this.contacts[this.activeChatIndex].messages.push(this.newReply);
    },

    getMsgInfo(index) {
      console.log(this.contacts[this.activeChatIndex].messages[index]);
    },
  },

  created() {},
}).mount("#app");
