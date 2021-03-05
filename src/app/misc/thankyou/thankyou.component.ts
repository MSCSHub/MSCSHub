import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
  title = "Thank you!!!"
  subtitle = "You are an amazing human being. From the bottom of our hearts, we want to say thanks for supporting this site. It wouldn't be possible without people like you."
  source = "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880604/Happy-Dance_800x800_SEPS-2-1000x1000.jpg"
  sources = [ // teeturtle.com
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880604/Happy-Dance_800x800_SEPS-2-1000x1000.jpg",
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880312/Cuddling-Kitties_800x800_SEPS-1000x1000.jpg",
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880534/Powered-By-Coffee-and-Love_800x800_SEPS-1000x1000.jpg",
    "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881250/Paw-Painting-Corgi_800x800_SEPS-1000x1000.jpg"
  ]
  altText = "You are amazing!"

  constructor() { }

  ngOnInit(): void {
  }

}
