import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsUnLoggedHeaderComponent } from './is-un-logged-header.component';

describe('IsUnLoggedHeaderComponent', () => {
  let component: IsUnLoggedHeaderComponent;
  let fixture: ComponentFixture<IsUnLoggedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsUnLoggedHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsUnLoggedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
