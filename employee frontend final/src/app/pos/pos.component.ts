import { Component, OnInit } from '@angular/core';
import { PosService } from './pos.service'; // Correct path
import { Pos } from './pos.model'; // Correct path

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
  products: Pos[] = [];

  constructor(private posService: PosService) { }

  ngOnInit(): void {
    this.posService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }
}
