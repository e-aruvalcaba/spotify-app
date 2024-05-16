import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericsquareComponent } from './genericsquare.component';

describe('GenericsquareComponent', () => {
  let component: GenericsquareComponent;
  let fixture: ComponentFixture<GenericsquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericsquareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericsquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
