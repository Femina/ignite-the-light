import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



/**
 * @author Femina
 * This is a sample header component which will give three navigations
 * 1. Logo - Home Page of our current website
 * 2. Data Json - JSON Structure of Data
 * 3. Contact - Contact us page of our current website
 */