import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { UserService } from './core/user.service';
import { getSession } from './shared/session/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel-blog';

  constructor(
    private router: Router,
    private pageTitle: Title,
    private http: HttpClient,
    private userService: UserService,
  ) {
    this.router.events.pipe(
    filter((e): e is ActivationStart => e instanceof ActivationStart), 
    map(e => e.snapshot.data?.['title']),
    filter((d) => !!d)
    ).subscribe((pageTitle) => {
    this.pageTitle.setTitle(pageTitle)
    })

    if(!getSession()) {
      this.userService.setLoginInfo(null, false)
      return
    }else{ 
      this.userService.setLoginInfo(getSession(), true);
    }
    
  }

}
