import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAppComponent } from './angular-app.component';

describe('AngularAppComponent', () => {
  let component: AngularAppComponent;
  let fixture: ComponentFixture<AngularAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularAppComponent]
    });
    fixture = TestBed.createComponent(AngularAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
