import { StdServService } from './../std-serv.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent {

constructor(private serv: StdServService, private actv : ActivatedRoute){}

Dataid:any
ngOnInit(){
  this.actv.params.subscribe((id)=>{
    this.Dataid = id['id']
    console.log(id)
  })
}






}
