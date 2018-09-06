import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;
  private comments: Array<Comment>;
  private newRating: number = 5;
  private newComment: string = '';
  private isCommentHidden = true;
  constructor(
    private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const productId: number =  +this.routeInfo.snapshot.params['prodId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsByProductId(productId);
  }

  addComment() {
    const comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    // tslint:disable-next-line:no-shadowed-variable
    const sum = this.comments.reduce( (sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;

    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
  onRatingChange(rating) {
    this.newRating = rating;
  }
}
