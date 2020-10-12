import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateGafasPage } from './update-gafas.page';

describe('UpdateGafasPage', () => {
  let component: UpdateGafasPage;
  let fixture: ComponentFixture<UpdateGafasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGafasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateGafasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
