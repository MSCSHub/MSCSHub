import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';

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
  public readonly website: string = environment.website
  logoUrl: string = this.website === "computerScience" ? "assets/images/logos/Colorwheel/Colorwheel-40-bcs.png" : "assets/images/logos/Colorwheel/TheHubMSDS-128.png"
  public readonly degreeName: string = this.website === "computerScience" ? "Computer Science" : "Data Science"
  public readonly websiteName: string = this.website === "computerScience" ? "MSCSHub" : "MSDSHub"
  public readonly properName: string = this.website === "computerScience" ? "MSCSO" : "MSDSO"
  public readonly socialName: string = this.website === "computerScience" ? "Slack" : "Discord"
  public readonly socialURL: string = this.website === "computerScience" ? "https://utmscso.slack.com/archives/C01QM0A19QR" : "https://discord.gg/SDh57AHQu3"
  public readonly socialLogo: string = this.website === "computerScience" ? "logos:slack" : "logos:discord"
  public readonly redditURL: string = this.website === "computerScience" ? "https://www.reddit.com/r/mscso" : "https://www.reddit.com/r/msdso"

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
