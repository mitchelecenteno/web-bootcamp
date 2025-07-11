import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomPracticeComponent } from './dom-practice.component';

describe('DomPracticeComponent', () => {
  let component: DomPracticeComponent;
  let fixture: ComponentFixture<DomPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomPracticeComponent]
    });
    fixture = TestBed.createComponent(DomPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
