import { ICategory } from './../../domain/interfaces/ICategory';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searcher'
})
export class ProcurarCategoriaPipe implements PipeTransform {

  transform(items: ICategory[], procuraTexto: string): ICategory[] {
    if (!items) return[];
    if (!procuraTexto) return items;
    console.log(items );
    procuraTexto = procuraTexto.toLowerCase();


    return items.filter( it => {
      return it.name_category.toLowerCase().includes(procuraTexto);
    });
  }

}
