import { Injectable } from '@angular/core';
import { BaseStyle } from '@pixel/primeng/base';

@Injectable({ providedIn: 'root' })
export class BaseComponentStyle extends BaseStyle {
    name = 'common';
}
