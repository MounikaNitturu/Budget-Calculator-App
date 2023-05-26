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
  // incomeArray:BudgetItem[]=[];
  // expenseArray:BudgetItem[]=[];
  constructor(private service:IncomeExpensesService){

  }

  onaddincome(event:any){
    // console.log(event)
    this.moneyEarned+=event.amount
    this.moneyAvailable+=event.amount
    this.service.incomeArray.push(event)
    // console.log(this.service.incomeArray)
  }
  onaddexpense(event:any){
    // console.log(event)
    this.moneyAvailable-=event.amount;
    this.moneySpent+=event.amount;
    this.service.expenseArray.push(event)
    // console.log(this.service.expenseArray)
  }
  incomeItemDeleted(incomeremoved:any){
    this.moneyEarned-=incomeremoved
    this.moneyAvailable-=incomeremoved
    console.log(`Income delted ${incomeremoved}`)
  }
  expenseItemDeleted(expenseremoved:any){
    this.moneySpent-=expenseremoved
    this.moneyAvailable+=expenseremoved
    console.log(`Expense delted ${expenseremoved}`)
  }
}
