import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Abhinav H K');

  // Smooth scroll to section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Download resume function
  downloadResume(): void {
    // Create a resume download
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // This would be your actual resume file
    link.download = 'Abhinav_HK_Resume.pdf';
    link.click();
    
    // Fallback: Open resume in new tab if download fails
    setTimeout(() => {
      window.open('assets/resume.pdf', '_blank');
    }, 100);
  }
}
