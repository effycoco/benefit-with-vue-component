<template>
  <li>
    <h2>{{ friendInfo.name }}</h2>
    <button @click="toggleDetails">
      {{ isDetailsShown ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="isDetailsShown">
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
      isDetailsShown: false,
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsShown = !this.isDetailsShown;
    },
  },
};
</script>
