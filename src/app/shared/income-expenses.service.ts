import { Injectable } from '@angular/core';
import { BudgetItem } from './budget-item.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeExpensesService {

  constructor() { }
  incomeArray:BudgetItem[]=[];
  expenseArray:BudgetItem[]=[];

}
