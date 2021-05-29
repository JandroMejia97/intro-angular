import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePartComponent } from './three-part.component';

describe('ThreePartComponent', () => {
  let component: ThreePartComponent;
  let fixture: ComponentFixture<ThreePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreePartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
