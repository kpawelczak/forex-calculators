import { Component } from '@angular/core';


@Component({
    selector: 'fib-calc',
    templateUrl: './fib-calc.component.html',

inputs: ['Low']
})

export class FibCalcComponent {

    public childData: string;

    public High: number
    public Low: number

    public Range: number
    public type: String
    public result_236: string
    public result_382: string
    public result_50: string
    public result_618: string

    cal_fib() {

        this.Range = this.High - this.Low

        if (this.type === 'Long') {

            this.result_236 = ((this.Range * 0.764) + this.Low).toFixed(5)
            this.result_382 = ((this.Range * 0.618) + this.Low).toFixed(5)
            this.result_50 = ((this.Range * 0.50) + this.Low).toFixed(5)
            this.result_618 = ((this.Range * 0.382) + this.Low).toFixed(5)
        }
        if (this.type === 'Short') {

            this.result_236 = (this.High - (this.Range * 0.764)).toFixed(5)
            this.result_382 = (this.High - (this.Range * 0.618)).toFixed(5)
            this.result_50 = (this.High - (this.Range * 0.50)).toFixed(5)
            this.result_618 = (this.High - (this.Range * 0.382)).toFixed(5)

        }
    };

}
