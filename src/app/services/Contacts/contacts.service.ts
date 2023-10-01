import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { LocalForageService } from '../LocalForage/local-forage.service';
import { UserAuthService } from '../UserAuth/user-auth.service';
import {observable, computed, action} from 'mobx';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  @observable allContacts: Map<string, Contact[]>;


  constructor(private persistence: LocalForageService, private userService: UserAuthService) {
    const user = userService.getUser();
    this.allContacts = persistence.getContactsOf(user);
    this.categoryKeys = Array.from(this.allContacts.keys());
  }

  @computed get categoryKeys(): string[]{
    return Array.from(this.allContacts.keys());
  }

  getFromCategory(category: string): Contact[]{
    
    if(category == 'all'){

      

    }
    return this.allContacts.get(category) ?? new Array<Contact>()
  }
}
