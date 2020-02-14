import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  template: `{{ productos | json }}`,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  /*Booleanos que definen si mostrar los productos del banco o no... */
  public show:boolean = false;
  public show2:boolean = false;

  /*Numbers que tienen la cantidad de productos en el banco */
  public cuentas:number = this.getProductosBanco('DEPOSIT_ACCOUNT');
  public tarjetas:number = this.getProductosBanco('CREDIT_CARD');

  toggle1(){
    this.show = !this.show;
  }
  toggle2(){
    this.show2 = !this.show2;
  }

  constructor(@Inject('PRODUCTOS') public productos: any[]) {

}

  getProductosBanco(productType?: string) :number {
    let result:any[] = [];
    result = this.productos.filter( product => product.accountInformation.bank === 'BANCO_1' );
    if ( productType ) {
      result = result.filter( product => product.accountInformation.productType === productType );
    } 
    console.log("Result " , result);
    return result.length;
  }



  ngOnInit(){
    this.getProductosBanco();
  }


}
