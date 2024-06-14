import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikingTableComponent } from './biking-table.component';

describe('BikingTableComponent', () => {
  let component: BikingTableComponent;
  let fixture: ComponentFixture<BikingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
