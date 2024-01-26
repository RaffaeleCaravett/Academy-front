import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiservatoComponent } from './riservato.component';

describe('RiservatoComponent', () => {
  let component: RiservatoComponent;
  let fixture: ComponentFixture<RiservatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiservatoComponent]
    });
    fixture = TestBed.createComponent(RiservatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
