import { Component, OnInit, ViewChild } from '@angular/core';
import { DbserviceService } from '../services/dbservice.service';
import { BibleStudyMember } from '../models/bible-study-member.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblestudy',
  templateUrl: './biblestudy.component.html',
  styleUrl: './biblestudy.component.css'
})
export class BiblestudyComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;
  bibleStudyMembers: BibleStudyMember[] = [];
  newMember: BibleStudyMember = new BibleStudyMember();

  // Set confirmation message to false
  showConfirmation: boolean = false;
  // Registered message
  message: string = "";

  constructor(private dbService: DbserviceService, private router: Router) { }

  ngOnInit() {
    this.loadMembers();
  }

  async loadMembers() {
    this.bibleStudyMembers = await this.dbService.getAllMembers();
  }

  async addMember(newMember: BibleStudyMember) {
    let doesMemberExist = await this.dbService.memberExists(newMember);
    if  (doesMemberExist)  {
      this.message = ("Already registered.");
      return;
    }

    await this.dbService.addMember(this.newMember);
    this.loadMembers(); // Reload the list to include the new member
    this.newMember = new BibleStudyMember(); // Reset the form model

    // Set the confirmation message to true
    this.showConfirmation = true;
    this.message = "";

    // Hide the confirmation message after 5 sec
    setTimeout(() => {
      this.showConfirmation = false;
    }, 5000);
  }
}