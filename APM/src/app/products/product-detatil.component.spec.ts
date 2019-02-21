import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetatilComponent } from './product-detatil.component';

describe('ProductDetatilComponent', () => {
  let component: ProductDetatilComponent;
  let fixture: ComponentFixture<ProductDetatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
