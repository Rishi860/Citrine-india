import Api from '../services/api'

export default{
  save (credentials) {
    return Api().post('admin/product/create', credentials, { headers: {
      "Content-Type": "multipart/form-data"
    }})
  },
  cart (id) {
    return Api().get(`cart/${id}`)
  }
}
