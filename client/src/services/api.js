import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://citrineindia.herokuapp.com/` // heroku app https://citrine-india.herokuapp.com/
  })
}
