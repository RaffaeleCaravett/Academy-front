import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPayPalConfig,ICreateOrderRequest } from 'ngx-paypal';
import { ToastrService } from 'ngx-toastr';
import { RiservatoService } from 'src/app/services/riservato.service';
@Component({
  selector: 'app-show-corso',
  templateUrl: './show-corso.component.html',
  styleUrls: ['./show-corso.component.scss']
})
export class ShowCorsoComponent {
  public payPalConfig ? : any;


  constructor(private dialogRef: MatDialogRef<ShowCorsoComponent>, @Inject(MAT_DIALOG_DATA) public data: any , private toastr:ToastrService, private reservedService:RiservatoService) {
  }

  ngOnInit(): void {

  this.payPalConfig = {
    currency: "EUR",
    clientId: "AYvU7p49APJ3TWCP7EPq6Z1Sm7LijDirPdDI-G6DjNasJ2tyIVCwb0IZL1v5cKy_tw7qPr_2ybS62gCR",
    createOrder: (data:any) =>
      <ICreateOrderRequest>{
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "EUR",
              value: "9.99",
              breakdown: {
                item_total: {
                  currency_code: "EUR",
                  value: "9.99"
                }
              }
            },
            items: [
              {
                name: "Enterprise Subscription",
                quantity: "1",
                category: "DIGITAL_GOODS",
                unit_amount: {
                  currency_code: "EUR",
                  value: "9.99"
                }
              }
            ]
          }
        ]
      },
    advanced: {
      commit: "true"
    },
    style: {
      label: "paypal",
      layout: "vertical"
    },
    onApprove: (data:any, actions:any) => {
      console.log(
        "onApprove - transaction was approved, but not authorized",
        data,
        actions
      );
      actions.order.get().then((details:any) => {
        console.log(
          "onApprove - you can get full order details inside onApprove: ",
          details
        );
      });
    },
    onClientAuthorization: (data:any) => {
      console.log(
        "onClientAuthorization - you should probably inform your server about completed transaction at this point",
        data
      );
    },
    onCancel: (data:any, actions:any) => {
      console.log("OnCancel", data, actions);
    },
    onError: (err:any) => {
      console.log("OnError", err);
    },
    onClick: (data:any, actions:any) => {
      console.log("onClick", data, actions);
    }
  };
}

elimina(corso:any){
  this.reservedService.deleteCourse(corso.id).subscribe((data:any)=>{
    if(data){
      this.toastr.success("Corso eliminato.")
    }
  },err=>{
    this.toastr.error(err.error.message||"Corso non eliminato")
  });
  this.closeDialog("Eliminato")
}

  closeDialog(param?:any): void {
    this.dialogRef.close(param||null);
  }
}
