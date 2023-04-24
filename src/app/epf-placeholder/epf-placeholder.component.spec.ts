import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpfPlaceholderComponent } from './epf-placeholder.component';

describe('EpfPlaceholderComponent', () => {
  let component: EpfPlaceholderComponent;
  let fixture: ComponentFixture<EpfPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpfPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpfPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
