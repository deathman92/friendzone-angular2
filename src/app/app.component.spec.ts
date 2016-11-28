/* tslint:disable:no-unused-variable */

import { MaterialModule }   from '@angular/material';
import { TestBed, async }   from '@angular/core/testing';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

describe('App: FriendzoneAngular2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        MaterialModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Welcome to FriendZone!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to FriendZone!');
  }));

  it('should render title in a md-toolbar tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').textContent).toContain('Welcome to FriendZone!');
  }));
});
