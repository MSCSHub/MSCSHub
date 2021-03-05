import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nothing-here',
  templateUrl: './nothing-here.component.html',
  styleUrls: ['./nothing-here.component.scss']
})
export class NothingHereComponent implements OnInit {
  title = "You look lost..."
  subtitle = "Mr. Panda is here to help you get home"
  sources = [ // teeturtle.com
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/imported/cant-adult-today-t-shirt-teeturtle-1000x1000.jpg",
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881257/Say-No-to-Doing-Things_800x800_SEPS2-1000x1000.jpg",
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881068/Im-Having-So-Much-Fun_800x800_SEPS-1000x1000.jpg",
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881245/Food-First-Things-Later_800x800_SEPS-1000x1000.jpg",
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880493/Boba-Panda_800x800_SEPS-1000x1000.jpg",
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880980/Hurts-So-Good_800x800_SEPS-1000x1000.jpg",
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/imported/panda-hug-t-shirt-teeturtle-1000x1000.jpg",
  ]
  randomSource: string = ""
  
  constructor() { }
  
  ngOnInit(): void {
    this.randomSource = this.sources[this.randomInt(this.sources.length)]
  }

  randomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random()*max)
  }
}
