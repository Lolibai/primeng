import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@pixel/primeng/button';
import { DividerModule } from '@pixel/primeng/divider';
import { DropdownModule } from '@pixel/primeng/dropdown';
import { InputNumber } from '@pixel/primeng/inputnumber';
import { PaginatorModule } from '@pixel/primeng/paginator';
import { Select } from '@pixel/primeng/select';
import { Slider } from '@pixel/primeng/slider';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CurrentPageReportDoc } from './currentpagereportdoc';
import { ImagesDoc } from './imagesdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PaginatorModule, ButtonModule, DividerModule, FormsModule, InputNumber, Slider, RouterModule, Select, DropdownModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, ImagesDoc, StyleDoc, AccessibilityDoc, CurrentPageReportDoc]
})
export class PaginatorDocModule {}
