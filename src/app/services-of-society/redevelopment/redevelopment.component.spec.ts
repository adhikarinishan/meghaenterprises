import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedevelopmentComponent } from './redevelopment.component';

describe('RedevelopmentComponent', () => {
  let component: RedevelopmentComponent;
  let fixture: ComponentFixture<RedevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
