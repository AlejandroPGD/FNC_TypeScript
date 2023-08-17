import { Component, Input } from '@angular/core';
import { IBalance } from 'src/app/models/models';
import { ITransaction } from 'src/app/models/transactio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() transactionDelete!:string;

  balance1:IBalance={
    amount:55_000,
    income:10_000,
    expenses:45_000
  };
  balance2:IBalance={
    amount:52_000,
    income:102_000,
    expenses:42_000
  };

  transaction: ITransaction[]=[
    {
      id:'1', type:'expense', amount: 5_000, category:'utilities', date:new Date(2023,8,10),
    },
    {
      id:'2', type:'expense', amount: 15_000, category:'food', date:new Date(2023,8,11),
    },
    {
      id:'3', type:'income', amount: 80_000, category:'payroll', date:new Date(2023,8,12),
    },
   ];

   removeTransaction(transactionid:string){
    this.transaction=this.transaction.filter(t=>t.id!=transactionid)
   }
}
