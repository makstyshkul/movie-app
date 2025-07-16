import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustReleaseComponent } from './just-release.component';

describe('JustReleaseComponent', () => {
  let component: JustReleaseComponent;
  let fixture: ComponentFixture<JustReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustReleaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JustReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
