import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCgartComponent } from './big-cgart.component';

describe('BigCgartComponent', () => {
  let component: BigCgartComponent;
  let fixture: ComponentFixture<BigCgartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCgartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCgartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
