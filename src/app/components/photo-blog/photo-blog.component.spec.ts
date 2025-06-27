import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBlogComponent } from './photo-blog.component';

describe('PhotoBlogComponent', () => {
  let component: PhotoBlogComponent;
  let fixture: ComponentFixture<PhotoBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoBlogComponent]
    });
    fixture = TestBed.createComponent(PhotoBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
