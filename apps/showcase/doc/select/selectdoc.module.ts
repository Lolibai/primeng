import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@pixel/primeng/button';
import { FloatLabelModule } from '@pixel/primeng/floatlabel';
import { IftaLabelModule } from '@pixel/primeng/iftalabel';
import { InputGroupModule } from '@pixel/primeng/inputgroup';
import { InputGroupAddonModule } from '@pixel/primeng/inputgroupaddon';
import { InputTextModule } from '@pixel/primeng/inputtext';
import { SelectModule } from '@pixel/primeng/select';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CheckmarkDoc } from './checkmarkdoc';
import { ClearIconDoc } from './clearicondoc';
import { CustomFilterDoc } from './customfilterdoc';
import { DisabledDoc } from './disableddoc';
import { EditableDoc } from './editabledoc';
import { FilledDoc } from './filleddoc';
import { FilterDoc } from './filterdoc';
import { FloatLabelDoc } from './floatlabeldoc';
import { GroupDoc } from './groupdoc';
import { IftaLabelDoc } from './iftalabeldoc';
import { ImportDoc } from './importdoc';
import { InvalidDoc } from './invaliddoc';
import { LazyVirtualScrollDoc } from './lazyvirtualscrolldoc';
import { LoadingStateDoc } from './loadingstatedoc';
import { ReactiveFormsDoc } from './reactiveformsdoc';
import { SizesDoc } from './sizesdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { VirtualScrollDoc } from './virtualscrolldoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ReactiveFormsModule, SelectModule, ButtonModule, InputTextModule, FloatLabelModule, IftaLabelModule, InputGroupModule, InputGroupAddonModule],
    exports: [AppDocModule],
    declarations: [
        ImportDoc,
        BasicDoc,
        EditableDoc,
        GroupDoc,
        TemplateDoc,
        DisabledDoc,
        InvalidDoc,
        VirtualScrollDoc,
        LazyVirtualScrollDoc,
        CustomFilterDoc,
        FilterDoc,
        FloatLabelDoc,
        IftaLabelDoc,
        StyleDoc,
        AccessibilityDoc,
        ReactiveFormsDoc,
        CheckmarkDoc,
        ClearIconDoc,
        LoadingStateDoc,
        FilledDoc,
        SizesDoc
    ]
})
export class SelectDocModule {}
