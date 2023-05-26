import { Component, Input } from '@angular/core';
import { BudgetItem } from 'src/app/shared/budget-item.model';
import { IncomeExpensesService } from 'src/app/shared/income-expenses.service';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent {
   @Input() isincome?:boolean=false
   @Input() isexpense?:boolean=false;
}
