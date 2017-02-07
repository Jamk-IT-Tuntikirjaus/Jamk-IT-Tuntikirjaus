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
        this.stackAutumnSemester();
        this.stackSpringSemester();
    }
    public stackAutumnSemester(): void {
        try {
            let types = ['success', 'info', 'danger'];

            let total = 0;
            let n = 3;

            for (let i = 0; i < this.asemester.length; i++){

                this.stacked = [];
                //Check if there is overwork
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
            throw "stackAutumnSemester error";
        }
        catch(e) {
            console.error(e);
        }
    }
    public stackSpringSemester(): void {
        let types = ['success', 'info', 'danger'];

        let total = 0;
        let n = 3;

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

    public deleteCourseAutumn(courseid: number): void {
        this.asemester.splice(courseid, 1);
    }

    public deleteCourseSpring(courseid: number): void {
        this.ssemester.splice(courseid, 1);
    }

    //Mokkidatan lisäystä varten
    public addAutumn(): void {
        this.asemester.push({
            courseid: "IIO000000",
            pdi: "6S0V5",
            coursename: "Jorma",
            group: "IIO13S2",
            teachinghours: 100,
            planninghours: 200,
            overworktime: 0,
            max: 750
        });
        let types = ['success', 'info', 'danger'];

        let total = 0;
        let n = 3;

        let i = this.asemester.length-1;
        this.stacked = [];
        //Check if there is overwork
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

    //Mokkidatan lisäystä varten
    public addSpring(): void {
        this.ssemester.push({
            courseid: "AAAZ0000",
            pdi: "7K0V7",
            coursename: "Kissa",
            group: "IIO15S2",
            teachinghours: 150,
            planninghours: 300,
            overworktime: 0,
            max: 500
        });
        let types = ['success', 'info', 'danger'];

        let total = 0;
        let n = 3;
        let i = this.ssemester.length-1;
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
    private mokkidata(): void {
        this.courses = [];
        this.courses.push(
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
            if (this.courses[i].pdi[1] == "S"){
                this.asemester.push(this.courses[i]);
            }
            else this.ssemester.push(this.courses[i]);
        }
    }
}
