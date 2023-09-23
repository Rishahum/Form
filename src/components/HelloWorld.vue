<template>
  <div class="main-div">
    <form>
      <div class="form-div">
        <label class="fname" id="label" for="name">FIRST NAME</label>
        <input class="input" type="text" id="name" />
      </div>
      <div class="form-div">
        <label class="lname" id="label" for="name">LAST NAME</label>
        <input class="input" type="text" id="lname" />
      </div>
      <div class="form-div">
        <label for="gender" id="label">GENDER</label>

        <select name="gender" class="input" style="color:white">
          <option value="volvo">Female</option>
          <option value="saab">Male</option>
          <option value="mercedes">Others</option>
        </select>
      </div>
      <div class="form-div">
        <label for="birthday" id="label">BIRTHDAY</label>
        <input class="input" type="date" id="birthday" name="birthday" style="color:white" />
      </div>
      <div class="form-div">
        <label  id="label" for="email">E-MAIL</label>
        <input class="input" type="email" id="email" />
      </div>
      <div class="form-div">
        <label  id="label" for="address">ADDRESS</label>
        <input class="input" type="textarea" id="address" style="color:white" />
      </div>
      <div class="form-div">
        <label  id="label" for="city">CITY</label>
        <input class="input" type="text" id="city" />
      </div>
      <div class="form-div">
        <label  id="label" for="state">STATE</label>
        <input class="input" type="text" id="state" />
      </div>
      <div class="form-div">
        <label  id="label" for="country">COUNTRY</label>
        <input class="input" type="text" id="country" />
      </div><br><br>
      <div class="form--div">
        <p>LANGUAGE</p>
       
        <input class="input" type="radio" id="country" />
        <label  id="label" for="country" style=" font-weight: 700">HINDI</label>

        <input class="input" type="radio" id="country" />
        <label  id="label" for="country" style=" font-weight: 700">ENGLISH</label>

        <input class="input" type="radio" id="country" />
        <label  id="label" for="country" style=" font-weight: 700">FRENCH</label>

        <input class="input" type="radio" id="country" />
        <label  id="label" for="country" style=" font-weight: 700">CHINESE</label>
      </div>
      <div class="form-div">
        
        <label  id="label" for="name">EMERGENCY NAME</label>
        <input class="input" type="text"  />
      </div>
      <div class="form-div">
        
        <label  id="label" for="phone">EMERGENCY NUMBER</label>
        <input class="input" type="tel"  />
      </div><br><br>
      <button @click="Secondpg">NEXT</button><br><br>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    Secondpg() {
      this.$router.push('/sec');
    },
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
  display: flex;
  margin-left: 40px;
  justify-content: center;
  justify-items: center;
}
form{
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
.input{
  border: 2px solid white;
  background: transparent;
  color: white;
}
button{
  width: 100px;
  background-color: aquamarine;
  border-radius: 12px;
}
</style>
