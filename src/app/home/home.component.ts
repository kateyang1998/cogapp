import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  // Method to navigate on map
  navigateToMaps() {
    // Address open in Google Maps
    const destination = '6+Westwyn+Ct,+Brampton,+ON+L6T+4T5';
  
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
      
        // Construct the Google Maps URL
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;
      
        // Open the URL in a new tab
        (<any>window).open(url, '_blank');
      });
    } else {
      // Geolocation is not supported by this browser
      console.log("Geolocation is not supported by this browser.");
    }
  } 
}