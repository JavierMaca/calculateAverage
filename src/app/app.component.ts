
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'pruebaRauxmedia';
  form: FormGroup;

  qualificationsArray = [];
  qualification = null;
  suma: number;
  average = 0;

constructor(private fb: FormBuilder){
  this.createForm();
}

ngOnInit(): void {
}

validField(){
  if (this.form.controls['qualification'].value != null && this.form.controls['qualification'].value != '') {
     return this.form.invalid;
  }
}

createForm(){
  this.form = this.fb.group({
    qualification: 
    [null, {validators: [Validators.required, Validators.pattern('^[.]?[0-9]+[.]?[0-9]*$')],updateOn: 'change'}]
  })
}

saveQualification(){
  this.qualification = parseFloat(this.form.controls['qualification'].value)
  this.qualificationsArray.push(this.qualification);
  this.calculateAverage(this.qualificationsArray);  
  this.form.reset();
}

calculateAverage(listNum: any[]){
  this.suma = 0;
  this.average = 0; 
  for(let i = 0; i < listNum.length; i++){
      this.suma += listNum[i];
  }
    this.average = this.suma/listNum.length;
}

reset(){
  this.qualificationsArray = [];
  this.average = 0;
}

} // fin class
