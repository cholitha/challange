import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoesComponent } from './photoes.component';

describe('PhotoesComponent', () => {
  let component: PhotoesComponent;
  let fixture: ComponentFixture<PhotoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
