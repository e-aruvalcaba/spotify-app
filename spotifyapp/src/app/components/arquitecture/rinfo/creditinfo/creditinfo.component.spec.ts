import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditinfoComponent } from './creditinfo.component';

describe('CreditinfoComponent', () => {
  let component: CreditinfoComponent;
  let fixture: ComponentFixture<CreditinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
