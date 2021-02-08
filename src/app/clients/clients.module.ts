import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    NzSelectModule,
    NzInputModule,
    NzDatePickerModule,
    NzTableModule,
    NzDividerModule,
    NzSpaceModule,
    NzCardModule,
    NzToolTipModule

  ]
})
export class ClientsModule { }
