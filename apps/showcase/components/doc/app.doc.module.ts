import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@pixel/primeng/button';
import { InputTextModule } from '@pixel/primeng/inputtext';
import { TooltipModule } from '@pixel/primeng/tooltip';
import { AppCodeModule } from './app.code.component';
import { AppDevelopmentSection } from './app.developmentsection.component';
import { AppDoc } from './app.doc.component';
import { AppDocService } from './app.doc.service';
import { AppDocStyledPresetComponent } from '@/components/doc/app.docstyledpreset.component';

@NgModule({
    imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TooltipModule, AppCodeModule, RouterModule],
    exports: [
        AppDocSectionTextComponent,
        AppDocStyledPresetComponent,
        CommonModule,
        AppDocApiSection,
        AppDocFeaturesSection,
        AppDocSectionNavComponent,
        AppDocSectionsComponent,
        AppDevelopmentSection,
        AppDoc,
        AppDocApiTable,
        AppDocThemingSectionComponent
    ],
    declarations: [AppDocFeaturesSection, AppDocApiSection, AppDocStyledPresetComponent, AppDocSectionNavComponent, AppDocSectionsComponent, AppDocSectionTextComponent, AppDevelopmentSection, AppDoc, AppDocApiTable, AppDocThemingSectionComponent],
    providers: [AppDocService]
})
export class AppDocModule {}
