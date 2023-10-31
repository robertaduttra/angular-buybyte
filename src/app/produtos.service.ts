import { Injectable } from '@angular/core';
import { IProduto } from './produtos';
import {produtos} from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

 produtos: IProduto[] = produtos;
 
  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}
