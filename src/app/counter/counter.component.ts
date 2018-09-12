import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  
  @Input() data: any;
  @Input() count:Observable<any>;
  localCount:number = 0;

  value:number;

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.count.subscribe(value => {
      console.log(value);
      this.value = value.counter;
      //this.cd.markForCheck();

      setTimeout(_=>{
        this.localCount++;
        this.cd.detectChanges();
      }, 2000);
    })
  }

}
