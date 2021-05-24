import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SircleComponent } from './sircle.component';

describe('SircleComponent', () => {
  let component: SircleComponent;
  let fixture: ComponentFixture<SircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
