let DateTime = luxon.DateTime;
const now = DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss");

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
      noMessages: {
        date: now,
        message: "Tutti i messaggi sono stati cancellati",
        status: "no-messages",
      },
      filterText: "",
    };
  },

  methods: {
    addMsg() {
      if (
        this.contacts[this.activeChatIndex].messages.includes(this.noMessages)
      ) {
        this.contacts[this.activeChatIndex].messages.splice(this.noMessages, 1);
      }

      const now = DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss");

      const newMessageCopy = {
        ...this.newMessage,
        date: now,
      };

      if (this.newMessage.message.length > 0) {
        this.contacts[this.activeChatIndex].messages.push(newMessageCopy);
        this.newMessage.message = "";

        setTimeout(this.autoReply, 1000);
      }
    },

    deleteMsg(index) {
      if (this.contacts[this.activeChatIndex].messages.length > 1) {
        this.contacts[this.activeChatIndex].messages.splice(index, 1);
      } else {
        this.contacts[this.activeChatIndex].messages.splice(index, 1);
        this.contacts[this.activeChatIndex].messages.push(this.noMessages);
      }
    },

    autoReply() {
      const now = DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss");

      const newReply = {
        date: now,
        message: "ok",
        status: "received",
      };

      this.contacts[this.activeChatIndex].messages.push(newReply);
    },

    getMsgInfo(index) {
      console.log(this.contacts[this.activeChatIndex].messages[index]);
    },

    getTimeFromDate(date) {
      const convertedDate = DateTime.fromFormat(date, "dd/MM/yyyy hh:mm:ss");

      return convertedDate.toLocaleString(DateTime.TIME_24_SIMPLE);
    },
  },

  created() {},
}).mount("#app");
