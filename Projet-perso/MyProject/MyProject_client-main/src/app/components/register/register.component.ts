import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
/* Bocar --- Users */
form!: FormGroup;


  //on définit ici les variables nécessaires
  //form stockera les valeurs entrées dans les champs du formulaire
  // form: any = {
  //   login: null,
  //   email: null,
  //   password: null,
  // };
  // //isSuccesFul dira si le register s'est bien déroulé
  isSuccessful = false;
  // //isSignUpFailed dira si le register a échoué
  isSignupFailed = false;
  // //errorMessage stockera un message d'erreur éventuel
  // errorMessage = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  //quand on soumet le formulaire, une requête est envoyée vers le back, grâce à AuthService : le body de cette requête contient un login, un email et un password. Si le back prend l'inscription, il retournera un message dans ce sens, sinon, un message d'erreur.
  onSubmit(): void {
  //   const { login, email, password } = this.form;

  //   this.authService.register(login, email, password).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignupFailed = false;
  //       //on redirige ver "login" si l'inscription s'est bien passée
  //       window.location.href = "login";
  //     },
  //     err => {
  //       console.error(err);
  //       this.errorMessage = err.error.message;
  //       this.isSignupFailed = true;
  //     }
  //   )
    const user: User = {
      login: this.userData['login'].value,
      email: this.userData['email'].value,
      password: this.userData['password'].value
    }
    this.addUser(user)

  }

  ngOnInit(): void {
    this.initUser();
  }

private addUser(user: User){
  this.authService.register(user).subscribe(() => {
    // Message dans la console du navigateur, à supprimer // Bocar
    console.log('Utilisateur bien ajouté');
  })
  

  
}

private initUser(){
  // Initialisation du formulaire à vide, au chargement de la page
  this.form = this.formBuilder.group({
    login: [""],
    email: [""],
    password: [""]
  })
}

  get userData(){
    // Récupération des champs du formulaire (HTML, le formControlName de chaque input)
    return this.form.controls
  }

}
