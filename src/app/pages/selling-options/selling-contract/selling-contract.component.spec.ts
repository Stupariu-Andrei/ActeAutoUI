import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingContractComponent } from './selling-contract.component';

describe('SellingContractComponent', () => {
  let component: SellingContractComponent;
  let fixture: ComponentFixture<SellingContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
