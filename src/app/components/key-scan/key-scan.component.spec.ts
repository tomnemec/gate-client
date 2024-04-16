import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyScanComponent } from './key-scan.component';

describe('KeyScanComponent', () => {
  let component: KeyScanComponent;
  let fixture: ComponentFixture<KeyScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
