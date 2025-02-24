
export class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    likes: number;
    img: string;
    link: string;

    constructor(id: number, name: string, price: number, description: string, likes: number, img: string, link: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.likes = likes;
        this.img = img;
        this.link = link;
    }
}