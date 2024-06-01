import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDonebyUsComponent } from './work-doneby-us.component';

describe('WorkDonebyUsComponent', () => {
  let component: WorkDonebyUsComponent;
  let fixture: ComponentFixture<WorkDonebyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDonebyUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDonebyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
