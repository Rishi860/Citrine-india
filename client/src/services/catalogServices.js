import Api from '../services/api'

export default{
  save (credentials) {
    return Api().post('admin/product/create', credentials, { headers: {
      "Content-Type": "multipart/form-data"
    }})
  },
<<<<<<< HEAD
  cart (id) {
    return Api().get(`cart/${id}`)
  }
=======
  index (search, page) {
    return Api().get('admin/product', {
      params: {
        page,
        search: search
      }
    })
  },
>>>>>>> 62cb7031b0a25826c654381cb3379ce3bf5d61c4
}
