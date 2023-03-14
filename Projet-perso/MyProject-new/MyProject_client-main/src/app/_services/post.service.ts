import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../post'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

const imageHttpOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data' })

}
const POST_API = "http://localhost:4000/post/";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  // cette méthode récupère tous les posts
  getPosts(): Observable<any> {
    const result = this.http.get<any>(POST_API);
    return result;
  }

  // cette méthode récupère un post par son id
  getPostById(id: string): Observable<Post> {
    const post = this.http.get<Post>(POST_API + id);
    return post;
  }

  //cette méthode envoie une requête vers post/new avec un body qui contient un title, un content et un author. Le back reconnaitra l'url et si le token le permet, un post sera créé dans la bdd
  createPost(formData: FormData): Observable<any> {
    
    return this.http.post<any>(POST_API + "new", formData );
  }

  createComment(id: string, login:string,idAuthor: string, comment: string): Observable<Post> {
    return this.http.post<Post>(POST_API + "add-comment/" + id, {login, comment, idAuthor}, httpOptions);
  }
  getAllComments(id: string): Observable<Post>{
    return this.http.get<Post>(POST_API + "comments/" + id, httpOptions  )
  }

  //cette méthode envoie une requête vers post/update avec un body qui contient un title et un content. Le back reconnaitra l'url et si le token le permet, le post sera modifié dans la bdd avec ces nouvelles valeurs. On ne pourra pas modifier l'auteur avec cette méthode (c'est volontaire)
  updatePost(id: string, formData: FormData): Observable<Post> {
    return this.http.put<Post>(POST_API + "update/" + id, formData);
  }

  deletePost(id: string ): Observable<any>{
    return this.http.delete<any>(POST_API + `delete/` + id  , httpOptions)
  }
  deleteComment(idPost: string, idComment: string): Observable<any>{
    return this.http.put<any>(POST_API + `delete-comment/` + idPost  , {idComment, idPost}, httpOptions)
  }

  getSearch(query: string): Observable<any>{
    return this.http.post<any>(POST_API + "search/",{ query}, httpOptions )
  }
}
