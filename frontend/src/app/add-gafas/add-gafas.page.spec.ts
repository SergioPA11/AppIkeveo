import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddGafasPage } from './add-gafas.page';

describe('AddGafasPage', () => {
  let component: AddGafasPage;
  let fixture: ComponentFixture<AddGafasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGafasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGafasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
