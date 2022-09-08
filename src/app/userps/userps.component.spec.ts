import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpsComponent } from './userps.component';

describe('UserpsComponent', () => {
  let component: UserpsComponent;
  let fixture: ComponentFixture<UserpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
