import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumviewComponent } from './albumview.component';

describe('AlbumviewComponent', () => {
  let component: AlbumviewComponent;
  let fixture: ComponentFixture<AlbumviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
