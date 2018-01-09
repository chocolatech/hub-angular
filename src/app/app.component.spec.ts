import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService: AppService;

  let testRepo = [
    { id: 1, name: "Test", stargazers_count: 3, forks_count: 5, description: "Lorem impsum" }
  ];


  beforeEach(async(() => {
    let spy: jasmine.Spy;

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [
        AppService,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    appService = fixture.debugElement.injector.get(AppService);
    spy = spyOn(appService, 'getRepos').and.returnValue(Promise.resolve(testRepo));

  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as default username 'senssei'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.username).toEqual('senssei');
  }));
});
