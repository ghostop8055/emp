import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssginprojectComponent } from './assginproject.component';

describe('AssginprojectComponent', () => {
  let component: AssginprojectComponent;
  let fixture: ComponentFixture<AssginprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssginprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssginprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
