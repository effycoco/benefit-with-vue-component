<template>
  <li>
    <h2>{{ friendInfo.name }}</h2>
    <button @click="toggleDetails">
      {{ isDetailsShowed ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="isDetailsShowed">
      <li><strong>Phone:</strong> {{ friendInfo.phone }}</li>
      <li><strong>Email:</strong> {{ friendInfo.email }}</li>
    </ul>
  </li>
</template>
<script>
export default {
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
};
</script>
