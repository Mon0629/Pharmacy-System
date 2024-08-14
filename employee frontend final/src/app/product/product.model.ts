export class Product {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    dosage: string;
    base64Image: string;
    stock: number;

    constructor(
      id: number,
      name: string,
      price: number,
      category: string,
      description: string,
      dosage: string,
      stock: number,
      base64Image?: string
    ) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.category = category;
      this.description = description;
      this.dosage = dosage;
      this.base64Image = base64Image || '';
      this.stock = stock;
    }
  }

