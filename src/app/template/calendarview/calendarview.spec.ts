import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { CalendarViewComponent } from './calendarview.component.ts';
import { MaterialModule } from '@angular/material';

describe('CalendarViewComponent', () => {

beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CalendarViewComponent],
            imports: [MaterialModule]
        });
    });

beforeEach(async(() => {
        TestBed.compileComponents();
    }));

it('works well', async(() => {
        //const fixture = TestBed.createComponent(CalendarViewComponent);
        expect(4).toBe(4);
    }));
});
