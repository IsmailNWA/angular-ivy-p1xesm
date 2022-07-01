import { Component, OnInit, VERSION } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public get data$(): Observable<string> {
    return this.dataSubject.asObservable();
  }

  private dataSubject: ReplaySubject<string> = new ReplaySubject<string>();

  public ngOnInit(): void {
    this.data$.subscribe(console.log);
  }

  public setData(): void {
    this.dataSubject.next('test');
  }
}
