import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinfoComponent } from './rinfo.component';

describe('RinfoComponent', () => {
  let component: RinfoComponent;
  let fixture: ComponentFixture<RinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
