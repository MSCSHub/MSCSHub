import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClassService } from 'src/app/services/classes/class.service';
import { ClassData } from 'src/app/shared/class/class';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  classes: ClassData[] = []
  filteredOptions: Observable<ClassData[]> = of([]);
  searchControl: FormControl = new FormControl();

  constructor(
    private classService: ClassService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.classService.classes.subscribe(classData => {
      this.classes = classData
    })
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(val => val.length >= 1 ? this.filter(val): [])
      );
  }

  filter(val: string): ClassData[] {
    return this.classes.filter(option =>
      option.ClassName.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  doSearch(){
    if(-1 != this.classes.map(value => value.ClassName).indexOf(`${this.searchControl.value}`)){
      // this.router.navigate([`courses/${this.myControl.value}`])
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`courses/${this.searchControl.value}`]);
        this.searchControl.setValue("")
      }); 
    }
  }
}
