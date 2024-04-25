import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRentalsOverviewComponent } from './key-rentals-overview.component';

describe('KeyRentalsOverviewComponent', () => {
  let component: KeyRentalsOverviewComponent;
  let fixture: ComponentFixture<KeyRentalsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyRentalsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyRentalsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
