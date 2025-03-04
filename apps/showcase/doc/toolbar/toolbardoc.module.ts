import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from '@pixel/primeng/avatar';
import { ButtonModule } from '@pixel/primeng/button';
import { IconFieldModule } from '@pixel/primeng/iconfield';
import { InputIconModule } from '@pixel/primeng/inputicon';
import { InputTextModule } from '@pixel/primeng/inputtext';
import { SplitButtonModule } from '@pixel/primeng/splitbutton';
import { ToolbarModule } from '@pixel/primeng/toolbar';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CustomDoc } from './customdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ToolbarModule, RouterModule, ButtonModule, SplitButtonModule, InputTextModule, AvatarModule, IconFieldModule, InputIconModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, CustomDoc, StyleDoc, AccessibilityDoc]
})
export class ToolbarDocModule {}
