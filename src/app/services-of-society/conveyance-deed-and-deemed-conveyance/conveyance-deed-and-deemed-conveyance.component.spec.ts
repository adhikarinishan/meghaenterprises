import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyanceDeedAndDeemedConveyanceComponent } from './conveyance-deed-and-deemed-conveyance.component';

describe('ConveyanceDeedAndDeemedConveyanceComponent', () => {
  let component: ConveyanceDeedAndDeemedConveyanceComponent;
  let fixture: ComponentFixture<ConveyanceDeedAndDeemedConveyanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveyanceDeedAndDeemedConveyanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveyanceDeedAndDeemedConveyanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
