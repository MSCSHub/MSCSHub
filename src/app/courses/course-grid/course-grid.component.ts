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
  visibleClasses: ClassData[] = []

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
    let selectedLangs: ClassData[] = []
    let selectedCats: ClassData[] = []
    if(this.selected.length === 0){
      this.visibleClasses = this.classes
    } else {
      for(var i=0; i<this.selected.length; i++){
        let item = this.selected[i]
        if(this.categories.includes(item)){
          let dataToPush = this.classes.filter(x => x.category === item)
          selectedCats = selectedCats.concat(dataToPush)
        } else {
          let dataToPush = this.classes.filter(x => x.languages?.includes(item))
          selectedLangs = selectedLangs.concat(dataToPush)
        }
      }
      if (selectedLangs.length === 0 || selectedCats.length === 0){
        this.visibleClasses = selectedLangs.concat(selectedCats)
      } else {
        this.visibleClasses = selectedLangs.filter(x => selectedCats.includes(x))
      }
    }
    this.visibleClasses.sort((a, b) => (a.ClassName > b.ClassName) ? 1 : -1)
  }
}