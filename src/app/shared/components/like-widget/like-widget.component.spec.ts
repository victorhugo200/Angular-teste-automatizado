import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(`${LikeWidgetComponent.name}`, () => {
    let fixure: ComponentFixture<LikeWidgetComponent>;

    beforeEach(async () => {
      await  TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        }).compileComponents();

        fixure = TestBed.createComponent(LikeWidgetComponent);

    });
    
    it('Should create component', () => {
        const instance = fixure.componentInstance;
        expect(instance).toBeTruthy();
    });
});