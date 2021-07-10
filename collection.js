const Product = require('./server/models/Products')
const Collection = require('./server/models/collections')

async function createcoll(value,img) {
    try {
        const doc = await Product.find({name:value});
        let ids = doc.forEach(element => {
            return element._id;
        })
        await Collection.create({
            name:value,
            image:img,
            products: ids
        })
    } catch (error) {
        console.log(error)
    }
}

createcoll("Bracelet Rakhi", 'imgurl')