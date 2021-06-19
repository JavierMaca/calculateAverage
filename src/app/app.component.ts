
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
  qualification: number;
  suma: number;
  average = 0;

constructor(private fb: FormBuilder){
  this.createForm();
}

ngOnInit(): void {
}

createForm(){
  this.form = this.fb.group({
    qualification: ['', [Validators.required, Validators.pattern("^[.]?[0-9]+[.]?[0-9]*$")]],
  })
}

saveQualification(){
  if(this.form.invalid){
    console.log("INVALID");
    return;
  }

    else if(isNaN(this.form.controls['qualification'].value)){
    alert("debe ser numero");
    this.form.reset();
    return;
    }

  console.log("VALID: ",this.form);
  
  this.qualification = parseFloat(this.form.controls['qualification'].value)
  this.qualificationsArray.push(this.qualification);

  console.log("qualifications array: "+ this.qualificationsArray)
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
  //   console.log("SUM: "+ this.suma);
  //  console.log("AVERAGE: "+ this.average);  
}

reset(){
  this.qualificationsArray = [];
  this.average = 0;
}

} // fin class
