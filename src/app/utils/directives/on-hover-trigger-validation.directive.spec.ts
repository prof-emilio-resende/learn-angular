import { ElementRef } from '@angular/core';
import { OnHoverTriggerValidationDirective } from './on-hover-trigger-validation.directive';

describe('OnHoverTriggerValidationDirective', () => {
  it('should create an instance', () => {
    const directive = new OnHoverTriggerValidationDirective(new ElementRef<HTMLInputElement>(new HTMLInputElement()));
    expect(directive).toBeTruthy();
  });
});
