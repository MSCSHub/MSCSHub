import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public currentUrl: string = ''

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url
  }

  doSearch(event: any){
    alert(this.currentUrl)
  }

  visitLink(): void {
    window.location.href = "https://www.paypal.com/donate?business=eric.pryzant%40gmail.com&item_name=Funds+future+development+of+MSCShub.com&currency_code=USD"
  }
}
