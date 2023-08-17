import { Component,Input } from '@angular/core';
import { IBalance } from 'src/app/models/models';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  // @Input() title:string ='';
  // balance:IBalance={
  //   amount:55_000,
  //   income:100_000,
  //   expenses:45_000
  // }
  @Input() balance!:IBalance
}
