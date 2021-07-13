<template>
  <div>
    <v-app-bar :color="bg" app flat hide-on-scroll height="104px">
      <v-toolbar-title  id="title" @click="navigateTo({name:'home'})" >Citrine</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        id="title-btn"
        class="hidden-sm-and-down"
        plain
        depressed
        @click="navigateTo({
          name: 'collections'
        })"
      >
        Deals
      </v-btn>
      <v-btn
        id="title-btn"
        class="hidden-sm-and-down"
        plain
        depressed
        @click="navigateTo({
          name: 'collections'
        })"
      >
        Collections
      </v-btn>
      <v-btn
        id="title-btn"
        plain
        class="hidden-sm-and-down"
        depressed
        @click="navigateTo({name:'jewelry'})"
      >
        Jewelery
      </v-btn>
      <v-btn
        icon
        class="hidden-sm-and-down"
        @click="navigateTo({
          name:'cart',
          params:{
            user:$store.state.user.name
          }
        })"
      >
        <v-badge
          color="#F0F0F2"
          :content="cartBadge"
        >
          <v-icon>
            mdi-cart
          </v-icon>
        </v-badge>
      </v-btn>
      <v-btn
        icon
        class="hidden-sm-and-down"
        @click="navigateTo({name:'dashboard'})"
      >
        <v-icon>
          mdi-account
        </v-icon>
      </v-btn>
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- rgba(37, 24, 29, 1) -->
    <v-navigation-drawer v-model="sideNav" app class="hidden-md-and-up" color="rgba(240, 240, 242, 1)" right>
      <!-- <v-container>
        <v-row class="text-center mt-1 ml-3 ">
            <v-icon size="50px">mdi-account-circle-outline</v-icon>
            <p id="hellotext" >Hello bonker</p>
        </v-row>
      </v-container> -->
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            @click="navigateTo({name:item.link})"
            id="changefont"
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="navigateTo({name :'login'})"
            id="changefont"
          >
            <v-list-item-title id="changefontcolor">Sign in/Sign Up</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <div class="text-center mt-10 " id="changefonttogara"><h1>Citrine</h1></div>
    </v-navigation-drawer>
  </div>
</template>

<script>

  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      changeColor() {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          this.bg = '#F0F0F2';
        } else {
          this.bg = 'transparent';
        }
      },
    },
    data: () => ({
      bg:null,
      sideNav: false,
      cartCount: null,
      menuItems: [
        {icon:'mdi-folder-open',title:'Collections'},
        {icon:'mdi-account',title:'Profile'},
        {icon:'mdi-store',title:'Sign Up'},
        {icon:'mdi-account',title:'Sign In'},
      ],
       admins: [
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      ],
      cruds:['Create','Read','Update','Delete','mdi-delete'],
    }),
    watch: {
      '$store.state.cart': {
        immediate: true,
        async handler (value) {
          this.cartCount = value
        }
      }
    },
    computed:{
      cartBadge: function () {
        return this.$store.getters.cartItemCount
      }
    },
    mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
  #title {
    font-family: 'Cormorant Garamond', serif;
    color: #25181D;
    font-size: 52px;
    letter-spacing: -.06em;
  }
  #title:hover{
    cursor: pointer;
  }
  #title-btn {
    font-family: 'Cormorant Garamond', serif;
    color: #25181D;
    font-size: 20px;
  }
  .v-text-field{
    width: 10px;
  }
  #hellotext{
    margin-bottom: 16px;
    margin-top: 15px;
    margin-left: 10px;
    font-size: 25px;
    color:rgba(240, 240, 242, 1);
  }
  #changefont{
    font-family: 'Montserrat' , sans-serif;
    letter-spacing: 0.01em;
    font-size: 24px;
    line-height: 100%;
    margin-left: 15px;
    color:rgba(240, 240, 242, 1) !important;
  }
  #changefonttogara{
  font-family: 'Cormorant Garamond', serif;
  font-size:30px;
  letter-spacing: -0.08em;
  line-height: 133.7%;
  color:rgba(240, 240, 242, 1);
  }
  #changefontcolor{
    color : rgba(251, 144, 18, 1) !important;
  }
/* .header{
  font-family: Montserrat;
  margin-bottom: 2%;
  margin-left: 3%;
  margin-right: 3%;
}
.logo{
  font-family: Ubuntu;
  font-size: 1.5rem;
}
.nav-items-home {
  text-decoration: underline;
}
.nav-items:hover {
  text-decoration: underline;
}
.drop:hover {
  cursor: pointer;
} */
</style>