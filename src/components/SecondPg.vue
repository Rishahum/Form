<template>
    <div>
  <div class="main-div">
    <form>
      <div class="form-div">
        <label class="fname" id="label" for="name"
          >CURRENT EDUCATIONAL INSTITUTE</label
        >
        <input class="input" type="text" id="name" />
      </div>

      <div class="form-div">
        <label class="lname" id="label" for="name">FIELD OF STUDY</label>
        <input class="input" type="text" id="lname" />
      </div>

      <div class="form-div">
        <label for="date" id="label">EXEPECTED GRADUATION DATE</label>
        <input
          class="input" type="date" id="garduation-date" name="garduation-date"
          style="color: white"/>
      </div>

      <div class="form-div">
        <label class="fname" id="label" 
          >EXTRACURRICURAL ACTIVITIES</label
        >
        <input class="input" type="text"  />
      </div>

      <div class="form-div">
        <label id="label">UPLOAD CERTIFICATE</label>
        <input
          class="input"
          type="file"
          accept=".pdf, .doc, .docx, .jpg, .png" 
        />
      </div>

      <div class="form-div">
        <label class="fname" id="label" 
          >SKILLS</label
        >
        <input class="input" type="text"  />
      </div>

      <div class="form-div">
        <label class="fname" id="label" 
          >ADDITIONAL INFORMATION</label
        >
        <input class="input" type="text"  />
      </div>

      <br /><br />

      <B><p>LIST OF ACADEMIC ACHIEVEMENT</p></B>
        <div v-for="(item, ) in form" :key="item" class="form-div">

          <div class="row" style="display: flex; color:rgb(203, 168, 236)">

                <div class="col-sm-5">
                <label id="label">TITLE</label>
                <input class="input" type="text" v-model="item.title" />
                </div>

                <div class="col-sm-5">
                <label id="label">YEAR</label>
                <input class="input" type="month" v-model="item.year" />
                </div>

                <div class="col-sm-5">
                <label id="label">DESCRIPTION</label>
                <input class="input" type="text" v-model="item.description" />
                </div>

                <div class="col-sm-2 pt-4">
                <button
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="addRow">
                    +
                </button>
                </div>

          </div>
        </div><br><br><br><br><br>
        <B><p >LIST OF AWARDS</p></B>
        <div v-for="(entry, ) in form2" :key="entry" class="form-div">

          <div class="row" style="display: flex; color:rgb(203, 168, 236)">

                <div class="col-sm-5">
                <label id="label">TITLE</label>
                <input class="input" type="text" v-model="entry.titles" />
                </div>

                <div class="col-sm-5">
                <label id="label">BODY</label>
                <input class="input" type="text" v-model="entry.body" />
                </div>

                <div class="col-sm-5">
                <label id="label">YEAR</label>
                <input class="input" type="month" v-model="entry.year" />
                </div>

                <div class="col-sm-2 pt-4">
                <button
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="addAwards">
                    +
                </button>
                </div>

            </div><br><br><br>
        </div> <br><br><br>
      <button @click="Submit">Submit</button>
    </form>
    
  </div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const form = reactive([{ title: "", year: "", description: "" }]);
    const form2 =reactive([{titles:'', body:'', year:''}])

    const addRow = () => {
      form.push({ title: "", year: "", description: "" });
    };
    const addAwards=()=>{
        form2.push({titles:'',body:'',year:''})
    }
    return {
      form,
      addRow,
      addAwards,
      form2,
    };
  },
  methods:{
    Submit(){
        alert("form is submitted");
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;700;800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.main-div {
  width: 100%;
  height: 100vh;
 
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  color: white;
}

.form-div {
  width: 50vw;
  height: 1vw;
  margin-top: 3vw;
}
#label {
  height: 50px;
  border-radius: 12px;
  margin-right: 12px;
  font-weight: 700;
}

.input {
  border: 2px solid white;
  background: transparent;
  color: white;
}

button {
  width: 100px;
  background-color: aquamarine;
  border-radius: 12px;
}
</style>
