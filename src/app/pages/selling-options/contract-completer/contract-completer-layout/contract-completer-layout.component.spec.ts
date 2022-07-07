import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCompleterLayoutComponent } from './contract-completer-layout.component';

describe('ContractCompleterLayoutComponent', () => {
  let component: ContractCompleterLayoutComponent;
  let fixture: ComponentFixture<ContractCompleterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractCompleterLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCompleterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
