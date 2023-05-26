import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  description?:String
  amount?:number
  onSubmit(form:NgForm){
    console.log(form)
  }
  @Output() addincome = new EventEmitter<object>();
  @Output() addexpense = new EventEmitter<object>();
  
  onIncomeAdd(){
    if(this.description!=undefined && this.amount !=undefined)
    this.addincome.emit({description:this.description,amount:this.amount})
    this.description='';
    this.amount=undefined
  }
  onExpenseAdd(){
    if(this.description!=undefined && this.amount !=undefined)
    this.addexpense.emit({description:this.description,amount:this.amount})
    this.description='';
    this.amount=undefined
  }
  letterOnly(event:any) {
  var charCode = event.keyCode;
  if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
    return true;
  else
    return false;
  }


}
