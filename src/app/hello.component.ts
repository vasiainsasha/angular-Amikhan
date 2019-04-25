import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>hello Jomart agay!</h1>`,
  styles: [`h1 { font-family: Arial; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
