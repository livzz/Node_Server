<template>
    <div class="ui container">
        <br>
         <select class="ui dropdown" v-model="sms">
                          <option value="">Select Your district</option>
                          <option>Baksa</option>
                          <option>Biswanath</option>
                          <option>Bongaigaon</option>
                          <option>Barpeta</option>
                          <option>Cachar</option>
                          <option>Charaideo</option>
                          <option>Chirang</option>
                          <option>Darang</option>
                          <option>Dhemaji</option>
                          <option>Dibrugargh</option>
                          <option>Dima Hasao</option>
                          <option>Dhuburi</option>
                          <option>Golaghat</option>
                          <option>Goalpara</option>
                          <option>Hailakandi</option>
                          <option>Haju</option>
                          <option>Jorhat</option>
                          <option>Kamrup Metropolitan</option>
                          <option>Kamrup</option>
                          <option>Karimganj</option>
                          <option>Karbi Anglong</option>
                          <option>Kokrajhar</option>
                          <option>Lakhimpur</option>
                          <option>Majuli</option>
                          <option>Morigaon</option>
                          <option>Nagaon</option>
                          <option>Nalbari</option>
                          <option>Sivasagar</option>
                          <option>Sonitpur</option>
                          <option>South Salmara-Mankachar</option>
                          <option>Tinisukia</option>
                          <option>Udalguri</option>
                          <option>West Karbi Anglong</option>
                          

                     </select>
            
              <div class="ui raised segment">
                  <form class="ui form" @submit.prevent="submit">
                   <div class="field">
                   <label>Phone Number</label>
               <input name="first-name" placeholder="First Name" type="text" required v-model="number">
               </div>
               <div class="field">
               <label>Your Message</label>
                <textarea rows="2" requireds maxlength="160" v-model="msg"></textarea>
                    </div>
             <button class="ui button" type="submit">Send</button>
               </form>
              </div>
            
            
        
    </div>
</template>

<script>
import { db } from "../firebase";
import axios from "axios";
import { app } from "../firebase";
export default {
  firebase: {
    names: db.ref(this.sms)
  },
  data() {
    return {
      number: "",
      msg: "",
      districts: "",
      sms: ""
    };
  },
  methods: {
    submit() {
      console.log("wywy");
      db
        .ref(this.sms)
        .child("messages")
        .push({ Messages: this.msg, MobileNumber: this.number });
      axios
        .get(
          "http://api.msg91.com/api/sendhttp.php?country=91&route=4&authkey=243776A2lp17IEM5bcc357a",
          {
            params: {
              mobiles: this.number,
              message: this.msg,
              sender: "NCSCMJ"
            },
            crossDomain: true
          }
        )
        .then(function(response) {
          console.log(response);
          alert("Failed!!");
        })
        .catch(function(error) {
          console.log(error);
          alert("Sent!!");
        })
        .then(() => {
          // always executed
          this.number = "";
          this.msg = "";
        });
    }
  },
  created() {
    const user = app.auth().currentUser;
    // console.log(user);
  },
  watch: {
    sms() {
      this.$bindAsObject("districts", db.ref(this.sms));
    }
  }
};
</script>

<style scoped>
</style>