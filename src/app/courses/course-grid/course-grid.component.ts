import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from '../../shared/class/class'

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss']
})
export class CourseGridComponent implements OnInit {
  classes: ClassData[] = []
  categories: string[] = ["Applications", "Systems", "Theory", "Elective"]
  languages: string[] = ["C", "C++", "Kotlin", "GoLang", "MATLAB", "Python", "Rust"]
  selected: string[] = []
  visibleClasses: string[] = []

  constructor(
    private courses: ClassService,
  ) { }

  ngOnInit(): void {
    this.courses.classes.subscribe(data => {
      this.classes = data.sort((a, b) => (a.ClassName > b.ClassName) ? 1 : -1)
      this.filterItems()
    })
  }

  isSelected(item: string): boolean {
    return this.selected.includes(item)
  }

  toggleSelection(item: string): void {
    if(this.selected.includes(item)){
      this.selected.splice(this.selected.indexOf(item), 1)
    } else {
      this.selected.push(item)
    }
    this.filterItems()
  }

  filterItems(): void {
    this.visibleClasses = []
    let selectedLangs: string[] = []
    let selectedCats: string[] = []
    if(this.selected.length === 0){
      // this.visibleClasses = this.classes.map(x => x.ClassName)
      // console.log("Filtering - nothing selected",this.visibleClasses)
    } else {
      for(var i=0; i<this.selected.length; i++){
        let item = this.selected[i]
        if(this.categories.includes(item)){
          let dataToPush = this.classes.filter(x => x.category === item).map(course => course.ClassName)
          selectedCats = selectedCats.concat(dataToPush)
          console.log(`Filtering category ${item} - ${dataToPush} - result ${this.visibleClasses}`)
        } else {
          let dataToPush = this.classes.filter(x => x.languages?.includes(item)).map(course => course.ClassName)
          // this.visibleClasses = this.visibleClasses.concat(dataToPush)
          selectedLangs = selectedLangs.concat(dataToPush)
          console.log(`Filtering language ${item} - ${dataToPush} - result ${this.visibleClasses}`)
        }
      }
    }
    if (selectedLangs.length === 0 || selectedCats.length === 0){
      this.visibleClasses = selectedLangs.concat(selectedCats)
    } else {
      this.visibleClasses = selectedLangs.filter(x => selectedCats.includes(x))
    }
    this.classes.sort((a,b) => this.visibleClasses.includes(a.ClassName) <= this.visibleClasses.includes(b.ClassName) ? ( (a.ClassName > b.ClassName) ? 2 : 1)  : -1)
    // this.classes.sort((a,b) => (a.ClassName > b.ClassName) ? (this.visibleClasses.includes(a.ClassName) < this.visibleClasses.includes(b.ClassName) ? 4 : 2) : (this.visibleClasses.includes(a.ClassName) < this.visibleClasses.includes(b.ClassName) ? 3 : 1))
  }
}
