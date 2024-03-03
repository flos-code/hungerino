import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsSearchComponent } from './shops-search.component';

describe('ShopsSearchComponent', () => {
  let component: ShopsSearchComponent;
  let fixture: ComponentFixture<ShopsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
