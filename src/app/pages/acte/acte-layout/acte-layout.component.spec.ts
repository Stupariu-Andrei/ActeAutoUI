import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActeLayoutComponent } from './acte-layout.component';

describe('ActeLayoutComponent', () => {
  let component: ActeLayoutComponent;
  let fixture: ComponentFixture<ActeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
