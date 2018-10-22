<template>
    <div>
        <app-header v-if="$route.path !== '/login'"></app-header>
        <br>
        <br>
        <br>
        <div class="ui container">    
            <h3 class="ui center aligned icon header">
                <i class="circular users icon"></i>
                National Children's Science Congress,2018
                <h3 class="ui header">Welcome To Majuli</h3>
            </h3>
            
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { app } from "./firebase";
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    }
  },
  created() {
    this.$store.dispatch("initAuthState", this.toLogin);
    console.log(user.email);
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getAuthState;
    }
  },
  watch: {
    $route(to) {
      if (to.meta.requireAuth) {
        if (!this.isLoggedIn) {
          this.toLogin();
        }
        if (to.fullPath === "/SMS") {
          if (app.auth().currentUser.email !== to.meta.user) {
            alert("Access Denied!!");
            this.$router.push("/");
          }
        }
      }
      //   console.log(app.auth().currentUser);
    }
  }
};
</script>

<style>
</style>
