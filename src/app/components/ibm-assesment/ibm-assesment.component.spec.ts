import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmAssesmentComponent } from './ibm-assesment.component';

describe('IbmAssesmentComponent', () => {
  let component: IbmAssesmentComponent;
  let fixture: ComponentFixture<IbmAssesmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbmAssesmentComponent]
    });
    fixture = TestBed.createComponent(IbmAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
