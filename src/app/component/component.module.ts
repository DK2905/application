import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { componentRoutingModule } from "../../app/component/component-routing.module"


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [],

  declarations: [
   
  ],
  imports: [
    componentRoutingModule,
  ],
  providers: [
  ],
  exports: [],
})
export class ComponentModule { }
