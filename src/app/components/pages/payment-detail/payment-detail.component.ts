import { AddressService } from './../../../services/address.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/models/addressModel';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  contactInformationForm:FormGroup
  address: AddressModel

  constructor(private formBuilder:FormBuilder, private activatedRoute:ActivatedRoute, private addressService:AddressService ) { }

  ngOnInit(): void {
  }
  createContactInformationForm(){
  this.contactInformationForm = this.formBuilder.group({
    cityName: ["", Validators.required],
    addressDetail: ["", Validators.required]
  })

}

getAdressesUserById(){
  this.activatedRoute.params.subscribe(param => {
    if(param["id"]){
      this.addressService.getAdressesByUserId(param["id"]).subscribe(data =>  {
        this.address = data
      })

    }
  })
}
}
