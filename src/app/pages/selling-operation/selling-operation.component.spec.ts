import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingOperationComponent } from './selling-operation.component';

describe('SellingOperationComponent', () => {
  let component: SellingOperationComponent;
  let fixture: ComponentFixture<SellingOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
