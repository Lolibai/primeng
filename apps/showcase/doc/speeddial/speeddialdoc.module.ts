import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@pixel/primeng/button';
import { MessagesModule } from '@pixel/primeng/messages';
import { SpeedDialModule } from '@pixel/primeng/speeddial';
import { ToastModule } from '@pixel/primeng/toast';
import { TooltipModule } from '@pixel/primeng/tooltip';
import { AccessibilityDoc } from './accessibilitydoc';
import { CircleDoc } from './circledoc';
import { ImportDoc } from './importdoc';
import { LinearDoc } from './lineardoc';
import { MaskDoc } from './maskdoc';
import { QuarterCircleDoc } from './quartercircledoc';
import { SemiCircleDoc } from './semicircledoc';
import { TemplateDoc } from './templatedoc';
import { TooltipDoc } from './tooltipdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, SpeedDialModule, MessagesModule, ToastModule, TooltipModule, RouterModule, ButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, LinearDoc, CircleDoc, SemiCircleDoc, QuarterCircleDoc, TooltipDoc, MaskDoc, TemplateDoc, AccessibilityDoc]
})
export class SpeedDialDocModule {}
