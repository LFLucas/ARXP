import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryComponentComponent } from './registry-component.component';

describe('RegistryComponentComponent', () => {
  let component: RegistryComponentComponent;
  let fixture: ComponentFixture<RegistryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
