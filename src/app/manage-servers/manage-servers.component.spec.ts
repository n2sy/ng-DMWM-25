import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServersComponent } from './manage-servers.component';

describe('ManageServersComponent', () => {
  let component: ManageServersComponent;
  let fixture: ComponentFixture<ManageServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageServersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
