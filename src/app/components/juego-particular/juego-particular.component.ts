import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juego-particular',
  templateUrl: './juego-particular.component.html',
  styleUrls: ['./juego-particular.component.css']
})
export class JuegoParticularComponent implements OnInit {
  id; 
  constructor(private router: ActivatedRoute) { 
    router.params.subscribe(params => this.id = params['id']); 
  }

  ngOnInit(): void {
  }
  

}
