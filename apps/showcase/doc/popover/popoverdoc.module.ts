import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@pixel/primeng/button';
import { InputGroupModule } from '@pixel/primeng/inputgroup';
import { InputGroupAddonModule } from '@pixel/primeng/inputgroupaddon';
import { InputTextModule } from '@pixel/primeng/inputtext';
import { PopoverModule } from '@pixel/primeng/popover';
import { TableModule } from '@pixel/primeng/table';
import { TagModule } from '@pixel/primeng/tag';
import { ToastModule } from '@pixel/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { DataTableDoc } from './datatabledoc';
import { ImportDoc } from './importdoc';
import { SelectDataDoc } from './selectdatadoc';
import { StyleDoc } from './styledoc';
import { TargetDoc } from './targetdoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, PopoverModule, ButtonModule, TableModule, ToastModule, AppDocModule, InputGroupModule, InputGroupAddonModule, InputTextModule, TagModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, DataTableDoc, TemplateDoc, TargetDoc, SelectDataDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class PopoverDocModule {}
