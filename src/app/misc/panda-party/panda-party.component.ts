import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-panda-party',
  templateUrl: './panda-party.component.html',
  styleUrls: ['./panda-party.component.scss'],
  standalone: true,
  imports: [RouterModule, MatCardModule, FlexLayoutModule]
})
export class PandaPartyComponent {
  @Input() title: string = ""
  @Input() src: string = ""
  @Input() altText: string = ""
  @Input() link: string = "/home"
  @Input() subtitle: string = ""
  constructor() { }
}
