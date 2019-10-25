import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VentasService } from '../services/ventas.service'

@Component({
  selector: 'app-daily-ven',
  templateUrl: './daily-ven.component.html',
  styleUrls: ['./daily-ven.component.css']
})
export class DailyVenComponent implements OnInit {
  formVen: FormGroup;

  constructor(private fb: FormBuilder, private vs: VentasService) {
    this.createForm();
  }

  createForm() {
    this.formVen = this.fb.group({
      Local: ['', Validators.required]
    });
  }

  addVen(Local, Art, PrecB, PrecL, Tot) {
    this.vs.addVen(Local, Art, PrecB, PrecL, Tot);
  }

  ngOnInit() {
  }

}
