import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public str_loginSubtitle = 'Sign in to continue'
  public str_login = 'Login'
  public str_username = 'Username'
  public str_password = 'Password'
  public btn_signIn = 'Sign In'
  public btn_signUp = 'Create Account'
} 