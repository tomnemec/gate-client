import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeysAdministrationComponent } from './keys-administration.component';

describe('KeysAdministrationComponent', () => {
  let component: KeysAdministrationComponent;
  let fixture: ComponentFixture<KeysAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeysAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeysAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
