import {Component, OnInit, ViewChild} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newcompetition',
  templateUrl: './newcompetition.component.html',
  styleUrls: ['./newcompetition.component.css']
})
export class NewcompetitionComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  constructor(private datastorageservice: DataStorageService , private router: Router) { }

  ngOnInit() {
  }
  CreateNewCompititions() {
  const cname = this.slForm.value['cname'];
  const lname = this.slForm.value['lname'];
    const lcity = this.slForm.value['lcity'];
    const lcountry = this.slForm.value['lcountry'];
    const sdate = this.slForm.value['sdate'];
    const edate = this.slForm.value['edate'] ;
    console.log(cname);
    console.log(lname);
    console.log(lcity);
    console.log(lcountry);
    console.log(sdate);
    console.log(edate);

    this.datastorageservice.createCompetition(cname, lname, lcity, lcountry, sdate, edate)
      .subscribe(
        (response) => { console.log(response.Data);
          this.router.navigate(['/competitionlist']);
        },
        (error) => console.log(error)
      );
  }

  onClear() {
    this.slForm.reset();
  }
}
