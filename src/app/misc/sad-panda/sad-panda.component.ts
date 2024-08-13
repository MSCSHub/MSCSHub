import { Component } from '@angular/core';
import { PandaPartyComponent } from '../panda-party/panda-party.component';

@Component({
  selector: 'app-sad-panda',
  templateUrl: './sad-panda.component.html',
  styleUrls: ['./sad-panda.component.scss'],
  standalone: true,
  imports: [PandaPartyComponent]
})
export class SadPandaComponent {
  title = "It's ok... we understand :)" 
  // Source - https://www.teeturtle.com/products/sad-panda
  source = "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199880787/Sad-Panda_800x800_SEPS-1000x1000.jpg"
  constructor() { }
}
