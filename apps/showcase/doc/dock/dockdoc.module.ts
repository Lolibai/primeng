import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Dialog } from '@pixel/primeng/dialog';
import { Dock } from '@pixel/primeng/dock';
import { GalleriaModule } from '@pixel/primeng/galleria';
import { MenubarModule } from '@pixel/primeng/menubar';
import { RadioButton } from '@pixel/primeng/radiobutton';
import { Terminal } from '@pixel/primeng/terminal';
import { ToastModule } from '@pixel/primeng/toast';
import { Tooltip } from '@pixel/primeng/tooltip';
import { Tree } from '@pixel/primeng/tree';
import { AccessibilityDoc } from './accessibilitydoc';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, Dock, FormsModule, RadioButton, MenubarModule, ToastModule, Dialog, GalleriaModule, Terminal, Tree, AppDocModule, Tooltip],
    declarations: [AdvancedDoc, BasicDoc, ImportDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class DockDocModule {}
