import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from '../services/dbservice.service';
import { EventMember } from '../models/event-member.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;
  eventMembers: EventMember[] = [];
  newMember: EventMember = new EventMember();

  // Set confirmation message to false
  showConfirmation: boolean = false;
  // Registered message
  message: string = "";

  constructor(private router: Router, private dbService: DbserviceService) { }

  ngOnInit() {
    this.loadMembers();
  }

  async loadMembers() {
    this.eventMembers = await this.dbService.getAllEventMembers();
  }

  async addEventMember(newMember: EventMember) {
    let doesMemberExist = await this.dbService.eventMemberExists(newMember);
    if  (doesMemberExist)  {
      this.message = ("Already registered.");
      return;
    }
    
    await this.dbService.addEventMember(this.newMember);
    this.loadMembers(); // Reload the list to include the new member
    this.newMember = new EventMember(); // Reset the form model

    // Set the confirmation message to true
    this.showConfirmation = true;
    this.message = "";

    // Hide the confirmation message after 5 sec
    setTimeout(() => {
      this.showConfirmation = false;
    }, 5000);
  }
}