import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsFilterComponent } from './shops-filter.component';

describe('ShopsFilterComponent', () => {
  let component: ShopsFilterComponent;
  let fixture: ComponentFixture<ShopsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopsFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
