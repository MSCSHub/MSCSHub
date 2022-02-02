import { Pipe, PipeTransform } from '@angular/core';
import { FaqEntry } from 'src/app/shared/faq/faq-entry';

@Pipe({
  name: 'faqCategories'
})
export class FaqCategoriesPipe implements PipeTransform {

  transform(values: FaqEntry[], filter = ""): FaqEntry[] {
    return values.filter(value => value.category === filter);
  }

}
