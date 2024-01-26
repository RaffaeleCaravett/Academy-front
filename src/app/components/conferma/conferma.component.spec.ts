import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermaComponent } from './conferma.component';

describe('ConfermaComponent', () => {
  let component: ConfermaComponent;
  let fixture: ComponentFixture<ConfermaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfermaComponent]
    });
    fixture = TestBed.createComponent(ConfermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
