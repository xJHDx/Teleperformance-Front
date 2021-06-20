import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {


  titulo;

  constructor( private usuarioService:UsuarioService ) { }

  ngOnInit(): void {
    this.identiRol()
    console.log(this.usuarioService.role)
  }

  identiRol(){
    if(this.usuarioService.role === 'ADMIN_ROLE'){
      console.log('Admin');
      this.titulo = "Como Administrador"
    }else if(this.usuarioService.role === 'USER_ROLE'){
      this.titulo = "Como Usuario"
      console.log('User');
    }
  }

}
