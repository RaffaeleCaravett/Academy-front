import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCorsoComponent } from './show-corso.component';

describe('ShowCorsoComponent', () => {
  let component: ShowCorsoComponent;
  let fixture: ComponentFixture<ShowCorsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCorsoComponent]
    });
    fixture = TestBed.createComponent(ShowCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
