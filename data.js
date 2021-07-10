const fs = require('fs');
const fileName = './earings.json'
let file = require(fileName)

function imageAdd(data) {
    updatedfile = []
    updatedfile = data.map(element => {
        element.image = []
        element.image.push(`https://citrine-india-site.s3.ap-south-1.amazonaws.com/earings/${element.productCode}.jpg`);
        console.log(element)
        return element
    });
    
    fs.writeFile('./updatedearings.json', JSON.stringify(updatedfile, null ,2), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(updatedfile));
        // console.log('writing to ' + fileName);
    });
}

imageAdd(file);
