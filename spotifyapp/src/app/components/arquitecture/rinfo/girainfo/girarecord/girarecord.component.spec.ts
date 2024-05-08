import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirarecordComponent } from './girarecord.component';

describe('GirarecordComponent', () => {
  let component: GirarecordComponent;
  let fixture: ComponentFixture<GirarecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirarecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GirarecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
