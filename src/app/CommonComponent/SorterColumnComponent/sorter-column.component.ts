import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'sorter-column',
    templateUrl: './sorter-column.component.html',
})
export class SorterColumnComponent implements OnInit {
    @Input() criteria: any;
    @Input() columnName: string;
    @Input() columnText: string;
    ngOnInit(): void {

    }
}
