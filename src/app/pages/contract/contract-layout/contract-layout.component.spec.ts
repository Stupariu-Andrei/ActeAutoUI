import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractLayoutComponent } from './contract-layout.component';

describe('ContractLayoutComponent', () => {
  let component: ContractLayoutComponent;
  let fixture: ComponentFixture<ContractLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
