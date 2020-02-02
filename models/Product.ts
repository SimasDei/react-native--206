import { IProduct } from '../types';

export class Product implements IProduct {
  id: IProduct['id'];
  ownerId: IProduct['ownerId'];
  imageUrl: IProduct['imageUrl'];
  title: IProduct['title'];
  description: IProduct['description'];
  price: IProduct['price'];

  constructor(
    id: Product['id'],
    ownerId: IProduct['ownerId'],
    imageUrl: IProduct['imageUrl'],
    title: IProduct['title'],
    description: IProduct['description'],
    price: IProduct['price'],
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}
