import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import Departamento from '../Departamento';

@Component({
  selector: 'app-conectar-servicios',
  templateUrl: './conectar-servicios.component.html',
  styleUrls: ['./conectar-servicios.component.css']
})
export class ConectarServiciosComponent implements OnInit {
  departamentos: Departamento[];
  serviciosForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: ProductsService) {
    this.createForm();
  }

  createForm() {
    this.serviciosForm = this.fb.group({
      sku: ['', Validators.required]
    });
  }

  ngOnInit() { }


  consultarPorSku(sku) {
    this.ps.
      consultarSku(sku).
      subscribe((data: Departamento[]) => {
        this.departamentos = data;
        console.log(this.departamentos);
      });
  }

}
