import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventasVistas',
  templateUrl: './ventasVistas.component.html',
  styleUrls: ['./ventasVistas.component.css']
})
export class VentasVistasComponent implements OnInit {

  ventas!: VentasInter[];

  constructor() { 
  }

  ngOnInit() {
    this.ventas = [
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

interface VentasInter {
  id: number,
  cliente: string,
  producto: string,
  cantidad: number,
  total: number,
  fecha: string,
  vendedor: string
}
