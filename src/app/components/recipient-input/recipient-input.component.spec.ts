import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientInputComponent } from './recipient-input.component';

describe('RecipientInputComponent', () => {
  let component: RecipientInputComponent;
  let fixture: ComponentFixture<RecipientInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipientInputComponent]
    });
    fixture = TestBed.createComponent(RecipientInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
