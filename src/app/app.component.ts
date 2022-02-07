import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2022國立臺海大就業博覽會';
  TopMenuOn = true;
  // LeftMenuOn = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  public constructor(private router: Router, private observer: BreakpointObserver) {

  }

  public negativePage(pageName: string){
    this.router.navigate([pageName]);
  }

  public clickSidenavMenu(){
    console.log('click');
    this.sidenav.close();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 900px)']).subscribe((res) => {
      this.sidenav.close();
      if(res.matches){
        this.sidenav.mode = 'over';
        this.TopMenuOn = false;
      }
      else{
        this.sidenav.mode = 'side';
        this.TopMenuOn = true;
      }
    });
  }
}
