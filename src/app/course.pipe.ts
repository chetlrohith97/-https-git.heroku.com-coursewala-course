import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'course'
})
export class CoursePipe implements PipeTransform {

  transform(data: any[], courseTerm:string): any {
   
    if(!data || !courseTerm)
    {
      return data;
    }
    else
    {
      return data.filter(x=>x.coursename.toLowerCase().indexOf(courseTerm.toLowerCase())!==-1);
    }
  }

}
