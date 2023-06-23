import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  myObservable$ = new Observable((obserbar) => {
    console.log('Obserbar starts');
    setTimeout(() => { obserbar.next('1') }, 1000);
    setTimeout(() => { obserbar.next('2') }, 2000);
    setTimeout(() => { obserbar.error('3') }, 3000);
    setTimeout(() => { obserbar.complete() }, 4000);

  })
  ngOnInit() {
    this.myObservable$.subscribe((next) => {
      console.log(next);
    },
      (err) => {
        console.log(err);
      },
      () => {
        alert('complete');
      }
    )
  }
}
