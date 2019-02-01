import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavacomponentComponent } from './javacomponent.component';

describe('JavacomponentComponent', () => {
  let component: JavacomponentComponent;
  let fixture: ComponentFixture<JavacomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavacomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
