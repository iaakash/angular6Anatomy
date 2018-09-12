import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  
  @Input() items: Observable<Array<any>>;
  itemList:Array<any>;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.items.subscribe(data => {
      this.itemList = data;
      this.cdr.detectChanges();
    })
  }

}
