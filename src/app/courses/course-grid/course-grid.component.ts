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
  languages: string[] = ["C", "C++", "Kotlin", "GoLang", "MATLAB", "Python", "Rust", "No Code"]
  selected: string[] = []
  visibleClasses: ClassData[] = []
  visibleClassesSet: Set<ClassData> = new Set()
  selectedLangs: Set<ClassData> = new Set()
  selectedCats: Set<ClassData> = new Set()

  constructor(
    private courses: ClassService,
  ) { 
    if(this.courses.website == "dataScience") {
      this.categories = ["foundations", "elective"]
      this.languages = ['Python', 'R', 'No Code']
    }
  }

  ngOnInit(): void {
    this.courses.classes.subscribe(data => {
      this.classes = data.sort((a, b) => (a.ClassName > b.ClassName) ? 1 : -1)
      this.filterItems()
    })
    document.getElementsByClassName("mat-drawer-content")[0].scroll(0,0)
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
    this.visibleClassesSet.clear()
    this.selectedCats.clear()
    this.selectedLangs.clear()
    // We switched from a list to a set because we were seeing duplicates. Using a set ensures entries are unique
    if(this.selected.length === 0){                                                 // If selected is empty
      this.classes.forEach(data => {                                                // Add every class to the visible set
        this.visibleClassesSet.add(data)
      })
    } else {                                                                        // Something is selected
      for(var i=0; i<this.selected.length; i++){                                    // For every item in this.selected
        let item = this.selected[i]                                                 // Get selection to process
        if(this.categories.includes(item)){                                         // Check if it's a category
          this.classes.filter(x => x.category === item).forEach(data => {           // Look for classes with categories that match the chosen cat
            this.selectedCats.add(data)                                              // Add it to the set
          })
        } else {                                                                    // Otherwise it's a language
          this.classes.filter(x => x.languages?.includes(item)).forEach(data => {   // Look for classes with a language that matches the chosen lang
            this.selectedLangs.add(data)                                            // Add it to the set
          })
        }
      }
      if (this.selectedLangs.size === 0 || this.selectedCats.size === 0){           // If only one field is selected then 
        this.selectedCats.forEach(data => {                                         // Add everything in selectedCats
          this.visibleClassesSet.add(data)                                          
        })                                                                          
        this.selectedLangs.forEach(data => {                                        // Add everything in selectedLangs
          this.visibleClassesSet.add(data)                                          // It looks like we're doing too much work but really one has to be empty
        })                                                                          // Instead of branching we can just do both operations and not care
      } else {
        [...this.selectedLangs].filter(x => this.selectedCats.has(x)).forEach(data => {   // Convert selectedLangs to a list and filter out everything not in selectedCats
          this.visibleClassesSet.add(data)                                                // Add the intersection of the two sets to the visible classes set
        })
      }
    }
    this.visibleClasses = Array.from(this.visibleClassesSet)                        // Convert the set into an array
    this.visibleClasses.sort((a, b) => (a.ClassName > b.ClassName) ? 1 : -1)        // Sort the list alphabetically
  }
}