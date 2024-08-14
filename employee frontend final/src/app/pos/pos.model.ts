export class Pos {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    dosage: string;
    base64Image: string;
    quantity: number; // Add this line
  
    constructor(
      id: number,
      name: string,
      price: number,
      category: string,
      description: string,
      dosage: string,
      base64Image?: string,
      quantity?: number // Add this line
    ) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.category = category;
      this.description = description;
      this.dosage = dosage;
      this.base64Image = base64Image || '';
      this.quantity = quantity || 1; // Initialize with a default value
    }
  }
  