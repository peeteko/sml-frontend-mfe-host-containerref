import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPluginComponent } from './host-plugin.component';

describe('HostPluginComponent', () => {
  let component: HostPluginComponent;
  let fixture: ComponentFixture<HostPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostPluginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
