import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://citrine-india.herokuapp.com/` // heroku app 
  })
}
