import { Component } from '@angular/core';
import { BudgetItem } from 'src/app/shared/budget-item.model';
import { IncomeExpensesService } from 'src/app/shared/income-expenses.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  moneyEarned:number=0;
  moneyAvailable:number=0;
  moneySpent:number=0;
  constructor(private service:IncomeExpensesService){
  }

  onaddincome(event:any){
    this.moneyEarned+=event.amount
    this.moneyAvailable+=event.amount
    this.service.incomeArray.push(event)
  }
  onaddexpense(event:any){
    this.moneyAvailable-=event.amount;
    this.moneySpent+=event.amount;
    this.service.expenseArray.push(event)
  }
  incomeItemDeleted(incomeremoved:any){
    this.moneyEarned-=incomeremoved
    this.moneyAvailable-=incomeremoved
  }
  expenseItemDeleted(expenseremoved:any){
    this.moneySpent-=expenseremoved
    this.moneyAvailable+=expenseremoved
  }
}
