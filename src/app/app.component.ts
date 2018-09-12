import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countObj:object;
  Count$ = new BehaviorSubject({counter:0});
  listWrap = [];
  list$ = new BehaviorSubject(this.listWrap);

  count = 0;

  ngOnInit() {
    this.countObj = {
      counter: 0
    }
  }

  onButtonClick(action) {
    if(action == 'increment') {
      this.countObj = {counter: this.countObj['counter']+1};
      this.Count$.next({counter: ++this.count})
    }else {
      this.countObj = {counter: this.countObj['counter']-1};
      this.Count$.next({counter: --this.count})
    }
  }

  addToList() {
    this.listWrap.push({title: Math.random()});

    this.list$.next(this.listWrap);
  }
}
