import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestServiceRoutingModule } from './test-service-routing.module';
import { TestServiceComponent } from './test-service.component';


@NgModule({
  declarations: [TestServiceComponent],
  imports: [
    CommonModule,
    TestServiceRoutingModule
  ]
})
export class TestServiceModule { }
