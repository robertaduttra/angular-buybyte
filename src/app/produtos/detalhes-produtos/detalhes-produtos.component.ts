import { CarrinhoService } from './../../carrinho.service';
import { IProduto, IProdutoCarrinho, produtos } from 'src/app/produtos';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';

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
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){}

  ngOnInit(): void{

    const routeParams = this.route.snapshot.paramMap;

    const produtoId = Number(routeParams.get("id")); 

    this.produto = this.produtosService.getOne(produtoId);
    
  }

  

  adicionarAoCarrinho(){
  this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
  const produto: IProdutoCarrinho = {
    ...this.produto!,
    quantidade: this.quantidade
  }
  this.carrinhoService.adicionarAoCarrinho(produto);
  }
}


