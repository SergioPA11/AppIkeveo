import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gafas } from '../models/gafas';
import { GafasService } from '../services/gafas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

 gafas: Gafas[];

  constructor(private gafasService: GafasService, private router: Router) { }

  ngOnInit() {
    this.getAllGafas();
  }

  ionViewDidEnter(){
    this.getAllGafas();
      }

  getAllGafas(){
    this.gafasService.getGafas().subscribe( gafas => {
      this.gafas = gafas;
      console.log(gafas);
    });
  }

  deleteGafas(id: number){
    this.gafasService.deleteGafas(id).subscribe(() => {
      this.getAllGafas();
    })
  };

  insertGafas(){
    this.router.navigateByUrl("/add-gafas");
  }

  updateGafas(id: number){
    this.gafasService.setCurrentGafasId(id);
    this.router.navigateByUrl("/update-gafas");
  }
}
