import { Component, Inject } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

/*Importamos la base de datos de las cuentas*/
//import data  from './data/data.json'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `{{ productos | json }}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pruebas-BDO';
  public show:boolean = false;

  constructor(@Inject('PRODUCTOS') public productos: any[]) {
    console.log(this.productos);
  }

  toggleBancos(){
    this.show = !this.show;
  }

  ngOnInit(): void {
  }
  
}
