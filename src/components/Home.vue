<template>
    <div class="ui container">
      
        <div class="ui two column middle aligned center aligned grid stackable">
           <div class="column">
                <div class="ui raised segment">
                 <div class="aa">
                     <select class="ui dropdown" v-model="dist">
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
                     <h4 class="ui header">District Co-ordinator</h4>
                     <hr>
                    <div class="ui input focus">
                        <i class="user circle big icon"></i>
                       <input placeholder="Enter  Name" type="text" v-model="Distco" required="required">
  
                     </div>
                     <p></p>
                     <div class="ui input focus">
                       <i class="phone volume big icon"></i>
                       <input placeholder="Enter Mobile Number" type="text" v-model="mbl1" required="required">
                     </div>
                     
                       <h4 class="ui header">Academic Co-ordinator</h4>
                     <hr>
                    <div class="ui input focus">
                        <i class="user circle big icon"></i>
                       <input placeholder="Enter  Name" type="text" v-model="Acaco" required="required">
  
                     </div>
                     <p></p>
                     <div class="ui input focus">
                       <i class="phone volume big icon"></i>
                       <input placeholder="Enter Mobile Number" type="text" v-model="mbl2" required="required">
                     </div>
                      <h4 class="ui header">Guide Teacher(Female)</h4>
                     <hr>
                    <div class="ui input focus">
                        <i class="user circle big icon"></i>
                       <input placeholder="Enter  Name" type="text" v-model="Gfm" required="required">
  
                     </div>
                     <p></p>
                     <div class="ui input focus">
                       <i class="phone volume big icon"></i>
                       <input placeholder="Enter Mobile Number" type="text" v-model="mbl3" required="required">
                     </div>
                       <h4 class="ui header">Guide Teacher(Male)</h4>
                     <hr>
                    <div class="ui input focus">
                        <i class="user circle big icon"></i>
                       <input placeholder="Enter  Name" type="text" v-model="Gm" required="required">
  
                     </div>
                     <p></p>
                     <div class="ui input focus">
                       <i class="phone volume big icon"></i>
                       <input placeholder="Enter Mobile Number" type="text" v-model="mbl4" required="required">
                     </div>


                     <p></p>
                      <button class="ui primary button" @click="submit">
                              Register
                       </button>
                </div>
                 </div>
           </div>
           <div class="column">
                  <div class="ui raised segment">
                     <h2 class="ui header">Participating Child Scientist</h2>
                     <hr>
                     <div class="ui input focus">
                         <i class="child big icon"></i>
                       <input placeholder="Enter Name" type="text" v-model="std"  required="required">
                     </div>
                     <p></p>
                     <div class="ui input focus">
                         <i class="phone volume big icon"></i>
                       <input placeholder="Enter Mobile Number" type="text" v-model="mbl5"  required="required">
                     </div>
                     <p></p>
                       <button class="ui primary button" @click="add">
                              Add
                       </button>
                     
                  
           </div>
        </div>
    </div>
    </div>

</template>
<script>
import { db } from "../firebase";
import axios from "axios";
//  let namesRef=db.ref(this.dist);
export default {
  firebase: {
    names: db.ref(this.dist)
  },
  data() {
    return {
      Name: "",
      Distco: "",
      Acaco: "",
      Gfm: "",
      Gm: "",
      std: "",
      mbl1: "",
      mbl2: "",
      mbl3: "",
      mbl4: "",
      mbl5: "",
      dist: "",
      districts: []
    };
  },
  methods: {
    submit() {
      db
        .ref(this.dist)
        .update({
          DistCo: this.Distco,
          AcaCo: this.Acaco,
          GuideF: this.Gfm,
          GuideM: this.Gm,
          MobileNumber1: this.mbl1,
          MobileNumber2: this.mbl2,
          MobileNumber3: this.mbl3,
          MobileNumber4: this.mbl4
        })
        .then(() => alert("Registered!!"));

      axios
        .get(
          "http://api.msg91.com/api/sendhttp.php?country=91&route=4&authkey=243776A2lp17IEM5bcc357a",
          {
            params: {
              mobiles: this.mbl[i],

              message:
                "Successfully Registered to National Children's Science Congress2018",
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
    },
    add() {
      db
        .ref(this.dist)
        .child("students")
        .push({ Student: this.std, MobileNumber: this.mbl5, edit: false })
        .then(() => alert("Done!!"))
        .catch(() => alert("Eror"));
      this.std = "";
      this.mbl5 = "";
    }
  },
  watch: {
    dist() {
      this.$bindAsObject("districts", db.ref(this.dist), null, () => {
        this.Distco = this.districts.DistCo;
        this.mbl1 = this.districts.MobileNumber1;
        this.Acaco = this.districts.AcaCo;
        this.mbl2 = this.districts.MobileNumber2;
        this.Gfm = this.districts.GuideF;
        this.Gm = this.districts.GuideM;
        this.mbl3 = this.districts.MobileNumber3;
        this.mbl4 = this.districts.MobileNumber4;
      });
    }
  }
};
</script>
<style>
</style>
