import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPracticeComponent } from './events-practice.component';

describe('EventsPracticeComponent', () => {
  let component: EventsPracticeComponent;
  let fixture: ComponentFixture<EventsPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsPracticeComponent]
    });
    fixture = TestBed.createComponent(EventsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
