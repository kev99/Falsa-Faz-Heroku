import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barnav',
  templateUrl: './barnav.component.html',
  styleUrls: ['./barnav.component.css']
})
export class BarnavComponent implements OnInit {
 
  @Input() visible=true;
  
  constructor() { }

  ngOnInit() {
  }

}
