import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';


import { AuthService } from '../auth/auth.service';
import DateTimeFormat = Intl.DateTimeFormat;
import {Observable} from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataStorageService {
  body: any;
  mydatanewchaged = new Subject<any[]>();

  constructor(private http: Http, private authService: AuthService) {
  }



  getCompetition() {
    const token = this.authService.getToken();
    const headers = new Headers({'Authentication': 'Token ' + token});
    return this.http.get('http://apidev.cloudtimer.nl/user/competition', {headers: headers} )
    .map(
      (response: Response) => {
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBB' , response.json());
        this.mydatanewchaged.next(response.json());
        return response.json();
      }
   );
  }


  getCompetitionByID(id: number) {
    const token = this.authService.getToken();
    const headers = new Headers({'Authentication': 'Token ' + token});
    return this.http.get('http://apidev.cloudtimer.nl/competition/' + id, {headers: headers} )
      .map(
        (response: Response) => {
          console.log( response);
          return response.json();
        }
      );
  }

  deleteCompetition(competionID: number) {
    const token = this.authService.getToken();
    const headers = new Headers({'Authentication': 'Token ' + token});
    return this.http.delete('http://apidev.cloudtimer.nl/competition/' + competionID , {headers: headers} )
      .map(
        (response: Response) => {
          console.log( response);
          return response.json();
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong in delete competition');
        }
      );
  }
  // const cname = this.slForm.value['cname'];
  // const lname = this.slForm.value['lname'];
  // const lcity = this.slForm.value['lcity'];
  // const lcountry = this.slForm.value['lcountry'];
  // const sdate = this.slForm.value['sdate'];
  // const edate = this.slForm.value['edate'] ;

  editCompetition(cname: string, lname: string, lcity: string, lcountry: string, sdate: string, edate: string, eid:number) {
    const token = this.authService.getToken();
    // this.body = {    "Format": 4,
    //                 "LocationData":
    //                   [{ "Name":"mylocation2",
    //                     "City": "surat",
    //                     "Country": "Germany",
    //                     "IsMain": "true"    }],
    //             "StartDate": "1517206955000" ,
    //             "EndDate": "1517206955000" ,
    //              "Name": "mycompetiotion1"}
    console.log( 'my date is', new Date(sdate).getTime());
    this.body = {    "Format": 4,
      "LocationData":
        [{ "Name":lname ,
          "City":lcity,
          "Country":lcountry,
          "IsMain": "true"    }],
      "StartDate": new Date(sdate).getTime() ,
      "EndDate": new Date(edate).getTime() ,
      "Name":cname}
      const headers = new Headers({'Content-Type': 'application/json', 'Authentication': 'Token ' + token});
    return this.http.patch('http://apidev.cloudtimer.nl/competition/' + eid, this.body , {headers: headers} )
      .map(
        (response: Response) => {
          console.log( 'my own' +  response);
          return response.json();
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong in my edit competition');
        }
      );
  }

  createCompetition(cname: string, lname: string, lcity: string, lcountry: string, sdate: string, edate: string) {
    const token = this.authService.getToken();
    // this.body = {    "Format": 4,
    //                 "LocationData":
    //                   [{ "Name":"mylocation2",
    //                     "City": "surat",
    //                     "Country": "Germany",
    //                     "IsMain": "true"    }],
    //             "StartDate": "1517206955000" ,
    //             "EndDate": "1517206955000" ,
    //              "Name": "mycompetiotion1"}

    console.log( 'my date is', new Date(sdate).getTime());
    this.body = {    "Format": 4,
      "LocationData":
        [{ "Name":lname ,
          "City":lcity,
          "Country":lcountry,
          "IsMain": "true"    }],
      "StartDate": new Date(sdate).getTime() ,
      "EndDate": new Date(edate).getTime() ,
      "Name":cname}
    const headers = new Headers({'Content-Type': 'application/json', 'Authentication': 'Token ' + token});
    return this.http.post('http://apidev.cloudtimer.nl/competition', this.body , {headers: headers} )
      .map(
        (response: Response) => {
          console.log( response);
          return response.json();
        }
      ).catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something went wrong in my create competition');
        }
      );
  }
}
