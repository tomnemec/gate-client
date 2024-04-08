import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSlideComponent } from './visitor-slide.component';

describe('VisitorSlideComponent', () => {
  let component: VisitorSlideComponent;
  let fixture: ComponentFixture<VisitorSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
