import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-otros-card',
  templateUrl: './otros-card.component.html',
  template: `{{ productos | json }}
  <p>{{Value |currency:'COP':'symbol-narrow'}}</p>`,
  styleUrls: ['./otros-card.component.css']
})
export class OtrosCardComponent implements OnInit {

  public show:boolean = false;
  public show2:boolean = false;
  public cuentas:number = this.getProductosNotBanco('DEPOSIT_ACCOUNT');
  public tarjetas:number = this.getProductosNotBanco('CREDIT_CARD');

  toggle1(){
    this.show = !this.show;
  }
  toggle2(){
    this.show2 = !this.show2;
  }

  constructor(@Inject('PRODUCTOS') public productos: any[]) {
  }

  getProductosNotBanco(productType?: string) :number {
    let result:any[] = [];
    result = this.productos.filter( product => product.accountInformation.bank != 'BANCO_1' );
    if ( productType ) {
      result = result.filter( product => product.accountInformation.productType === productType );
    } 
    console.log("Result " , result);
    return result.length;
  }

 

  ngOnInit(){
    this.getProductosNotBanco();
  }

}
