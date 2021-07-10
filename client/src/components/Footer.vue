<template>
  <v-footer
    color = "rgba(240, 240, 242, 1)"
    padless
    class="footer"
  >
    <!-- mobile version code -->
    
    <v-container class="hidden-md-and-up">
      <v-row>
          <v-col cols="1" class="mt-4">
            <v-icon id="changeimagesize" color="black">mdi-phone</v-icon>
          </v-col>
          <v-col cols="8" class="ml-n5">
            <v-col class="black--text"><p id="changesize">+919829558616</p><p id="changesize">+919829558616</p></v-col>
          </v-col>
          <v-col cols="1" class="mr-4 mt-4" ><v-icon id="changeimagesize">mdi-instagram</v-icon></v-col>
          <v-col cols="1" class="mt-4"><v-icon id="changeimagesize">mdi-facebook</v-icon></v-col>
        </v-row>
        <v-row class="mt-n10">
          <v-col cols="1" class="mt-1">
            <v-icon id="changeimagesize">mdi-email</v-icon>
          </v-col>
          <v-col cols="11" class="ml-n5">
            <v-col><p id="changesize">hello@citrineindia.com</p></v-col>
          </v-col>
        </v-row>
        <v-row class="mt-n10">
          <v-col cols="1" class="mt-1">
            <v-icon id="changeimagesize">mdi-map-marker</v-icon>
          </v-col>
          <v-col cols="11" class="ml-n5">
            <v-col ><p id="changesize">7,Desh Bhushan Nagar, Delhi Bypass Road , Jaipur-302003</p></v-col>
          </v-col>
        </v-row>
        <v-row class="justify-center mb-10">
          <v-btn
            text
            id="changesize"
          >
            Terms & Counditions
          </v-btn>
          <v-btn
            text 
            id="changesize"
          >
            Shiping & Returns
          </v-btn>
        </v-row>
        <v-text
          md="4"
          id="changesize"
          class="justify-center mt-n10"
        >
          Copyright @ {{ new Date().getFullYear() }}. CitrineIndia. All rights reserved.<span >A creation by <span id="changefonttogara"> bonkers </span></span>
        </v-text>
    </v-container>


    <!-- end of mobile version code -->


    <!-- desktop version code -->
    <v-container class="hidden-sm-and-down">
        <h1 class="display-3 my-10" id="heading">CitrineIndia</h1>
        <v-text
          class="grey--text py-4 text-center copyright mt-10"
          md="4"
        >
          Copyright @ {{ new Date().getFullYear() }}.<strong> CitrineIndia. All rights reserved.</strong>
        </v-text>
        <!-- <v-divider dark="true"></v-divider> -->
      <!-- <div class="caption grey--text text-center" id="description"><p class="pt-10 mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro distinctio, sequi illum voluptas veniam alias exercitationem numquam quo, quos sed vitae dolorum consectetur reprehenderit architecto. Odit sunt facilis cum atque?</p></div> -->
      <!-- <v-row
        justify="center"
        no-gutters
        class="pt-10 mb-10"
      > -->
      <v-row class="mt-10 mb-1">
        <v-col md="2">
          <v-btn
            v-for="k in 4"
            :key="k"
            text
            class="my-2 font-weight-bold"
            @click="navigateTo({name:`${keys[k-1].link}`})"
          >
            {{ keys[k-1].name }}
          </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn
            v-for="k in 3"
            :key="k"
            text
            class="my-2 font-weight-bold"
            @click="navigateTo({name:`${keys[k+3].link}`})"
          >
            {{ keys[k+3].name }}
          </v-btn>
        </v-col>
        <v-col md="1"></v-col>
        <v-col md="5" >
          <v-row>
            
            <v-col md="1" >
              <v-icon>mdi-phone</v-icon>
            </v-col>
            <v-col md="11" >
              <p>+919829558616</p>
              <p>+919166469999</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="1">
              <v-icon>mdi-email</v-icon>
            </v-col>
            <v-col md="11" >hello@citrineindia.in</v-col>
          </v-row>
          <v-row>
            <v-col md="1">
              <v-icon>mdi-map-marker</v-icon>

</v-col>
            <v-col md="11" >7,Desh Bushan Nagar Delhi Bypass Road , Jaipur-302003</v-col>
          </v-row>
        </v-col>
        <v-col md="2">
          <v-btn
            v-for="i in 2 "
            :key="i"
            icon
            class="my-2 mr-10"
            @click="navigateTo({name:`${icons[i-1].name}`})"
          >
            <v-icon color="black">{{icons[i-1].image}}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>



<script>
export default {
  data: () => ({
    keys: [
      {name: 'Jewellery', link:'team'},
      {name: 'Collections', link:'contactus'},
      {name:'Deals', link:'tnc'},
      {name:'Trends', link:'tnc'},
      {name:'About', link:'tnc'},
      {name:'Terms & Conditions', link:'tnc'},
      {name:'Shiping & Returns', link:'tnc'},
    ],
    contactdetails :[
      {image:'mdi-phone' , text:'+91 9829558616 +91 9166469999'},
      {image:'mdi-email' , text:'hello@citrineindia.in'},
      {image:'mdi-map-marker' , text:'7,Desh Bhushan Nagar, Delhi Bypass Road , Jaipur-302003'},
    ],
    icons:[
      {name : '' , image:'mdi-facebook'},
      {name : '' , image:'mdi-instagram'},
    ]
  }),
  methods:{
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

.footer {
  font-family: 'Montserrat',sans-serif;
  margin-top: 8%;
  padding-top: 3%;
  padding-bottom: 2%;
}
.copyright {
  font-size: .75rem;
}

#heading {
    font-family: 'Cormorant Garamond', serif !important;
}

#changecolor{
  background-color :#EFEFF1 !important;
}

#givemargin{
  margin-right : 70px !important;
}

#changesize{
  font-size : 8px;
  margin-left : 0px;
  padding-left : 0px;
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight : normal;
  line-height: 10px;
  display: flex;
  align-items: center;
  letter-spacing: -0.2px;
  text-transform: capitalize;

  /* Prime Dark */

  color: #25181D !important;

  opacity: 0.75;
}

#changeimagesize{
  width : 12px;
  height : 16px;
  color: #25181D !important;
}

#changefonttogara{
    font-family: 'Cormorant Garamond', serif !important;
    font-style: normal !important;;
    font-weight: 700 !important;
    font-size: 10px !important;
    line-height: 9px !important;
    letter-spacing: -0.5px !important;
      text-transform: lowercase !important;
    color: #022331 !important;
  
}
</style>