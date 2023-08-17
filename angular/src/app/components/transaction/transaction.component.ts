import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITransaction } from 'src/app/models/transactio.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  @Input() transaction !: ITransaction;  //prop drilling
  @Output() removeTransactionEvent= new EventEmitter<string>()

  dateStyles:Record<string,string> ={
    'border-bottom':'1px dashed gray'
  };

  remove=()=>{
    // alert(`me hicieron click ${this.transaction.id}`)
    this.removeTransactionEvent.emit(this.transaction.id);
  };

}
