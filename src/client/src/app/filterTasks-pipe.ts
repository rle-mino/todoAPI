import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterTasks'
})
export class filterTasks {
    transform(items: Array<any>, category: string): Array<any> {
        return items.filter(item => item.category === category);
    }
}