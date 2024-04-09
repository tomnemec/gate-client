import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSlideComponent } from './training-slide.component';

describe('TrainingSlideComponent', () => {
  let component: TrainingSlideComponent;
  let fixture: ComponentFixture<TrainingSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
