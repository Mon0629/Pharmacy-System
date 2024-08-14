import { Component, OnInit } from '@angular/core';
import { PosService } from './pos.service'; 
import { Pos } from './pos.model'; 
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
  products: Pos[] = [];
  cart: { name: string; price: number; quantity: number }[] = [];
  logoBase64: string = ''; 

  constructor(
    private posService: PosService, 
    private http: HttpClient,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.posService.getAllProducts().subscribe(data => {
      this.products = data;
    });

    this.loadLogo();
  }

  loadLogo(): void {
    this.http.get('assets/logo.png', { responseType: 'blob' }).subscribe(blob => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.logoBase64 = (reader.result as string).split(',')[1]; 
      };
      reader.readAsDataURL(blob);
    });
  }

  addToCart(product: Pos): void {
    const existingItem = this.cart.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ name: product.name, price: product.price, quantity: 1 });
    }
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeFromCart(item: { name: string; price: number; quantity: number }): void {
    this.cart = this.cart.filter(cartItem => cartItem !== item);
  }

  printReceipt(): void {
    const confirmed = confirm('Check out the items on the cart?');
    if (!confirmed) {
      return; 
    }

    const doc = new jsPDF();

    const imgWidth = 20;
    const imgHeight = 20;
    doc.addImage(this.logoBase64, 'PNG', 14, 10, imgWidth, imgHeight );
    
    const title = 'Official Receipt';
    doc.setFontSize(18);
    const titleXPosition = imgWidth + 20; 
    doc.text(title, titleXPosition, 25);

    const receiptDate: string = new Date().toISOString().split('T')[0];
    doc.setFontSize(12);
    doc.text(`Date: ${receiptDate}`, 14, 50);

    (doc as any).autoTable({
      head: [['Product', 'Quantity', 'Price']],
      body: this.cart.map(item => [
        item.name,
        item.quantity,
        `$${item.price * item.quantity}`
      ]),
      startY: 60
    });

    doc.setFontSize(14);
    const total = this.getTotal();
    doc.text(`Total: $${total}`, 14, (doc as any).lastAutoTable.finalY + 10);

    doc.save('receipt.pdf');

    this.cart = []; 

    this.router.navigate(['/message']); 
  }
}
