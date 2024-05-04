import { Component, OnInit, ViewChild } from '@angular/core';
import { DbserviceService } from '../services/dbservice.service';
import { UserFeedback } from '../models/user-feedback.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  @ViewChild('feedbackForm') feedbackForm: NgForm;
  userFeedbacks: UserFeedback[] = [];
  newFeedback: UserFeedback = new UserFeedback();

  // Set confirmation message to false
  showConfirmation: boolean = false;

  constructor(private dbService: DbserviceService, private router: Router) { }

  ngOnInit() {
    this.loadFeedbacks();
  }

  async loadFeedbacks() {
    this.userFeedbacks = await this.dbService.getAllFeedbacks();
  }

  async addFeedback(newFeedback: UserFeedback) {
    await this.dbService.addFeedback(this.newFeedback);
    this.loadFeedbacks(); // Reload the list to include the new feedback
    this.newFeedback = new UserFeedback(); // Reset the form model

    // Set the confirmation message to true
    this.showConfirmation = true;

    // Hide the confirmation message after 5 sec
    setTimeout(() => {
      this.showConfirmation = false;
    }, 5000);
  }

}
