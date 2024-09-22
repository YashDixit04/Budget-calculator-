import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.module';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // calculate = output<InvestmentInput>(); //--> use of output function
  // @Output() calculate = new EventEmitter<InvestmentInput>(); // --> use of output decorator.
  enteredInitialInvestment = signal('');
  enteredAnnualInvestment = signal('');
  enteredExpectedInvestment = signal('5');
  enteredDuration = signal('10');
  // without signal --------->>>>>>>>>>
  // enteredInitialInvestment = '';
  // enteredAnnualInvestment = '';
  // enteredExpectedInvestment = '5';
  // enteredDuration = '10';

  constructor(private investmentService: InvestmentService){}

  onSubmit() {
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });

    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExpectedInvestment(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
      // without signal ------>>>>>>>>
      // initialInvestment: +this.enteredInitialInvestment,
      // duration: +this.enteredDuration,
      // expectedReturn: +this.enteredExpectedInvestment,
      // annualInvestment: +this.enteredAnnualInvestment,
    // })
    this.enteredInitialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredDuration.set('10')
    this.enteredExpectedInvestment.set('5')
  }
}
