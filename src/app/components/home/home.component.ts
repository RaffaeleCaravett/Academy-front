import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
companies:string[]=[
'assets/home-images/Alten.png',
'assets/home-images/accenture.png',
'assets/home-images/almaviva.png',
'assets/home-images/capgemini.jpg',
'assets/home-images/deloitte.png',
'assets/home-images/ey.png',
'assets/home-images/kpmg.png',
'assets/home-images/pwc.png',
]
slider:string[]=[
  'assets/home-images/slider/Angular.png',
  'assets/home-images/slider/atlassian.png',
  'assets/home-images/slider/atlassian-jira-logo-large.png',
  'assets/home-images/slider/css3.png',
  'assets/home-images/slider/Git-logo.svg.png',
  'assets/home-images/slider/Github-desktop-logo-symbol.svg.png',
  'assets/home-images/slider/html.png',
  'assets/home-images/slider/Java.png',
  'assets/home-images/slider/mysql.png'
  ]
}
