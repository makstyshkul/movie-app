import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLength]',
  standalone: true
})
export class MaxLengthDirective {
	@Input('appMaxLength') maxLength!: number;

	constructor(private el: ElementRef<HTMLInputElement>) { }
	
	@HostListener('input') onInput() {
		const inputValue: string = this.el.nativeElement.value;

		if(inputValue.length > this.maxLength){
			this.el.nativeElement.setCustomValidity(`Maximum length is ${this.maxLength} characters.`);
			console.log(`Maximum length is ${this.maxLength} characters.`);
		} else{
			this.el.nativeElement.setCustomValidity('');
		}
	}
}
