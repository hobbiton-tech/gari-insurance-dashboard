import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isCollapsed = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  // navigation
  naviagteTo(url: string){
    this.router.navigateByUrl(url);
  }

}
