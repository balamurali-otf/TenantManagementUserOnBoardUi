import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tenant-details-form',
  templateUrl: './tenant-details-form.component.html',
  styleUrls: ['./tenant-details-form.component.scss']
})
export class TenantDetailsFormComponent {

  selected = 'option2';
  qualifierName:any;
  tenantDetailsForm:  FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }

   //  tenantDetailsForm = new FormGroup({
   //    orgName : new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(20)]),
   //   domainQualifier: new FormControl('', Validators.required),
   //   subscription: new FormControl('', Validators.required),
   //   emailField: new FormControl('', [Validators.required, Validators.email]),
   //   firstName: new FormControl('', Validators.required),
   //   lastName: new FormControl('', Validators.required)
   // });

  ngOnInit() {

    // this.newtenantForm = new FormGroup<any>({
    //   "orgName" : new FormControl('', [Validators.required, Validators.min(12), Validators.maxLength(20)]),
    //   "domainQualifier" : new FormControl('', Validators.required),
    //   "subscription" : new FormControl('', Validators.required),
    //   "emailField" : new FormControl('', [Validators.required, Validators.email]),
    //   "firstName" : new FormControl('', Validators.required),
    //   "lastName" : new FormControl('', Validators.required)
    //
    // });

      this.tenantDetailsForm = new FormGroup({
            orgName : new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
            domainQualifier: new FormControl(null, Validators.required),
            subscription: new FormControl('', Validators.required),
            emailField: new FormControl('', [Validators.required, Validators.email]),
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required)
     });


  }

  updateQualifier():void{
    let orgName = ((this.tenantDetailsForm.value).orgName)?.toLowerCase();
    this.qualifierName = orgName?.replace(/[^a-zA-Z0-9]/g, '');
    (this.tenantDetailsForm.value).domainQualifier = this.qualifierName;
    console.log('OrgName', orgName)
    console.log('updatedTextdomain',  orgName?.replace(/[^a-zA-Z0-9]/g, ''));

  }
  onSubmit():void{

      console.log('Form Values', this.tenantDetailsForm.value);
      console.log('Form Object', this.tenantDetailsForm);

  }
}
