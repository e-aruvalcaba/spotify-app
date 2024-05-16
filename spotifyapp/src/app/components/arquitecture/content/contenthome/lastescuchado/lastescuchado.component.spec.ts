import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastescuchadoComponent } from './lastescuchado.component';

describe('LastescuchadoComponent', () => {
  let component: LastescuchadoComponent;
  let fixture: ComponentFixture<LastescuchadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastescuchadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastescuchadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
