import { Component, Input } from '@angular/core';
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

  constructor(private svc: SigninService) { }

  signIn() {
    const result = this.svc.signIn({ email: this.email, phone: this.phone });
    console.log(result);
    return;
  }
}
