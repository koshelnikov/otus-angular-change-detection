import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonejsComponent } from './zonejs.component';

describe('ZonejsComponent', () => {
  let component: ZonejsComponent;
  let fixture: ComponentFixture<ZonejsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonejsComponent]
    });
    fixture = TestBed.createComponent(ZonejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
