import { Component, Input } from '@angular/core';
import { ContactsService } from 'src/app/services/Contacts/contacts.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-recipient-input',
  templateUrl: './recipient-input.component.html',
  styleUrls: ['./recipient-input.component.css']
})
export class RecipientInputComponent {

  @Input() category: string;
  contactsList: Contact[];

  

  constructor(private contacts: ContactsService){
    this.category = 'all';
    this.contactsList = this.contacts.getFromCategory(this.category);

  }

  selectCategory(){
    this.contactsList = this.contacts.getFromCategory(this.category);
  }

}
