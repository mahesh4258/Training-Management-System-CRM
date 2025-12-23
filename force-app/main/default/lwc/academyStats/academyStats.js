import { LightningElement, wire } from 'lwc';
// Imports the specific count logic from your Apex class
import getEntityCounts from '@salesforce/apex/AcademyDashboardController.getEntityCounts';

export default class AcademyStats extends LightningElement {
    studentCount = 0;
    courseCount = 0;

    // Connects the LWC to the database via Apex
    @wire(getEntityCounts)
    wiredCounts({ error, data }) {
        if (data) {
            this.studentCount = data.students;
            this.courseCount = data.courses;
        } else if (error) {
            console.error('Error fetching academy statistics:', error);
        }
    }
}