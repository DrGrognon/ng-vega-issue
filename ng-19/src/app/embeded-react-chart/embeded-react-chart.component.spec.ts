import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbededReactChartComponent } from './embeded-react-chart.component';

describe('EmbededReactChartComponent', () => {
  let component: EmbededReactChartComponent;
  let fixture: ComponentFixture<EmbededReactChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbededReactChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbededReactChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
