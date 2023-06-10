import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'

export function emailValidator():ValidatorFn {

    return (control: AbstractControl): { [key: string]: boolean } | null  =>
    {
        let pp:String= control.value
        //console.log(pp)
        if(!(pp.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"))  )
        return {"":false}

        return null;
    } 

}