import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(data: any[], nameTerm:string): any {
   if(!data || !nameTerm)
   {
    return data;
   }
   else
   {
     return data.filter(x=>x.name.toLowerCase().indexOf(nameTerm.toLowerCase())!==-1);
   }
  }

}
