import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges,OnDestroy,
AfterViewChecked, 
ViewChild,
ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit ,
OnChanges,
OnDestroy,
AfterViewChecked{
 @Input() element:{type: string, name:string, content:string};
  @Input() name:string;
  @ViewChild('heading', {static:true} ) header: ElementRef;

  constructor() { 
    console.log('constructer is called');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges is called');
    console.log(changes);  
  }

  ngOnInit(){
    console.log('ngOnInit is called');
    
  }
  ngAfterViewChecked(){
    console.log('AfterViewChecked is called');
    console.log('text-content:'+ this.header.nativeElement.textContent);
  }
  ngOnDestroy(){
    console.log('destroy is called');
  }
}
