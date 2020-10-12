import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GafasService } from '../services/gafas.service';

@Component({
  selector: 'app-add-gafas',
  templateUrl: './add-gafas.page.html',
  styleUrls: ['./add-gafas.page.scss'],
})
export class AddGafasPage implements OnInit {

  gafasForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private gafasService: GafasService,
    private router: Router) { 
    this.gafasForm = this.fb.group({
      model: [''],
      brand: ['']
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.gafasForm.valid) {
      return false;
    } else {
      let gafas = {
        id: null,
        model: this.gafasForm.value.model,
        brand: this.gafasForm.value.brand
      }
      this.gafasService.addGafas(gafas)
        .subscribe((res) => {
          this.router.navigateByUrl('/list');
        });
      }
    }

}
