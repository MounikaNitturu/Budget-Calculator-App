import { Component, DoCheck, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from 'src/app/shared/budget-item.model';
import { IncomeExpensesService } from 'src/app/shared/income-expenses.service';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent{
  incomeItems:BudgetItem[]=[]
  expenseItems:BudgetItem[]=[]
  @Output() incomeDeleted=new EventEmitter<Number>()
  @Output() expenseDeleted=new EventEmitter<Number>()
  constructor(private service:IncomeExpensesService){
    this.incomeItems=this.service.incomeArray;
    this.expenseItems=this.service.expenseArray;
  }
  ondeleteincome(item:any){
   let index=this.service.incomeArray.indexOf(item)
  this.service.incomeArray.splice(index,1)
  this.incomeDeleted.emit(item.amount)
  }
  ondeleteexpense(item:any){
    let index=this.service.expenseArray.indexOf(item)
    this.service.expenseArray.splice(index,1)
    this.expenseDeleted.emit(item.amount)
  }

}
