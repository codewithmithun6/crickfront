import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule, MatchCardComponent], 
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{

  liveMatches:any
  loading=false

  constructor(private _api:ApiCallService){}
  ngOnInit(): void {
    this.loadLiveMatches();    
  }
  
  


  private loadLiveMatches() {
    this.loading = true
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches = data;
        this.loading = false
      },
      error: error => {
        console.log(error);
        this.loading = false
      }
    });
  }

  refreshScore() {

    
   this.loadLiveMatches()
  }
}
