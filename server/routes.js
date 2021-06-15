const UserControllers = require('./controllers/UserControllers')
const ProductControllers = require('./controllers/ProductControllers.js')
const CartControllers = require('./controllers/CartControllers.js')
const {store} = require('./middleware/multer')

module.exports = (app) => {
    app.post('/register',
    UserControllers.register)
    app.post('/login',
    UserControllers.login)
    // app.get('/login/:id',
    // UserControllers.getCart)

    app.get('/product/:pname', ProductControllers.productAndRelated)

    app.post('/admin/product/create', store.array('imageFiles', 12),
    ProductControllers.upload)
    app.get('/admin/product/:id', ProductControllers.edit)
    app.get('/admin/product', ProductControllers.indexPaginated)

    app.get('/admin/users', UserControllers.indexPaginated)
    app.get('/admin/users/:id', UserControllers.user)

    app.post('/cart',
    CartControllers.post)
    app.delete('/cart/:userId/:productId',
    CartControllers.delete)
}
