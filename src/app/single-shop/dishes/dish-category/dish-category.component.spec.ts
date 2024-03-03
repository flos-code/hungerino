import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCategoryComponent } from './dish-category.component';

describe('DishCategoryComponent', () => {
  let component: DishCategoryComponent;
  let fixture: ComponentFixture<DishCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
