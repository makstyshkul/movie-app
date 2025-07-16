import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsLoggedHeaderComponent } from './is-logged-header.component';

describe('IsLoggedHeaderComponent', () => {
  let component: IsLoggedHeaderComponent;
  let fixture: ComponentFixture<IsLoggedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsLoggedHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsLoggedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
