import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion = {};
  id:string="";

  constructor(private route:ActivatedRoute,
              public productoService:ProductoService) { }

  ngOnInit(): void {

    this.route.params
        .subscribe(parametros =>{

          this.productoService.getProductos(parametros['id'])
              .subscribe( (producto:any)=>{
                  this.id=parametros['id'];
                  this.producto = producto;
              });

        });

  }

}
