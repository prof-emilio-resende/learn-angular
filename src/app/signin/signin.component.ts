import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SigninService } from './services/SiginService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  providers: [SigninService]
})
export class SigninComponent {
  @Input() email: string = '';
  @Input() phone: string = '';
  @Output() submittedControl = new EventEmitter<boolean>();

  constructor(private svc: SigninService) { }

  signIn() {
    const result = this.svc.signIn({ email: this.email, phone: this.phone });
    this.submittedControl.emit(true);
    console.log(result);
    return;
  }
}
