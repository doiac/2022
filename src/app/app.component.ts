import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2022國立臺海大就業博覽會';
  TopMenuOn = true;
  contentShadow = 'mat-elevation-z24';
  footerShadow = 'mat-elevation-z8';
  // LeftMenuOn = false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  public constructor(private router: Router, private observer: BreakpointObserver) {

  }

  ngOnInit() {
  }

  onActivate(event:HTMLElement) {
    // console.log('change');
    document.querySelector('mat-sidenav-content')!.scrollTo(0,0);
  }
  


  toggleShadow(isMobile: boolean){
    if(isMobile){
      this.contentShadow = '';
      this.footerShadow = '';
    }
    else {
      this.contentShadow = 'mat-elevation-z24';
      this.footerShadow = 'mat-elevation-z8';
    }
  }

  public negativePage(pageName: string){
    this.router.navigate([pageName]);
  }

  public clickSidenavMenu(){
    // console.log('click');
    this.sidenav.close();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 900px)']).subscribe((res) => {
      this.sidenav.close();
      if(res.matches){
        this.sidenav.mode = 'over';
        this.TopMenuOn = false;
        this.toggleShadow(true);
      }
      else{
        this.sidenav.mode = 'side';
        this.TopMenuOn = true;
        this.toggleShadow(false);
      }
    });
  }
}
