<template>
    <div class="ui primary top fixed menu inverted">
        <!-- <router-link tag="a" to="/" class="item" active-class="active" exact>Home</router-link> -->
        <router-link tag="a" to="/" class="item" active-class="active" exact>Home</router-link>
        <router-link tag="a" to="/students" class="item" active-class="active" exact>Lists</router-link>
        <router-link tag="a" to="/SMS" class="item" active-class="active" exact>SMS</router-link>
        <div class="right menu">
            <a class="ui item" @click="logout">
            Logout
            </a>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("actionLogout", this.toLogin);
    },
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>
