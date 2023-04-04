import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDetailsFormComponent } from './tenant-details-form.component';

describe('TenantDetailsFormComponent', () => {
  let component: TenantDetailsFormComponent;
  let fixture: ComponentFixture<TenantDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
