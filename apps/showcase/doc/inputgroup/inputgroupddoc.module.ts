import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@pixel/primeng/button';
import { CheckboxModule } from '@pixel/primeng/checkbox';
import { FloatLabelModule } from '@pixel/primeng/floatlabel';
import { IftaLabelModule } from '@pixel/primeng/iftalabel';
import { InputGroupModule } from '@pixel/primeng/inputgroup';
import { InputGroupAddonModule } from '@pixel/primeng/inputgroupaddon';
import { InputNumberModule } from '@pixel/primeng/inputnumber';
import { InputTextModule } from '@pixel/primeng/inputtext';
import { MenuModule } from '@pixel/primeng/menu';
import { RadioButtonModule } from '@pixel/primeng/radiobutton';
import { SelectModule } from '@pixel/primeng/select';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ButtonDoc } from './buttondoc';
import { CheckboxDoc } from './checkboxdoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { IftaLabelDoc } from './iftalabeldoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppCodeModule,
        AppDocModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        InputGroupModule,
        InputGroupAddonModule,
        RadioButtonModule,
        SelectModule,
        InputNumberModule,
        FloatLabelModule,
        IftaLabelModule,
        MenuModule
    ],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MultipleDoc, ButtonDoc, CheckboxDoc, FloatLabelDoc, IftaLabelDoc, AccessibilityDoc]
})
export class InputGroupDocModule {}
