<template>
<div class="ui container">
     <select class="ui dropdown" v-model="set">
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
            
                     <p></p>
                     <div>
                       <div class="ui two column center aligned grid stackable">
                          <div class="column">
                          <div class="ui raised segment">
                          <h3>District Co-ordinator::{{districts.DistCo}}</h3>
                           <h3>Academic Co-ordinator::{{districts.AcaCo}}</h3>
                           <h3>Guide Female::{{districts.GuideF}}</h3>
                           <h3>Guide Male::{{districts.GuideM}}</h3>
                          </div>
                          </div>
                          <div class="column">
                          <div class="ui raised segment">
                           <h3>District Co-ordinator No::{{districts.MobileNumber1}}</h3>
                            <h3>Academic Co-ordinator No::{{districts.MobileNumber2}}</h3>
                             <h3>Guide Female No::{{districts.MobileNumber3}}</h3>
                              <h3>Guide Male No::{{districts.MobileNumber4}}</h3>
                          </div>
                          </div>
                             </div>
                             <p></p>
    <div v-for="(dist,i) in districts.students" :key="i">
     <table class="ui unstackable table">
  <thead>
    <tr>
    <th>Student Name</th>
    <th>Update</th>
  </tr></thead>
  <tbody>
    <tr v-if="!dist.edit">
      <td>{{dist.Student}}</td>
      <td>
                <button class="ui basic primary button" @click="setEdit(i)">
                <i class="icon large edit"></i>
                  
                </button>&nbsp
             <i class="trash large icon" @click="remove(i)"></i>
             </td>
    </tr>
    <tr v-if="dist.edit">
      <td><input type="text" v-model="dist.Student"></td>
      <td>
        <button class="ui basic button" @click="saveEdit(i,dist.Student)">
                  Save
             </button>
             <button class="ui basic button" @click="cancelEdit(i)">
                  Cancel
             </button>
             </td>
    </tr>
  </tbody>
</table>
     
     
</div>
</div>
</div>
</template>
<script>
import { db } from "../../firebase";
export default {
  firebase: {
    names: db.ref(this.set)
  },
  data() {
    return {
      Name: "",
      teacher: "",
      std: "",
      isDisabled: false,
      mbl: "",
      isLive: true,
      set: "",
      districts: []
    };
  },
  methods: {
    setEdit(value) {
      db
        .ref(this.set)
        .child("students")
        .child(value)
        .update({ edit: true });
    },
    cancelEdit(value) {
      db
        .ref(this.set)
        .child("students")
        .child(value)
        .update({ edit: false });
    },
    saveEdit(value, name) {
      db
        .ref(this.set)
        .child("students")
        .child(value)
        .set({ Student: name, edit: false });
    },
    remove(value) {
      db
        .ref(this.set)
        .child("students")
        .child(value)
        .remove();
    }
  },
  watch: {
    set() {
      this.$bindAsObject("districts", db.ref(this.set));
    }
  }
};
</script>
<style>
.table {
  width: 50%;
}
</style>
