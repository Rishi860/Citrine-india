<template>
  <div id="collection">
    <div class="text-center">
      <h1>Jewellery</h1>
      <v-divider inset></v-divider>
    </div>

    <v-container class="pa-4 text-center">
      <v-row>
        <template >
          <v-col
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="card  align-end"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                max-width="432px"
                max-height="198px"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                  aspect-ratio="2.18"
                >
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="card  align-end"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                max-width="432px"
                max-height="198px"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                  aspect-ratio="2.18"
                >
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="card  align-end"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                max-width="320px"
                max-height="360px"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                  aspect-ratio="0.88"
                >
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
      <v-row>
        <template >
          <v-col
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="card  align-end"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                max-width="432px"
                max-height="198px"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                  aspect-ratio="2.18"
                >
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="card  align-end"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                max-width="432px"
                max-height="198px"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                  aspect-ratio="2.18"
                >
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                class="card  align-end"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                max-width="320px"
                max-height="360px"
              >
                <v-img
                  src="https://citrine-india-site.s3.ap-south-1.amazonaws.com/F8.jpeg"
                  aspect-ratio="0.88"
                >
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >

                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          :color="transparent"
                          icon
                        >
                          <v-icon
                            :class="{ 'show-btns': hover }"
                            :color="transparent"
                          >
                            {{ icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
  #collections{
    font-family: 'Cormorant Garamond', serif;
  }
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
  .card {
    transition: opacity .4s ease-in-out;
  }

  .card:not(.on-hover) {
    opacity: 0.6;
  }

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
</style>