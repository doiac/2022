import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgComponent } from './ig.component';

describe('IgComponent', () => {
  let component: IgComponent;
  let fixture: ComponentFixture<IgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
