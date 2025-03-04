import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@pixel/primeng/button';
import { DataView } from '@pixel/primeng/dataview';
import { Rating } from '@pixel/primeng/rating';
import { Select } from '@pixel/primeng/select';
import { SelectButton } from '@pixel/primeng/selectbutton';
import { Skeleton } from '@pixel/primeng/skeleton';
import { Tag } from '@pixel/primeng/tag';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { LayoutDoc } from './layoutdoc';
import { LoadingDoc } from './loadingdoc';
import { PaginationDoc } from './paginationdoc';
import { SortingDoc } from './sortingdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, SelectButton, AppDocModule, DataView, Select, ButtonModule, RouterModule, Rating, Tag, FormsModule, Skeleton],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, PaginationDoc, SortingDoc, LayoutDoc, LoadingDoc, StyleDoc, AccessibilityDoc]
})
export class DataViewDocModule {}
