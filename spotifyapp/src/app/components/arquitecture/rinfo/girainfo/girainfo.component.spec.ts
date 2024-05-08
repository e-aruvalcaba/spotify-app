import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirainfoComponent } from './girainfo.component';

describe('GirainfoComponent', () => {
  let component: GirainfoComponent;
  let fixture: ComponentFixture<GirainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirainfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GirainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
