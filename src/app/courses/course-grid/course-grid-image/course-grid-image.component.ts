import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ImageCacheService } from 'src/app/services/image-cache/image-cache.service';

@Component({
  selector: 'app-course-grid-image',
  templateUrl: './course-grid-image.component.html',
  styleUrls: ['./course-grid-image.component.scss']
})
export class CourseGridImageComponent implements OnInit {
  @Input() src: string = ""
  // @ViewChild('img', {static: true}) image: ElementRef
  constructor(
    private imageService: ImageCacheService,
  ) { }

  ngOnInit(): void {
    this.imageService.cacheUrls = ['https://picsum.photos/id/237/200/300']//[this.src]
    this.imageService.getImage('https://picsum.photos/id/237/200/300')//this.src)
        .subscribe(res => {
          console.log(res)
          // this.image.nativeElement.src = 'https://picsum.photos/id/237/200/300'
        })
  }

}
