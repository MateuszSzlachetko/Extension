import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotToolComponent } from './screenshot-tool.component';

describe('ScreenshotToolComponent', () => {
  let component: ScreenshotToolComponent;
  let fixture: ComponentFixture<ScreenshotToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenshotToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenshotToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
