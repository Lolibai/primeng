import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from '@pixel/primeng/avatar';
import { BadgeModule } from '@pixel/primeng/badge';
import { ButtonModule } from '@pixel/primeng/button';
import { MenuModule } from '@pixel/primeng/menu';
import { Ripple } from '@pixel/primeng/ripple';
import { ToastModule } from '@pixel/primeng/toast';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CommandDoc } from './commanddoc';
import { GroupDoc } from './groupdoc';
import { ImportDoc } from './importdoc';
import { PopupDoc } from './popupdoc';
import { RouterDoc } from './routerdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenuModule, ToastModule, ButtonModule, Ripple, AvatarModule, AppDocModule, BadgeModule],
    declarations: [BasicDoc, CommandDoc, TemplateDoc, GroupDoc, ImportDoc, RouterDoc, PopupDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MenuDocModule {}
