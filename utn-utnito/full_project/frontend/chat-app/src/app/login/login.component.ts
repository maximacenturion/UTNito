import { Component, OnInit } from '@angular/core';
import { I18nService } from '../core/service/i18n.service';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent implements OnInit {
  constructor(
    public readonly i18n: I18nService,
    private readonly loginService: LoginService,
  ) {}

  get agentName(): string {
    return this.loginService.agentName;
  }

  get loginForm() {
    return this.loginService.loginForm;
  }

  get isSubmitting(): boolean {
    return this.loginService.isSubmitting;
  }

  get errorMessage(): string | null {
    return this.loginService.errorMessage;
  }

  ngOnInit(): void {
    this.loginService.initialize();
  }

  onSubmit(): void {
    this.loginService.submit();
  }
}
