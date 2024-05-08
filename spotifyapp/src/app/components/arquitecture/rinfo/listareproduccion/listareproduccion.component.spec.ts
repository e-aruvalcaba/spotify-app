import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListareproduccionComponent } from './listareproduccion.component';

describe('ListareproduccionComponent', () => {
  let component: ListareproduccionComponent;
  let fixture: ComponentFixture<ListareproduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListareproduccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListareproduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
