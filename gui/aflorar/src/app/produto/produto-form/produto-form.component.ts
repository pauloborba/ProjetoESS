import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  preview: string;

  constructor() { }

  ngOnInit() {
  }

  previewImage(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.preview = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
