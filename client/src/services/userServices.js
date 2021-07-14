import Api from '../services/api'

export default{
  
  index (search, page) {
    return Api().get('admin/users/get', {
      params: {
        page,
        search: search
      }
    })
  },
  user (id) {
    return Api().get(`admin/users/${id}`)
  },
  previousOrders (id) {
    return Api().get(`dashboard/previousorders/${id}`)
  },
  changeRole (id, role) {
    return Api().post('admin/user/changerole', {id, role})
  }
}

  