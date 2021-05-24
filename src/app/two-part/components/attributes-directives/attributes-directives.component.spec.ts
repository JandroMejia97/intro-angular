import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesDirectivesComponent } from './attributes-directives.component';

describe('AttributesDirectivesComponent', () => {
  let component: AttributesDirectivesComponent;
  let fixture: ComponentFixture<AttributesDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributesDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
