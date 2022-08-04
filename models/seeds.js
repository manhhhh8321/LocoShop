
const Product = require('./product');
const Blog = require('./blog');
const mongoose = require('mongoose');

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
  for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    let randomName = Math.floor(Math.random() * 6);
    let randomImage = Math.floor(Math.random() * 10 + 1);
    let randomCate = Math.floor(Math.random() * 3);
    let randomDiscount = Math.floor(Math.random() * 20);
    let rd = Math.floor(Math.random() * 2);
    const product = new Product({
      title: `${color[randomName] + " " + name[randomName]}`,
      description: description,
      price: `${randomNum + randomDiscount + 20}`,
      quantities: `${randomNum + randomImage}`,
      hidden: false,
      discount: randomDiscount,
      image: `product_${randomImage}`,
      categories: `${categories[randomCate]}`,
      color: `${color[randomName]}`,
      onsale: `${rd}`
    })
    await product.save();
  }

}

const title = ['Những chất liệu sơ mi thoáng mát cho mùa hè', 'Vải Linen trong Xuân Hè 2022 của Zofal', 'Tự tin diện đẹp mùa Thu Đông với 3 chất liệu không thể thiếu trong tủ đồ', 'Điểm tên những họa tiết ấn tượng cho ngày giao mùa năng động']
const content = ['BST Xuân hè 2022 mang những họa tiết đặc trưng của mùa hè kết hợp cùng chất liệu cao cấp đa dạng của vải Linen thoáng mát giúp đem đến cho người diện một diện mạo thật mộc mạc, giản dị mà không kém phần thanh lịch, nổi bật. Bên cạnh đó, các thiết kế nằm trong BST lần này còn đem lại rất nhiều sự lựa chọn đa dạng cho những cô nàng từ nhẹ nhàng đến các tính với các màu sắc từ nhạt đến đậm. Chắc chắn những thiết kế của Zofal trong BST Xuân Hè 2022 lần này sẽ không khiến các tín đồ thời trang phải thất vọng. ', 'Vải lanh luôn là chất liệu được nhiều chị em  yêu thích lựa chọn trong mùa hè. Bởi Linen là chất liệu âm thầm bảo vệ da chị em phụ nữ mỗi khi nhiệt độ tăng cao. Với đặc tính thấm hút và nhả nước tốt, các thiết kế chất liệu linen có thể chịu được độ ẩm lên tới 20%, loại vải này có thể “soán ngôi” rất nhiều chất liệu khác trong “cuộc đua” chất liệu được yêu thích nhất trong mùa Hè. Quần áo, váy đầm linen luôn tạo cảm giác thoáng mát, nhẹ nhàng, là giải pháp hạ nhiệt yêu thích của các cô nàng công sở.', 'Vải thun lạnh thường có đặc điểm mềm mịn khá bóng và trơn nên khi sờ người ta thường thấy cảm giác mát lạnh. Đồng thời khi diện những trang phục bằng chất liệu thun lạnh vào mùa hè sẽ tạo cho người dùng cảm giác mát lạnh, vô cùng thoải mái trong suốt quá trình sử dụng. Ngoài ra vải thun lạnh còn có đặc điểm nổi bật là không nhăn và rất dễ giặt sạch khi bẩn. Mức giá của vải thun lạnh còn tương đối rẻ. Đây cũng chính là lý do vải thun lạnh trở thành chất liệu phổ biến trên thị trường thời trang Việt Nam với những ưu điểm nổi bật.', 'Lụa là loại vải mịn, mỏng được dệt bằng tơ tằm. Vì đây là chất liệu được sản xuất từ tự nhiên 100% với những quy trình thủ công nên loại vải này thường có ưu điểm bền và chắc chắn hơn các chất liệu thông thường. Đây cũng có một trong những lý do vải lụa là chất liệu vô cùng an toàn với da và không gây kích ứng da. Khác hẳn với những chất liệu sợi nylon thì vải lụa lại có tính thấm hút mồ hôi cực kỳ tốt và đặc biệt phù hợp với mọi thời tiết từ mát mẻ đến ấm áp. Vậy nên nếu bạn đang tìm kiếm một chất liệu thoáng mát, thoải mái cho mùa hè thì lụa chắc chắn sẽ đáp ứng được hết tất cả những yêu cầu mà bạn đề ra. Tuy nhiên chúng lại là một trong những chất liệu vải đặc biệt, cao cấp và thường có giá thành khá là cao nên thường ít được lựa chọn.']
const author = ['Jame smith', 'Jaden Vu', 'Andy Hoang', 'Collab Mc Jeans']

const seedBlog = async () => {
  await Blog.deleteMany({});

  for (let i = 0; i < 4; i++) {
    let randomN = Math.floor(Math.random() * 3 + 1);
    const newBlog = new Blog({
      title: title[i],
      content: content[i],
      author: author[i],
      image: `blog_${randomN}`,
    })
    await newBlog.save();
  }

 
  


}
seedBlog()


