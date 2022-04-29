const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
     <li >
        <h2>{{friendInfo.name}}</h2>
        <button @click="toggleDetails">{{isDetailsShowed?'Hide': 'Show'}} Details</button>
        <ul v-if="isDetailsShowed">
          <li><strong>Phone:</strong> {{friendInfo.phone}}</li>
          <li><strong>Email:</strong> {{friendInfo.email}}</li>
        </ul>
      </li>
    `,
  props: {
    friendInfo: Object,
  },
  data() {
    return {
      isDetailsShowed: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsShowed = !this.isDetailsShowed;
    },
  },
});

app.mount("#app");
