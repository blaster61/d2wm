import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SincrireComponent } from './sincrire.component';

describe('SincrireComponent', () => {
  let component: SincrireComponent;
  let fixture: ComponentFixture<SincrireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SincrireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SincrireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
