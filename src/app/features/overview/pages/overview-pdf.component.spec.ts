import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPdfComponent } from './overview-pdf.component';

describe('OverviewPdfComponent', () => {
  let component: OverviewPdfComponent;
  let fixture: ComponentFixture<OverviewPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
