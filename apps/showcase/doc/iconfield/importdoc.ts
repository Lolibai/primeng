import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'icon-field-import-doc',
    template: `<app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        typescript: `import { IconField } from '@pixel/primeng/iconfield';
import { InputIcon } from '@pixel/primeng/inputicon';`
    };
}
