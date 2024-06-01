import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecrousalComponent } from './imagecrousal.component';

describe('ImagecrousalComponent', () => {
  let component: ImagecrousalComponent;
  let fixture: ComponentFixture<ImagecrousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagecrousalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagecrousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
