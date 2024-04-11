import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsOverviewComponent } from './visits-overview.component';

describe('VisitsOverviewComponent', () => {
  let component: VisitsOverviewComponent;
  let fixture: ComponentFixture<VisitsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
