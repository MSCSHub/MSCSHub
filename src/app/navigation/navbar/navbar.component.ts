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
  logoUrl!: string;
  degreeName!: string;
  websiteName!: string;
  properName!: string;
  socialName!: string;
  socialURL!: string;
  socialLogo!: string;
  redditURL!: string;

  constructor(
    private router: Router,
  ) {
    this.initializeProperties();
  }

  private initializeProperties(): void {
    switch (this.website) {
      case "computerScience":
        this.setProperties("Computer Science", "MSCSHub", "MSCSO", "Slack", "https://utmscso.slack.com/archives/C01QM0A19QR", "logos:slack", "https://www.reddit.com/r/mscso", "assets/images/logos/Colorwheel/Colorwheel-40-bcs.png");
        break;
      case "dataScience":
        this.setProperties("Data Science", "MSDSHub", "MSDSO", "Discord", "https://discord.gg/SDh57AHQu3", "logos:discord", "https://www.reddit.com/r/msdso", "assets/images/logos/Colorwheel/TheHubMSDS-128.png");
        break;
      case "ai":
        this.setProperties("Artificial Intelligence", "AIHub", "AISO", "Discord", "https://discord.gg/aihub", "logos:discord", "https://www.reddit.com/r/MSAI", "assets/images/logos/Colorwheel/Colorwheel-40-bcs.png");
        break;
      default:
        this.setProperties("Computer Science", "MSCSHub", "MSCSO", "Slack", "https://utmscso.slack.com/archives/C01QM0A19QR", "logos:slack", "https://www.reddit.com/r/mscso", "assets/images/logos/Colorwheel/Colorwheel-40-bcs.png");
    }
  }

  private setProperties(degreeName: string, websiteName: string, properName: string, socialName: string, socialURL: string, socialLogo: string, redditURL: string, logoUrl: string): void {
    this.degreeName = degreeName;
    this.websiteName = websiteName;
    this.properName = properName;
    this.socialName = socialName;
    this.socialURL = socialURL;
    this.socialLogo = socialLogo;
    this.redditURL = redditURL;
    this.logoUrl = logoUrl;
  }

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
