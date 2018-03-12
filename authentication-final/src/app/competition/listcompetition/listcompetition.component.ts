import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {Router} from "@angular/router";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-listcompetition',
  templateUrl: './listcompetition.component.html',
  styleUrls: ['./listcompetition.component.css']
})
export class ListcompetitionComponent implements OnInit , OnDestroy  {
  private subscription: Subscription;

  constructor(private datastorageservice: DataStorageService, private router: Router) { }

  MyData: any[];

  ngOnInit() {
    this.datastorageservice.getCompetition()
      .subscribe(
        (response) => { console.log( response.Data);
        this.MyData = response.Data;
        console.log(this.MyData);
        },
        (error) => console.log(error)
      );
    this.subscription =  this.datastorageservice.mydatanewchaged.subscribe(
      (response: any[]) => {
        this.MyData = response;
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' , this.MyData);
      }
    );
  }
  onDeleteCompetition(cid: number) {
    console.log(cid);
    this.datastorageservice.deleteCompetition(cid)
      .subscribe(
        (response) => { console.log(response.Data);
          this.datastorageservice.getCompetition()
            .subscribe(
              (response1) => { console.log(response1.Data);
                this.MyData = null;
                this.MyData = response1.Data;
                console.log('ABE YAA' + this.MyData);
              },
              (error) => console.log(error)
            );
        },
        (error) => console.log(error)
      );
    this.MyData = null;
    // this.datastorageservice.getCompetition()
    //   .subscribe(
    //     (response) => { console.log(response.Data);
    //       this.MyData = null;
    //       this.MyData = response.Data;
    //       console.log('ABE YAA' + this.MyData);
    //     },
    //     (error) => console.log(error)
    //   );
  }

  onEditCompetition(cid: number) {
    console.log(cid);
    this.router.navigate(['/competitionedit', 'edit' , cid]);
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    // this.datastorageservice.deleteCompetition(cid)
    //   .subscribe(
    //     (response) => { console.log(response.Data);
    //     },
    //     (error) => console.log(error)
    //   );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
