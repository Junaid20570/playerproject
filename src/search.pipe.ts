import { Pipe, PipeTransform } from "@angular/core";
import { Player } from "./player.model";

@Pipe({name:'search',pure:false})
export class SearchPipe implements PipeTransform{
    transform(value: Player[], search: string) {
       let result= value.filter(x=>(
            x.team.startsWith(search)
       ))
        console.log(result)
        return result;
    }

}