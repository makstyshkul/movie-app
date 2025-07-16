import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAwardsComponent } from './movies-awards.component';

describe('MoviesAwardsComponent', () => {
  let component: MoviesAwardsComponent;
  let fixture: ComponentFixture<MoviesAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesAwardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
