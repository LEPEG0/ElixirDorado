import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras-vistas',
  templateUrl: './compras-vistas.component.html',
  styleUrls: ['./compras-vistas.component.css']
})
export class ComprasVistasComponent implements OnInit{
  compras!:ComprasInter[];

  constructor(){

  }

  ngOnInit(): void {
      this.compras = [
        {
          id: 1,
          cliente: "cli1",
          producto: "prod1",
          cantidad: 1,
          total: 1,
          fecha: "fec1",
          vendedor: "ven1"
        },
        {
          id: 2,
          cliente: "cli2",
          producto: "prod1",
          cantidad: 1,
          total: 1,
          fecha: "fec1",
          vendedor: "ven1"
        }, 
        {
          id: 3,
          cliente: "cli3",
          producto: "prod1",
          cantidad: 1,
          total: 1,
          fecha: "fec1",
          vendedor: "ven1"
        }
      ]
  }
}

interface ComprasInter {
  id: number,
  cliente: string,
  producto: string,
  cantidad: number,
  total: number,
  fecha: string,
  vendedor: string
}
