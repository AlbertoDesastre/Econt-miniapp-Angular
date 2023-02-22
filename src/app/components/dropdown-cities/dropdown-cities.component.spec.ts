import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCitiesComponent } from './dropdown-cities.component';

describe('DropdownCitiesComponent', () => {
  let component: DropdownCitiesComponent;
  let fixture: ComponentFixture<DropdownCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
