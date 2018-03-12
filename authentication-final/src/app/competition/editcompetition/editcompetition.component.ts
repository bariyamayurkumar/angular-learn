import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from "@angular/router";

@Component({
  selector: 'app-editcompetition',
  templateUrl: './editcompetition.component.html',
  styleUrls: ['./editcompetition.component.css']
})

export class EditcompetitionComponent implements OnInit {
  id: number;
  @ViewChild('f') slForm: NgForm;
  MyData: any;
  constructor(private datastorageservice: DataStorageService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );

    this.datastorageservice.getCompetitionByID(this.id)
      .subscribe(
        (response) => { console.log(response.Data);
          this.MyData = response.Data;
           console.log( this.MyData);
          console.log( this.MyData.Name);
          // this.slForm.value['cname']. = this.MyData.Name;

          this.slForm.controls['cname'].setValue( this.MyData.Name);
           this.slForm.controls['lname'].setValue(this.MyData.LocationData[0].Name);
          this.slForm.controls['lcity'].setValue(this.MyData.LocationData[0].City);
          this.slForm.controls['lcountry'].setValue(this.MyData.LocationData[0].Country);
          this.slForm.controls['sdate'].setValue( new Date (this.MyData.StartDate).toLocaleDateString());
          this.slForm.controls['edate'].setValue( new Date (this.MyData.EndDate).toLocaleDateString());


          // <th> {{val.Competition.StartDate |  date:'MM/dd/yyyy' }}</th>
          // <th> {{val.Competition.Name}}</th>
          // <th> {{val.Competition.Sport}}</th>
          // <th> {{val.Competition.LocationData[0].Name}}</th>
          // <th> {{val.Competition.LocationData[0].City}}</th>
          // <th> {{val.Competition.LocationData[0].Country === null? 'null': val.Competition.LocationData[0].Country}}</th>
          // <th> {{val.Competition.Owner.FirstName}}</th>
          //
          console.log(this.MyData);
        },
        (error) => console.log(error)
      );

  }
  editCompititions() {
    const cname = this.slForm.value['cname'];
    const lname = this.slForm.value['lname'];
    const lcity = this.slForm.value['lcity'];
    const lcountry = this.slForm.value['lcountry'];
    const sdate =   this.slForm.value['sdate'];
    const edate = this.slForm.value['edate'] ;
    console.log(cname);
    console.log(lname);
    console.log(lcity);
    console.log(lcountry);
    console.log(sdate);
    console.log(edate);
    console.log('my ' + this.id);

    this.datastorageservice.editCompetition(cname, lname, lcity, lcountry, sdate, edate , this.id)
      .subscribe(
        (response) => { console.log(response.Data);
         console.log('my my1');
          this.router.navigate(['/competitionlist'], {relativeTo: this.route});
        },
        (error) => console.log(error)
      );
    this.router.navigate(['/competitionlist'], {relativeTo: this.route});
  }

  onClear() {
    this.slForm.reset();
  }

}
