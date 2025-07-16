import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top100PageComponent } from './top100-page.component';

describe('Top100PageComponent', () => {
  let component: Top100PageComponent;
  let fixture: ComponentFixture<Top100PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top100PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top100PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
