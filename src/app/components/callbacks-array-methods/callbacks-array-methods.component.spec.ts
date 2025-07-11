import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbacksArrayMethodsComponent } from './callbacks-array-methods.component';

describe('CallbacksArrayMethodsComponent', () => {
  let component: CallbacksArrayMethodsComponent;
  let fixture: ComponentFixture<CallbacksArrayMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallbacksArrayMethodsComponent]
    });
    fixture = TestBed.createComponent(CallbacksArrayMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
