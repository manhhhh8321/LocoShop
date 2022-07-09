
const Product = require('./product')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/locoshop', {

});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const name = ['Hodie', 'Bag', 'Sweater', 'Sunglasses', 'Sneakers', 'Wallet']
const color = ['Yellow', 'Green', 'Black', 'White', 'Brownie', 'Camo']
const description = "There's something puzzling about him, perhaps it's a feeling of joy or perhaps it's simply a feeling of arogance. But nonetheless, people tend to shower him with gifts, while helping him out in any way they can."
const categories = ['Men', 'Woman', 'Accesories']

const seedDB = async () => {
    await Product.deleteMany({});
   for (let i=0; i<20; i++) {
        let randomNum = Math.floor(Math.random()*100);
        let randomName = Math.floor(Math.random()*6);
        let randomImage = Math.floor(Math.random()*10+1);
        let randomCate = Math.floor(Math.random()*3);
        let randomDiscount = Math.floor(Math.random()*20);
        const product = new Product({
            title: `${color[randomName]+" "+name[randomName]}`,
            description: description,
            price: `${randomNum}`,
            quantities: `${randomNum+randomImage}`,
            hidden: false,
            discount: randomDiscount+randomNum,
            image: `product_${randomImage}`,
            categories: `${categories[randomCate]}`,
            color: `${color[randomName]}`
        })
        await product.save();
   }
    
}



seedDB()

