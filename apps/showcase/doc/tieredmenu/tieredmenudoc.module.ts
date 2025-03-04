import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from '@pixel/primeng/api';
import { BadgeModule } from '@pixel/primeng/badge';
import { ButtonModule } from '@pixel/primeng/button';
import { FloatLabel } from '@pixel/primeng/floatlabel';
import { TieredMenu } from '@pixel/primeng/tieredmenu';
import { ToastModule } from '@pixel/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CommandDoc } from './commanddoc';
import { ImportDoc } from './importdoc';
import { PopupDoc } from './popupdoc';
import { RouterDoc } from './routerdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TieredMenu, ButtonModule, AppDocModule, BadgeModule, ToastModule, FloatLabel],
    declarations: [BasicDoc, ImportDoc, PopupDoc, StyleDoc, AccessibilityDoc, TemplateDoc, CommandDoc, RouterDoc],
    exports: [AppDocModule],
    providers: [MessageService]
})
export class TieredMenuDocModule {}
