import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public show:boolean = false;
  public show2:boolean = false;
  toggle1(){
    this.show = !this.show;
  }
  toggle2(){
    this.show2 = !this.show2;
  }

  constructor() { }
  productos : any = [
    {
      accountInformation: {
        accountIdentifier: '230070000138',
        productType: 'DEPOSIT_ACCOUNT',
        currencyCode: 'COP',
        bank: 'BANCO_1'
      },
      locked: true,
      id: '230070000138',
      typeAccount: 'DEPOSIT_ACCOUNT',
      status: 'ACTIVE',
      dueDate: '2019-12-03T10:32:58.175',
      lastTransactionDate: '2019-12-03T10:32:57.95',
      productAccountBalances: {
        saldo_canje: {
          amount: 0
        },
        saldo_disponible: {
          amount: 462911045.96
        },
        saldo_canje_48_horas: {
          amount: 0
        },
        saldo_canje_72_horas: {
          amount: 0
        },
        saldo_canje_24_horas: {
          amount: 0
        },
        saldo_ayer: {
          amount: 462916645.96
        },
        saldo_actual: {
          amount: 462916645.96
        }
      }
    },
    {
      accountInformation: {
        accountIdentifier: '210050000546',
        productType: 'DEPOSIT_ACCOUNT',
        currencyCode: 'COP',
        bank: 'BANCO_3'
      },
      locked: true,
      id: '210050000546',
      typeAccount: 'DEPOSIT_ACCOUNT',
      status: 'ACTIVE',
      dueDate: '2019-12-03T10:33:00.02',
      lastTransactionDate: '2019-12-03T10:32:59.79',
      productAccountBalances: {
        saldo_canje: {
          amount: 0
        },
        saldo_disponible: {
          amount: 0
        },
        saldo_canje_48_horas: {
          amount: 0
        },
        saldo_canje_72_horas: {
          amount: 0
        },
        saldo_canje_24_horas: {
          amount: 0
        },
        saldo_ayer: {
          amount: 12571.72
        },
        saldo_actual: {
          amount: 12571.72
        }
      }
    },
    {
      accountInformation: {
        accountIdentifier: '210150000347',
        productType: 'DEPOSIT_ACCOUNT',
        currencyCode: 'COP',
        bank: 'BANCO_1'
      },
      locked: true,
      id: '210150000347',
      typeAccount: 'DEPOSIT_ACCOUNT',
      status: 'ACTIVE',
      dueDate: '2019-12-03T10:33:01.957',
      lastTransactionDate: '2019-12-03T10:33:01.73',
      productAccountBalances: {
        saldo_canje: {
          amount: 0
        },
        saldo_disponible: {
          amount: 6376629.58
        },
        saldo_canje_48_horas: {
          amount: 0
        },
        saldo_canje_72_horas: {
          amount: 0
        },
        saldo_canje_24_horas: {
          amount: 0
        },
        saldo_ayer: {
          amount: 9076629.58
        },
        saldo_actual: {
          amount: 9076629.58
        }
      }
    },
    {
      accountInformation: {
        accountIdentifier: '210777000035',
        productType: 'DEPOSIT_ACCOUNT',
        currencyCode: 'COP',
        bank: 'BANCO_2'
      },
      locked: true,
      id: '210777000035',
      typeAccount: 'DEPOSIT_ACCOUNT',
      status: 'ACTIVE',
      dueDate: '2019-12-03T10:33:04.181',
      lastTransactionDate: '2019-12-03T10:33:03.98',
      productAccountBalances: {
        saldo_canje: {
          amount: 0
        },
        saldo_disponible: {
          amount: 56582827.52
        },
        saldo_canje_48_horas: {
          amount: 0
        },
        saldo_canje_72_horas: {
          amount: 0
        },
        saldo_canje_24_horas: {
          amount: 0
        },
        saldo_ayer: {
          amount: 56588427.52
        },
        saldo_actual: {
          amount: 56588427.52
        }
      }
    },
    {
      accountInformation: {
        accountIdentifier: '210040721177',
        productType: 'DEPOSIT_ACCOUNT',
        currencyCode: 'COP',
        bank: 'BANCO_1'
      },
      locked: true,
      id: '210040721177',
      typeAccount: 'DEPOSIT_ACCOUNT',
      status: 'ACTIVE',
      dueDate: '2019-12-03T10:33:06.434',
      lastTransactionDate: '2019-12-03T10:33:06.21',
      productAccountBalances: {
        saldo_canje: {
          amount: 0
        },
        saldo_disponible: {
          amount: 68329846.81
        },
        saldo_canje_48_horas: {
          amount: 0
        },
        saldo_canje_72_horas: {
          amount: 0
        },
        saldo_canje_24_horas: {
          amount: 0
        },
        saldo_ayer: {
          amount: 68329846.81
        },
        saldo_actual: {
          amount: 68329846.81
        }
      }
    },
    {
      accountInformation: {
        accountIdentifier: '4544769920667610',
        productType: 'CREDIT_CARD',
        bank: 'BANCO_2'
      },

      locked: true,
      id: '4544769920667610',
      typeAccount: 'CREDIT_CARD',
      dueDate: '2019-12-26T00:00:00',
      productAccountBalances: {
        pago_total_pesos: {
          amount: -126012.54,
          currencyCode: 'COP'
        },
        cupo_disponible_avances_pesos: {
          amount: 35000000,
          currencyCode: 'COP'
        },
        saldo_mora_pesos: {
          amount: 0.38,
          currencyCode: 'COP'
        },
        saldo_actual: {
          amount: -126012.54,
          currencyCode: 'COP'
        },
        cupo_disponible_compras_pesos: {
          amount: 35000000,
          currencyCode: 'COP'
        },
        valor_pago_minimo: {
          amount: 0.38,
          currencyCode: 'COP'
        },
        cupo_total: {
          amount: 35000000,
          currencyCode: 'COP'
        }
      },
      capacity: 100
    },
    {
      accountInformation: {
        accountIdentifier: '5201897302970640',
        productType: 'CREDIT_CARD',
        bank: 'BANCO_1'
      },
      locked: true,
      id: '5201897302970640',
      typeAccount: 'CREDIT_CARD',
      dueDate: '2019-12-05T00:00:00',
      productAccountBalances: {
        pago_total_pesos: {
          amount: 105968,
          currencyCode: 'COP'
        },
        cupo_disponible_avances_pesos: {
          amount: 24894032,
          currencyCode: 'COP'
        },
        saldo_mora_pesos: {
          amount: 5000,
          currencyCode: 'COP'
        },
        saldo_actual: {
          amount: 105968,
          currencyCode: 'COP'
        },
        cupo_disponible_compras_pesos: {
          amount: 24894032,
          currencyCode: 'COP'
        },
        valor_pago_minimo: {
          amount: 105968,
          currencyCode: 'COP'
        },
        cupo_total: {
          amount: 25000000,
          currencyCode: 'COP'
        }
      },
      capacity: 99.576128
    }
  ];

  ngOnInit(){
    console.log(this.productos);
  }

}
