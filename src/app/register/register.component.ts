import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from 'src/player.model';
import { FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';
import { emailValidator } from 'src/Validators/email.Validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  playerReg=new FormGroup({
    uname:new FormControl(),
    email:new FormControl(),
    role:new FormControl(),
    nationality:new FormControl(),
    matches:new FormControl(),
    wickets:new FormControl(),
    runs:new FormControl(),
    catches:new FormControl(),
    pic:new FormControl()
  })

  constructor(private _playerServ:PlayerService){
    this.playerReg.controls['uname'].setValidators([Validators.required,Validators.minLength(5)])
    this.playerReg.controls['email'].setValidators([Validators.required, emailValidator()])
    this.playerReg.controls['role'].setValidators([Validators.required])
    this.playerReg.controls['nationality'].setValidators([Validators.required])
    this.playerReg.controls['matches'].setValidators([Validators.required])
    this.playerReg.controls['wickets'].setValidators([Validators.required])
    this.playerReg.controls['runs'].setValidators([Validators.required])
    this.playerReg.controls['catches'].setValidators([Validators.required])
    this.playerReg.controls['pic'].setValidators([Validators.required])
  }

  savedPlayer= new Player();
    onUpload(fileInput:any)
    {
      
        if(fileInput.target.files && fileInput.target.files[0])
        {
          let reader=new FileReader();
          reader.onload=(e:any)=>{
            let img=new Image();
            img.src=e.target.result;
            img.onload= rs=>{
              this.savedPlayer.image=e.target.result;//imp
            }
          }
        reader.readAsDataURL(fileInput.target.files[0])
        }
    }
  savePlayer(){
    if(this.playerReg.valid){
      this._playerServ.setPlayers(this.savedPlayer).subscribe(data=>{
        alert('player saved')
      });
    }
    else{
      alert('fill all the details')
    }
  }

}
