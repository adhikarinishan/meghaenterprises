import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyanceDeedComponent } from './conveyance-deed.component';

describe('ConveyanceDeedComponent', () => {
  let component: ConveyanceDeedComponent;
  let fixture: ComponentFixture<ConveyanceDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveyanceDeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveyanceDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
