import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBootcampComponent } from './js-bootcamp.component';

describe('JsBootcampComponent', () => {
  let component: JsBootcampComponent;
  let fixture: ComponentFixture<JsBootcampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsBootcampComponent]
    });
    fixture = TestBed.createComponent(JsBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
