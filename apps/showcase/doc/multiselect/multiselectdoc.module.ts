import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@pixel/primeng/button';
import { FloatLabelModule } from '@pixel/primeng/floatlabel';
import { IftaLabelModule } from '@pixel/primeng/iftalabel';
import { MultiSelectModule } from '@pixel/primeng/multiselect';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ChipsDoc } from './chipsdoc';
import { DisabledDoc } from './disableddoc';
import { FilledDoc } from './filleddoc';
import { FilterDoc } from './filterdoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { GroupDoc } from './groupdoc';
import { IftaLabelDoc } from './iftalabeldoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { LoadingStateDoc } from './loadingstatedoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { SizesDoc } from './sizesdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { VirtualScrollDoc } from './virtualscrolldoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MultiSelectModule, FormsModule, ReactiveFormsModule, AppDocModule, FloatLabelModule, IftaLabelModule, ButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, ChipsDoc, GroupDoc, FilterDoc, TemplateDoc, VirtualScrollDoc, FloatLabelDoc, IftaLabelDoc, InvalidDoc, DisabledDoc, StyleDoc, AccessibilityDoc, ReactiveFormsDoc, LoadingStateDoc, FilledDoc, SizesDoc]
})
export class MultiSelectDocModule {}
