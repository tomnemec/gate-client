import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRentalComponent } from './key-rental.component';

describe('KeyRentalComponent', () => {
  let component: KeyRentalComponent;
  let fixture: ComponentFixture<KeyRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyRentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
