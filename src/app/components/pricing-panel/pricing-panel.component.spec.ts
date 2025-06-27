import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPanelComponent } from './pricing-panel.component';

describe('PricingPanelComponent', () => {
  let component: PricingPanelComponent;
  let fixture: ComponentFixture<PricingPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingPanelComponent]
    });
    fixture = TestBed.createComponent(PricingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
