import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationGuideComponent } from './information-guide.component';

describe('InformationGuideComponent', () => {
  let component: InformationGuideComponent;
  let fixture: ComponentFixture<InformationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
