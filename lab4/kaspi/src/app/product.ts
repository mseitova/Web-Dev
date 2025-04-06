export interface Product {
    name: string;
    description: string;
    image: string;
    gallery: string[];
    rating: number;
    link: string;
    
    constructor (id:string, name: string, description: string){
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }
  const productList: Product[]=[
    new Product(1, "Laptop", "Newest laptop"),
    new Product(2, "Phone", "Newest phone"),
  ]