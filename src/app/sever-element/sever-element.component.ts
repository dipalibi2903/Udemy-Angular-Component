import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { IElement } from "./IElement";

@Component({
  selector: 'app-sever-element',
  templateUrl: './sever-element.component.html',
  styleUrls: ['./sever-element.component.css']
 // ,encapsulation:ViewEncapsulation.Emulated //emulated (defualt), none(removes shadow DOM)
})
export class SeverElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit
,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input('srvElement') element:IElement;
  @Input() name:string;

  @ViewChild('headingName') header:ElementRef;
  @ContentChild('contentParaph') contentPara:ElementRef;  
  
  constructor(){
    console.log('Calling Constructor');
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     console.log('calling ngOnInit');
     console.log('Text Content On Init : '+this.header.nativeElement.textContent);
     console.log('Content On Init : '+this.contentPara.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    console.log('ngOnChanges called !!');
    console.log('changes are',changes)
    
  }

  ngDoCheck() {
    //Called every time that the input properties of a component 
    //or a directive are checked. Use it to extend change detection 
    //by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('doCheck called');
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('after content init');
    console.log('Content On Init : '+this.contentPara.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('after content checked');  
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('After View Init');
    console.log('Text Content On Content Init : '+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('after view checked');
  }
 
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('on destroy called');
  }
  
}
