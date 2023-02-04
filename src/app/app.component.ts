import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'BMI-Calculator';
  BMI: any;
  weight: any;
  height: any;
  status: any;

  bmi(height: number, weight: number) {
    let status: String = "";
    const bmi: number = (weight / height / height * 10000);
    console.log(bmi);
    this.weight = ' ';
    this.height = ' ';
    if(bmi < 16){
      status = "Severe Thinness";
    }
    else if((bmi>=16)&&(bmi<17)){
      status = "Moderate Thinness";
    }
    else if((bmi>=17)&&(bmi<18.5)){
      status = "Mild Thinness";
    }
    else if((bmi>=18.5)&&(bmi<25)){
      status = "Normal";
    }
    else if((bmi>=25)&&(bmi<30)){
      status = "Over Weight";
    }
    else if((bmi>=30)&&(bmi<35)){
      status = "Obese Class - I";
    }
    else if((bmi>=35)&&(bmi<40)){
      status = "Obese Class - II";
    }
    else if((bmi>=40)){
      status = "Obese Class - III";
    }
    this.BMI = Math.floor(100 * bmi) / 100 //FLOOR(100*your_number)/100;
    this.status = status;

    return (bmi+"" +status);
  }
}


