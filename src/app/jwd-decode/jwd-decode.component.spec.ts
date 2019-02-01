import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwdDecodeComponent } from './jwd-decode.component';

describe('JwdDecodeComponent', () => {
  let component: JwdDecodeComponent;
  let fixture: ComponentFixture<JwdDecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwdDecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwdDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
