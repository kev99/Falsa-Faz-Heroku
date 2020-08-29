import { Component, ElementRef,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/f2.jpg')";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundAttachment = 'fixed';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat = "no-repeat";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundPosition="center"; 
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";

    
}}