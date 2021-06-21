<template>
  <div>
    <v-app-bar app flat hide-on-scroll height="105px">
      <v-toolbar-title  id="title" @click="navigateTo({name:'home'})" >Citrine-India</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        plain
        class="d-none d-sm-flex"
        id="title-btn"
      >
        Trends
      </v-btn>
      <v-btn
        id="title-btn"
        class="d-none d-sm-flex"
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
        class="d-none d-sm-flex"
        depressed
      >
        Jewelery
      </v-btn>
      <v-text-field
        rounded
        class="mt-7 d-none d-sm-flex"
        prepend-inner-icon="mdi-magnify"
        filled
      ></v-text-field>
      <v-tab
        v-if="$store.state.isUserLoggedin"
        @click="navigateTo({
          name:'cart',
          params:{
            user:$store.state.user.name
          }
        })"
      >
        <v-badge
          color="#25181D"
          :content="cartBadge"
        >
          <v-icon>
            mdi-cart
          </v-icon>
        </v-badge>
      </v-tab>
      <v-btn
          v-if="$store.state.isAdmin"
          id="title-btn"
          plain
          class="d-none d-sm-flex"
          depressed
          @click="navigateTo({name:'adminHome'})"
        >
          Admin
        </v-btn>
      <v-app-bar-nav-icon
        @click="sideNav = !sideNav"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="sideNav" app class="d-lg-none d-xl-flex" right>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            @click="navigateTo({name:item.link})"
          >
            <v-list-item-title>
              <v-icon>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout(){
        this.$store.dispatch('logout')
        this.$router.push({name:'home'})
      }
    },
    data: () => ({
      sideNav: false,
      cartCount: null,
      menuItems: [
        {icon:'mdi-folder-open',title:'Collections'},
        {icon:'mdi-account',title:'Profile'},
        {icon:'mdi-store',title:'Sign Up'},
        {icon:'mdi-account',title:'Sign In'},
      ],
      admins: ['Management','Settings'],
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
    }
  }
</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
  #title {
    font-family: 'Cormorant Garamond', serif;
    color: #25181D;
    font-size: 52px;
    letter-spacing: -.08em;
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