import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteartistComponent } from './favoriteartist.component';

describe('FavoriteartistComponent', () => {
  let component: FavoriteartistComponent;
  let fixture: ComponentFixture<FavoriteartistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteartistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
