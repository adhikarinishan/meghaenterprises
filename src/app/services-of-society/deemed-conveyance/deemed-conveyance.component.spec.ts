import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeemedConveyanceComponent } from './deemed-conveyance.component';

describe('DeemedConveyanceComponent', () => {
  let component: DeemedConveyanceComponent;
  let fixture: ComponentFixture<DeemedConveyanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeemedConveyanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeemedConveyanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
