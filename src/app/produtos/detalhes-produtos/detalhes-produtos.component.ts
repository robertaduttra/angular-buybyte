import { IProduto } from 'src/app/produtos';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent implements OnInit{
  
  produto: IProduto | undefined;

  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }
}


