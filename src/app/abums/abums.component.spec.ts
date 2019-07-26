import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbumsComponent } from './abums.component';

describe('AbumsComponent', () => {
  let component: AbumsComponent;
  let fixture: ComponentFixture<AbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
