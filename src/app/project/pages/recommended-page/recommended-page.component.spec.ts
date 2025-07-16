import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedPageComponent } from './recommended-page.component';

describe('RecommendedPageComponent', () => {
  let component: RecommendedPageComponent;
  let fixture: ComponentFixture<RecommendedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
