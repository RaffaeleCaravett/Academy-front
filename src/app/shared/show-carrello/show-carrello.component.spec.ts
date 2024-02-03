import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarrelloComponent } from './show-carrello.component';

describe('ShowCarrelloComponent', () => {
  let component: ShowCarrelloComponent;
  let fixture: ComponentFixture<ShowCarrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCarrelloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
