import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutoFocusModule } from '@pixel/primeng/autofocus';
import { ButtonModule } from '@pixel/primeng/button';
import { CheckboxModule } from '@pixel/primeng/checkbox';
import { FloatLabelModule } from '@pixel/primeng/floatlabel';
import { FocusTrapModule } from '@pixel/primeng/focustrap';
import { IconFieldModule } from '@pixel/primeng/iconfield';
import { InputIconModule } from '@pixel/primeng/inputicon';
import { InputTextModule } from '@pixel/primeng/inputtext';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ButtonModule, InputTextModule, FocusTrapModule, FloatLabelModule, IconFieldModule, InputIconModule, CheckboxModule, AutoFocusModule],
    declarations: [ImportDoc, BasicDoc],
    exports: [AppDocModule]
})
export class FocusTrapDocModule {}
