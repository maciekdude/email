import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentDialogComponent } from './intent-dialog.component';

describe('IntentDialogComponent', () => {
  let component: IntentDialogComponent;
  let fixture: ComponentFixture<IntentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
