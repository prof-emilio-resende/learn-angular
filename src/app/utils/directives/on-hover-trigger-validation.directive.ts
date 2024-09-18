import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover-validation]',
  standalone: true
})
export class OnHoverTriggerValidationDirective {
  @Input({ required: true })
  format!: RegExp;

  @Input({required: true})
  errors!: Array<string>

  constructor(private element: ElementRef<HTMLInputElement>) {}

  @HostListener('focusout')
  validateUsingRegExp(): void {
    const value = this.element.nativeElement.value;
    const isValid = value === null || value === undefined || value === '' || this.format.test(value);

    this.errors.length = 0;
    this.element.nativeElement.classList.remove('invalid');

    if(!isValid) {
      this.errors.push('formato do campo inválido');
      this.element.nativeElement.classList.add('invalid');
      this.element.nativeElement.focus();
    }
  }
}
