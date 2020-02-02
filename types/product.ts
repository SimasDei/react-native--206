export interface IProduct {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

export interface IProductsState {
  availableProducts: IProduct[];
  userProducts: IProduct[];
}
