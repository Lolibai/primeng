import { AppConfigService } from '@/service/appconfigservice';
import { DesignerService } from '@/service/designerservice';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AccordionModule } from '@pixel/primeng/accordion';
import { ButtonModule } from '@pixel/primeng/button';
import { PrimeNG } from '@pixel/primeng/config';
import { DividerModule } from '@pixel/primeng/divider';
import { FileUploadModule } from '@pixel/primeng/fileupload';
import { SelectButtonModule } from '@pixel/primeng/selectbutton';
import { TabsModule } from '@pixel/primeng/tabs';
import { TagModule } from '@pixel/primeng/tag';
import { Subscription } from 'rxjs';
import { DesignComponent } from './component/designcomponent';
import { DesignCustomTokens } from './custom/designcustomtokens';
import { DesignBorderRadius } from './primitive/designborderradius';
import { DesignColors } from './primitive/designcolors';
import { DesignCS } from './semantic/colorscheme/designcs';
import { DesignFormField } from './semantic/designformfield';
import { DesignGeneral } from './semantic/designgeneral';
import { DesignList } from './semantic/designlist';
import { DesignNavigation } from './semantic/designnavigation';
import { DesignOverlay } from './semantic/designoverlay';
import { DesignSettings } from './settings/designsettings';

@Component({
    selector: 'design-editor',
    standalone: true,
    imports: [
        CommonModule,
        TabsModule,
        FormsModule,
        ButtonModule,
        SelectButtonModule,
        TagModule,
        FileUploadModule,
        DesignBorderRadius,
        DividerModule,
        AccordionModule,
        DesignComponent,
        DesignColors,
        DesignGeneral,
        DesignFormField,
        DesignList,
        DesignNavigation,
        DesignOverlay,
        DesignCS,
        DesignCustomTokens,
        DesignSettings
    ],
    template: ` <p-tabs [(value)]="activeTab" [lazy]="true">
        <p-tablist>
            <p-tab [value]="0"> Primitive </p-tab>
            <p-tab [value]="1"> Semantic </p-tab>
            <p-tab [value]="2" [disabled]="!isComponentRoute()">Component</p-tab>
            <p-tab [value]="3">Custom</p-tab>
            <p-tab [value]="4" class="!ml-auto">Settings</p-tab>
        </p-tablist>
        <p-tabpanels>
            <p-tabpanel [value]="0">
                <div>
                    <form (keydown)="onKeyDown($event)" class="flex flex-col gap-3">
                        <design-border-radius />
                        <design-colors />
                    </form>
                </div>
            </p-tabpanel>

            <p-tabpanel [value]="1">
                <p-accordion [value]="['0', '1']" [multiple]="true">
                    <p-accordion-panel value="0">
                        <p-accordion-header>Common</p-accordion-header>
                        <p-accordion-content>
                            <div>
                                <form (keydown)="onKeyDown($event)" class="flex flex-col gap-3">
                                    <design-general />
                                    <design-form-field />
                                    <design-list />
                                    <design-navigation />
                                    <design-overlay />
                                </form>
                            </div>
                        </p-accordion-content>
                    </p-accordion-panel>

                    <p-accordion-panel value="1">
                        <p-accordion-header>Color Scheme</p-accordion-header>
                        <p-accordion-content>
                            <p-tabs value="cs-0">
                                <p-tablist>
                                    <p-tab value="cs-0">Light</p-tab>
                                    <p-tab value="cs-1">Dark</p-tab>
                                </p-tablist>
                                <p-tabpanels class="!px-0">
                                    <p-tabpanel value="cs-0">
                                        <form (keydown)="onKeyDown($event)">
                                            <design-cs [value]="colorScheme()?.light" />
                                        </form>
                                    </p-tabpanel>
                                    <p-tabpanel value="cs-1">
                                        <form (keydown)="onKeyDown($event)">
                                            <design-cs [value]="colorScheme()?.dark" />
                                        </form>
                                    </p-tabpanel>
                                </p-tabpanels>
                            </p-tabs>
                        </p-accordion-content>
                    </p-accordion-panel>
                </p-accordion>
            </p-tabpanel>

            <p-tabpanel [value]="2">
                <form *ngIf="isComponentRoute()" (keydown)="onKeyDown($event)">
                    <design-component />
                </form>
            </p-tabpanel>

            <p-tabpanel [value]="3">
                <design-custom-tokens />
            </p-tabpanel>

            <p-tabpanel [value]="4">
                <design-settings />
            </p-tabpanel>
        </p-tabpanels>
    </p-tabs>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignEditor implements OnInit, OnDestroy {
    colorScheme = computed(() => this.designerService.designer().theme.preset?.semantic.colorScheme);
    designerService: DesignerService = inject(DesignerService);

    configService: AppConfigService = inject(AppConfigService);

    config: PrimeNG = inject(PrimeNG);

    router: Router = inject(Router);

    get activeTab() {
        return this.designerService.designer().activeTab;
    }

    set activeTab(value: number) {
        this.designerService.designer.update((prev) => ({ ...prev, activeTab: value }));
    }

    isComponentRoute = computed(() => this.designerService.designer().theme.preset?.components[this.currentPath()] !== undefined);

    currentPath = signal<string>('');

    routeSubscription!: Subscription;

    constructor() {
        this.routeSubscription = this.router.events.subscribe((event: NavigationEnd) => {
            const url = event.url;
            if (url) {
                this.currentPath.set(url.split('/')[1]);
            }
        });
    }

    ngOnInit() {
        if (!this.currentPath()) {
            this.currentPath.set(this.router.routerState.snapshot.url.split('/')[1]);
        }
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }

    onKeyDown(event: any) {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            this.designerService.applyTheme(this.designerService.designer().theme);
            event.preventDefault();
        }
    }
}
