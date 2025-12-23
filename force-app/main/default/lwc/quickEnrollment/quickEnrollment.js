import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuickEnrollment extends LightningElement {
    // This function runs automatically when the record is saved successfully
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: 'Success!',
            message: 'Student enrolled successfully! ID: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}