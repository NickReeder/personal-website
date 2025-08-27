import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusItem } from './focus-item';

describe('FocusItem', () => {
  let component: FocusItem;
  let fixture: ComponentFixture<FocusItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
