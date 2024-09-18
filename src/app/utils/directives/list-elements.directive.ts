import { Directive, DoCheck, Input, IterableDiffer, IterableDiffers, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[listElements]',
  standalone: true
})
export class ListElementsDirective implements DoCheck {
  @Input('listElements')
  elements: Array<string> = [];

  private differ: IterableDiffer<string>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private differs: IterableDiffers
  ) { 
    this.differ = this.differs.find([]).create();
  }
  
  ngDoCheck(): void {
    const changes = this.differ.diff(this.elements);
    this.viewContainer.clear();
    if(changes) {
      this.elements.forEach((error, index) => {
        this.viewContainer.createEmbeddedView(this.templateRef, {
          $implicit: error,
          index: index
        });
      });
    }
  }
}
