import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../user';

// // Définir la regex pour valider le mot de passe
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// // Vérifier si le mot de passe est valide
// if (passwordRegex.test(password)) {
//   // Mot de passe valide
// } else {
//   // Mot de passe invalide
// }


const AUTH_API = "http://localhost:4000/user";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //cette méthode envoie vers le back une requête vers /user/login avec un body qui contient un email et un password. Le back reconnaitra l'url et effectuera un login si les infos sont correctes : il retournera un token et les infos sur le user connecté
  login(user: User): Observable<any> {
    return this.http.post<any>(AUTH_API + '/login', user, httpOptions);
  }

  //cette méthode envoie vers le back une requête ver user/register avec un body qui contient login, email et password. Le back reconnaitra l'url et effectuera la création d'un user.
  register(user: User): Observable<User> {
    return this.http.post<User>(AUTH_API + "/register", user);
  }
}
