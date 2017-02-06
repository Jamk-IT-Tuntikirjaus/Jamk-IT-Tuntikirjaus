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
    public asemester: any[] = [];
    public asemesterhours: any[] = []
    public ssemester: any[] = [];
    public ssemesterhours: any[] = []
    public courses: any[] = [];
    public constructor() {
        this.mokkidata();
        this.stackCourses();
    }

    public stackCourses(): void {
        let types = ['success', 'info', 'danger'];

        let total = 0;
        let n = 3;

        for (let i = 0; i < this.asemester.length; i++){

            this.stacked = [];
            if (this.asemester[i].teachinghours + this.asemester[i].planninghours > this.asemester[i].max) {
                this.asemester[i].overworktime = (this.asemester[i].teachinghours + this.asemester[i].planninghours) - this.asemester[i].max;
                this.asemester[i].max = this.asemester[i].overworktime * 2 + this.asemester[i].max;
            }
            let value = [this.asemester[i].teachinghours / this.asemester[i].max * 100, this.asemester[i].planninghours / this.asemester[i].max * 100, this.asemester[i].overworktime / this.asemester[i].max * 100];
            let hvalue = [this.asemester[i].teachinghours, this.asemester[i].planninghours, this.asemester[i].overworktime];
            for (let j = 0; j < n; j++) {
                total += value[j];
                let barvalue = value[j];
                let hourvalue = hvalue[j];
                let type = types[j];
                this.stacked.push({
                    hourvalue,
                    barvalue,
                    type
                });
            }
            this.asemesterhours.push(this.stacked);
        }
        for (let i = 0; i < this.ssemester.length; i++){

            this.stacked = [];
            if (this.ssemester[i].teachinghours + this.ssemester[i].planninghours > this.ssemester[i].max) {
                this.ssemester[i].overworktime = (this.ssemester[i].teachinghours + this.ssemester[i].planninghours) - this.ssemester[i].max;
                this.ssemester[i].max = this.ssemester[i].overworktime * 2 + this.ssemester[i].max;
            }
            let value = [this.ssemester[i].teachinghours / this.ssemester[i].max * 100, this.ssemester[i].planninghours / this.ssemester[i].max * 100, this.ssemester[i].overworktime / this.ssemester[i].max * 100];
            let hvalue = [this.ssemester[i].teachinghours, this.ssemester[i].planninghours, this.ssemester[i].overworktime];
            for (let j = 0; j < n; j++) {
                total += value[j];
                let barvalue = value[j];
                let hourvalue = hvalue[j];
                let type = types[j];
                this.stacked.push({
                    hourvalue,
                    barvalue,
                    type
                });
            }
            this.ssemesterhours.push(this.stacked);
        }
    }
    private mokkidata(): void {
        this.courses = [];
        this.courses.push({
            courseid: "IIO12110",
            pdi: "6S0V1",
            coursename: "Ohjelmistotuotannon käytännöt",
            group: "IIO13S2",
            teachinghours: 500,
            planninghours: 500,
            overworktime: 0,
            max: 750,
        },
        {
            courseid: "ZZPP0500",
            pdi: "7K0V7",
            coursename: "Osaajana kehittyminen",
            group: "IIO15S2",
            teachinghours: 200,
            planninghours: 100,
            overworktime: 0,
            max: 500
        },
        {
            courseid: "IIO13100",
            pdi: "7K0V1",
            coursename: "JavaEE-ohjelmointi",
            group: "IIO16S1",
            teachinghours: 400,
            planninghours: 250,
            overworktime: 0,
            max: 1000
        });
        for (let i = 0; i < this.courses.length; i++){
            if (this.courses[i].pdi.substr(1,1) == "S"){
                this.asemester.push(this.courses[i]);
            }
            else this.ssemester.push(this.courses[i]);
        }
    }
}
