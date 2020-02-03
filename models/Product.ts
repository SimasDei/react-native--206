import { IProduct } from '../types';

export class Product implements IProduct {
  id: IProduct['id'];
  ownerId: IProduct['ownerId'];
  title: IProduct['title'];
  imageUrl: IProduct['imageUrl'];
  description: IProduct['description'];
  price: IProduct['price'];

  constructor(
    id: Product['id'],
    ownerId: IProduct['ownerId'],
    title: IProduct['title'],
    imageUrl: IProduct['imageUrl'],
    description: IProduct['description'],
    price: IProduct['price'],
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}
