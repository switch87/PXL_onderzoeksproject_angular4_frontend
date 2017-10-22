import {Directive, HostListener} from '@angular/core';
import {window} from "rxjs/operator/window";

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @HostListener("scroll", ["$event"])
  public onScroll(event: any): void {
    if (event.srcElement.scrollHeight - event.srcElement.scrollTop === event.srcElement.clientHeight) {
      console.log("end of line");
    }
  }
  constructor() { }

}
