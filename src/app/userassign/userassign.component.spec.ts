import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserassignComponent } from './userassign.component';

describe('UserassignComponent', () => {
  let component: UserassignComponent;
  let fixture: ComponentFixture<UserassignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserassignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
