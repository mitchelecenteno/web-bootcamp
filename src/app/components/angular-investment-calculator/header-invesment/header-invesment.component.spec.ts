import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInvesmentComponent } from './header-invesment.component';

describe('HeaderInvesmentComponent', () => {
  let component: HeaderInvesmentComponent;
  let fixture: ComponentFixture<HeaderInvesmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderInvesmentComponent]
    });
    fixture = TestBed.createComponent(HeaderInvesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
