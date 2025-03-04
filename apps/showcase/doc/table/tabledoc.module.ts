import { DeferredDemo } from '@/components/demo/deferreddemo';
import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BadgeModule } from '@pixel/primeng/badge';
import { ButtonModule } from '@pixel/primeng/button';
import { CalendarModule } from '@pixel/primeng/calendar';
import { ConfirmDialogModule } from '@pixel/primeng/confirmdialog';
import { ContextMenuModule } from '@pixel/primeng/contextmenu';
import { DialogModule } from '@pixel/primeng/dialog';
import { FileUploadModule } from '@pixel/primeng/fileupload';
import { IconFieldModule } from '@pixel/primeng/iconfield';
import { InputIconModule } from '@pixel/primeng/inputicon';
import { InputNumberModule } from '@pixel/primeng/inputnumber';
import { InputTextModule } from '@pixel/primeng/inputtext';
import { MultiSelectModule } from '@pixel/primeng/multiselect';
import { ProgressBarModule } from '@pixel/primeng/progressbar';
import { RadioButtonModule } from '@pixel/primeng/radiobutton';
import { RatingModule } from '@pixel/primeng/rating';
import { SelectModule } from '@pixel/primeng/select';
import { SelectButtonModule } from '@pixel/primeng/selectbutton';
import { SkeletonModule } from '@pixel/primeng/skeleton';
import { SliderModule } from '@pixel/primeng/slider';
import { TableModule } from '@pixel/primeng/table';
import { TabsModule } from '@pixel/primeng/tabs';
import { TagModule } from '@pixel/primeng/tag';
import { TextareaModule } from '@pixel/primeng/textarea';
import { ToastModule } from '@pixel/primeng/toast';
import { ToggleButtonModule } from '@pixel/primeng/togglebutton';
import { ToggleSwitchModule } from '@pixel/primeng/toggleswitch';
import { ToolbarModule } from '@pixel/primeng/toolbar';
import { TooltipModule } from '@pixel/primeng/tooltip';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CellEditDoc } from './celleditdoc';
import { CheckboxSelectionDoc } from './checkboxselectiondoc';
import { ColumnGroupDoc } from './columngroupdoc';
import { ColumnResizeExpandModeDoc } from './columnresizeexpandmodedoc';
import { ColumnResizeFitModeDoc } from './columnresizefitmodedoc';
import { ColumnResizeScrollableModeDoc } from './columnresizescrollablemodedoc';
import { ColumnSelectionDoc } from './columnselectiondoc';
import { ColumnToggleDoc } from './columntoggledoc';
import { ContextMenuDoc } from './contextmenudoc';
import { ControlledSelectionDoc } from './controlledselectiondoc';
import { CustomersDoc } from './customersdoc';
import { CustomSortDoc } from './customsortdoc';
import { DynamicDoc } from './dynamicdoc';
import { ExpandableRowGroupDoc } from './expandablerowgroupdoc';
import { ExportDoc } from './exportdoc';
import { FilterAdvancedDoc } from './filteradvanceddoc';
import { FilterBasicDoc } from './filterbasic';
import { FilterSortEditDoc } from './filtersorteditdoc';
import { FlexibleScrollDoc } from './flexiblescrolldoc';
import { FrozenColumnsDoc } from './frozencolumnsdoc';
import { FrozenRowsDoc } from './frozenrowsdoc';
import { GridlinesDoc } from './gridlinesdoc';
import { HorizontalScrollDoc } from './horizontalscrolldoc';
import { ImportDoc } from './importdoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { MultipleColumnsSortDoc } from './multiplecolumnssortdoc';
import { MultipleSelectionDoc } from './multipleselectiondoc';
import { PageOnlySelectionDoc } from './pageonlyselectiondoc';
import { PaginatorBasicDoc } from './paginatorbasicdoc';
import { PaginatorLocaleDoc } from './paginatorlocaledoc';
import { PaginatorProgrammaticDoc } from './paginatorprogrammaticdoc';
import { PreSortDoc } from './presortdoc';
import { ProductsDoc } from './productsdoc';
import { RadioButtonSelectionDoc } from './radiobuttonselectiondoc';
import { RemovableSortDoc } from './removablesortdoc';
import { ReorderDoc } from './reorderdoc';
import { RowEditDoc } from './roweditdoc';
import { RowExpansionDoc } from './rowexpansiondoc';
import { RowspanGroupingDoc } from './rowspangroupingdoc';
import { SelectionEventsDoc } from './selectioneventsdoc';
import { SingleColumnSortDoc } from './singlecolumnsortdoc';
import { SingleSelectionDoc } from './singleselectiondoc';
import { SizeDoc } from './sizedoc';
import { StatefulDoc } from './statefuldoc';
import { StripedDoc } from './stripeddoc';
import { StyleDoc } from './styledoc';
import { StylingDoc } from './stylingdoc';
import { SubheaderGroupingDoc } from './subheadergroupingdoc';
import { TemplateDoc } from './templatedoc';
import { VerticalScrollDoc } from './verticalscrolldoc';
import { VirtualScrollDoc } from './virtualscrolldoc';
import { VirtualScrollLazyDoc } from './virtualscrolllazydoc';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        ConfirmDialogModule,
        MultiSelectModule,
        RouterModule,
        ContextMenuModule,
        SelectModule,
        ButtonModule,
        TagModule,
        ToastModule,
        InputTextModule,
        InputNumberModule,
        TextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabsModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        SelectButtonModule,
        AppCodeModule,
        AppDocModule,
        DeferredDemo,
        IconFieldModule,
        InputIconModule,
        ToggleSwitchModule,
        BadgeModule
    ],
    declarations: [
        ImportDoc,
        BasicDoc,
        DynamicDoc,
        CellEditDoc,
        CheckboxSelectionDoc,
        ColumnGroupDoc,
        ColumnResizeExpandModeDoc,
        ColumnResizeScrollableModeDoc,
        ColumnResizeFitModeDoc,
        ColumnSelectionDoc,
        ColumnToggleDoc,
        ContextMenuDoc,
        ControlledSelectionDoc,
        CustomersDoc,
        CustomSortDoc,
        DynamicDoc,
        ExpandableRowGroupDoc,
        ExportDoc,
        FilterBasicDoc,
        FilterAdvancedDoc,
        FlexibleScrollDoc,
        FrozenColumnsDoc,
        FrozenRowsDoc,
        GridlinesDoc,
        HorizontalScrollDoc,
        LazyLoadDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorBasicDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorProgrammaticDoc,
        ProductsDoc,
        RadioButtonSelectionDoc,
        ReorderDoc,
        RowEditDoc,
        FilterSortEditDoc,
        RowExpansionDoc,
        RowspanGroupingDoc,
        SingleColumnSortDoc,
        MultipleColumnsSortDoc,
        SingleSelectionDoc,
        SizeDoc,
        StatefulDoc,
        StripedDoc,
        StyleDoc,
        SubheaderGroupingDoc,
        TemplateDoc,
        VerticalScrollDoc,
        VirtualScrollDoc,
        VirtualScrollLazyDoc,
        StylingDoc,
        SelectionEventsDoc,
        AccessibilityDoc,
        PaginatorLocaleDoc,
        PreSortDoc,
        RemovableSortDoc
    ],
    exports: [AppDocModule]
})
export class TableDocModule {}
