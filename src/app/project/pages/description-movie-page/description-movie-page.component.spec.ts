import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionMoviePageComponent } from './description-movie-page.component';

describe('DescriptionMoviePageComponent', () => {
  let component: DescriptionMoviePageComponent;
  let fixture: ComponentFixture<DescriptionMoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionMoviePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
