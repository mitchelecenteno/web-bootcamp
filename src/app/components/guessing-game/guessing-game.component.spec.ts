import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingGameComponent } from './guessing-game.component';

describe('GuessingGameComponent', () => {
  let component: GuessingGameComponent;
  let fixture: ComponentFixture<GuessingGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessingGameComponent]
    });
    fixture = TestBed.createComponent(GuessingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
