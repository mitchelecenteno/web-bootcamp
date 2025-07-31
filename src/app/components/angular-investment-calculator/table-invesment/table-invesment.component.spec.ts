import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInvesmentComponent } from './table-invesment.component';

describe('TableInvesmentComponent', () => {
  let component: TableInvesmentComponent;
  let fixture: ComponentFixture<TableInvesmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableInvesmentComponent]
    });
    fixture = TestBed.createComponent(TableInvesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
