import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBootcampComponent } from './css-bootcamp.component';

describe('CssBootcampComponent', () => {
  let component: CssBootcampComponent;
  let fixture: ComponentFixture<CssBootcampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssBootcampComponent]
    });
    fixture = TestBed.createComponent(CssBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
