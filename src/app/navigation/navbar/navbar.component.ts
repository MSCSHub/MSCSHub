import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() drawerFunc: any
  @Output() menuClicked: EventEmitter<boolean> = new EventEmitter<boolean>()
  public currentUrl: string = ''
  menuStatus = false

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url
  }

  doSearch(event: any){
    alert(this.currentUrl)
  }

  doMenuClick(): void {
    this.menuClicked.emit()
  }

  donateLink(): void {
    window.location.href = "https://www.paypal.com/donate?hosted_button_id=8HUJHWGZD4MUG"
  }
}
