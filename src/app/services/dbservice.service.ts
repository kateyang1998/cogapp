import { Injectable } from '@angular/core';
import { Dexie } from 'dexie';
import { BibleStudyMember } from '../models/bible-study-member.model';
import { EventMember } from '../models/event-member.model';
import { UserFeedback } from '../models/user-feedback.model';

@Injectable({
  providedIn: 'root'
})

export class DbserviceService extends Dexie{
  bibleStudyMembers: Dexie.Table<BibleStudyMember, number>;
  eventMembers: Dexie.Table<EventMember, number>;
  userFeedbacks: Dexie.Table<UserFeedback, number>;

  constructor() { 
    // Call the Dexie constructor and create app db
    super('COGAppDB');

    // Define the database schema
    this.version(3).stores({
      bibleStudyMembers: 'memberId++, memberEmail, memberFirstName, memberLastName, groups',
      eventMembers: 'eventMemberId++, eventMemberEmail, eventMemberFirstName, eventMemberLastName, events',
      userFeedbacks: 'userFeedbackId++, userFeedback'
    })

    // Create tables
    this.bibleStudyMembers = this.table('bibleStudyMembers');
    this.eventMembers = this.table('eventMembers');
    this.userFeedbacks = this.table('userFeedbacks');
  }

  // Method to check if an group member already exists
  async memberExists(member: BibleStudyMember): Promise<boolean> {
    const existingMember = await this.bibleStudyMembers
      .where({
        memberFirstName: member.memberFirstName,
        memberLastName: member.memberLastName,
        memberEmail: member.memberEmail,
        groups: member.groups
      }).first();

    return !!existingMember; // returns true if an existing member is found
  }

  // Method to add a new group member to bibleStudyMembers
  async addMember(member: BibleStudyMember) {
    // Check if the group member already exists
    const exists = await this.memberExists(member);
    if (exists) {
      throw('A bible study group member with the same details already exists.');
    } else {
      // Add member to table if the member does not exist
      return await this.bibleStudyMembers.add(member);
    }
  }

  // Method to get all group members
  async getAllMembers() {
    return await this.bibleStudyMembers.toArray();
  }

  // Method to check if an event member already exists
  async eventMemberExists(newMember: EventMember): Promise<boolean> {
    const existingMember = await this.eventMembers
      .where({
        eventMemberFirstName: newMember.eventMemberFirstName,
        eventMemberLastName: newMember.eventMemberLastName,
        eventMemberEmail: newMember.eventMemberEmail,
        events: newMember.events
      }).first();

    return !!existingMember; // returns true if an existing member is found
  }

  // Method to add a new event member to eventMembers
  async addEventMember(newMember: EventMember) {
    // Check if the event member already exists
    const exists = await this.eventMemberExists(newMember);
    if (exists) {
      throw('An event member with the same details already exists.');
    } else {
      // Add member to table if the member does not exist
      return await this.eventMembers.add(newMember);
    }
  }

  // Method to get all event members from eventMembers
  async getAllEventMembers() {
    return await this.eventMembers.toArray();
  }

  // Method to add a new feedback to userFeedbacks
  async addFeedback(newFeedback: UserFeedback) {
    return await this.userFeedbacks.add(newFeedback);
  }

  // Method to get all feedbacks from userFeedbacks
  async getAllFeedbacks() {
    return await this.userFeedbacks.toArray();
  }
}