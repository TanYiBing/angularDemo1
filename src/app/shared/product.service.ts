import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Array<Product> = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是在控制器中模拟从服务器拿来的数据的', ['电子产品', '硬件产品']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，是在控制器中模拟从服务器拿来的数据的', ['电子产品', '硬件产品']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，是在控制器中模拟从服务器拿来的数据的', [ '硬件产品']),
    new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，是在控制器中模拟从服务器拿来的数据的', ['电子产品']),
    new Product(5, '第五个商品', 5.99, 2.5, '这是第五个商品，是在控制器中模拟从服务器拿来的数据的', ['图书']),
    new Product(6, '第六个商品', 6.99, 4.5, '这是第六个商品，是在控制器中模拟从服务器拿来的数据的', ['电子产品', '硬件产品'])
  ];
  private comments: Array<Comment> = [
    new Comment(1, 1, '2018-09-01 22:22:22', '张三', 4.5, '东西很好用，和我想象的一样'),
    new Comment(2, 1, '2018-09-02 12:12:12', '李四', 2, '东西还没用就坏掉了，差评'),
    new Comment(3, 1, '2018-09-03 15:15:15', '王五', 4, '东西很还不错，很好用'),
    new Comment(4, 2, '2018-09-03 02:12:32', '赵刘', 3, '东西一般般，没我想象的好')
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find( (product: Product) => product.id === id );
  }

  getCommentsByProductId(id: number): Array<Comment> {
    return this.comments.filter( (comment: Comment) => comment.productId === id );
  }
}


export class Product {
  constructor (
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public proDesc: string,
    public categoryies: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timeStamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
