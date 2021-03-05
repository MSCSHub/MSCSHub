import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panda-party',
  templateUrl: './panda-party.component.html',
  styleUrls: ['./panda-party.component.scss']
})
export class PandaPartyComponent {
  @Input() title: string = ""
  @Input() src: string = ""
  @Input() altText: string = ""
  @Input() link: string = "/home"
  @Input() subtitle: string = ""
  constructor() { }
}
