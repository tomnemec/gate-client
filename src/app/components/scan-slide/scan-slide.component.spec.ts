import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanSlideComponent } from './scan-slide.component';

describe('ScanSlideComponent', () => {
  let component: ScanSlideComponent;
  let fixture: ComponentFixture<ScanSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
