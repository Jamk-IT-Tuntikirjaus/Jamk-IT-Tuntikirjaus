import {
    Component
} from '@angular/core';

console.log('`Courselist` component loaded asynchronously');

@Component({
    selector: 'courselist',
    templateUrl: 'courselist.component.html',
    styleUrls: ['courselist.component.css'],
})
export class CourselistComponent {
    name = "Courselist Component"
    private iteration: number = 0;
    public type: string;
    public stacked: any[] = [];
    public koira: any[] = [];
    public courses: any[] = [];
    public constructor() {
        this.mokkidata();
        this.stackCourses();
    }

    public stackCourses(): void {
        let types = ['success', 'info', 'danger'];

        let total = 0;
        let n = 3;
        for (let i = 0; i < this.courses.length; i++){

            this.stacked = [];
            if (this.courses[i].teachinghours + this.courses[i].planninghours > this.courses[i].max) {
                this.courses[i].overworktime = (this.courses[i].teachinghours + this.courses[i].planninghours) - this.courses[i].max;
                this.courses[i].max = this.courses[i].overworktime * 2 + this.courses[i].max;
            }
            let value = [this.courses[i].teachinghours / this.courses[i].max * 100, this.courses[i].planninghours / this.courses[i].max * 100, this.courses[i].overworktime / this.courses[i].max * 100];
            let hvalue = [this.courses[i].teachinghours, this.courses[i].planninghours, this.courses[i].overworktime];
            for (let j = 0; j < n; j++) {
                total += value[j];
                let barvalue = value[j];
                let hourvalue = hvalue[j];
                let type = types[j];
                console.log("barvalue" + j + " " + barvalue);
                console.log("hourvalue" + j + " " + hourvalue);
                this.stacked.push({
                    hourvalue,
                    barvalue,
                    type
                });
            }
            this.koira.push(this.stacked);
        }
    }
    private mokkidata(): void {
        this.courses = [];
        this.courses.push({
            courseid: "IIO12110.6S0V1",
            coursename: "Ohjelmistotuotannon käytännöt",
            teachinghours: 700,
            planninghours: 100,
            overworktime: 0,
            max: 750,
        },
        {
            courseid: "ZZPP0500.7K0V7",
            coursename: "Osaajana kehittyminen",
            teachinghours: 300,
            planninghours: 500,
            overworktime: 0,
            max: 500
        },
        {
            courseid: "IIO13100.7K0V1",
            coursename: "JavaEE-ohjelmointi",
            teachinghours: 400,
            planninghours: 700,
            overworktime: 0,
            max: 1000
        },
        {
            courseid: "IIO13100.7K0V1",
            coursename: "JavaEE-ohjelmointi",
            teachinghours: 400,
            planninghours: 700,
            overworktime: 0,
            max: 1000
        });
    }
}
