import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LojaVirtualCarrinho';

  produtos = [
    {nome: "Produto 1",
  preco: 100,
  quantidade: 1},
  {nome: "Produto 2",
  preco: 150,
  quantidade: 1},
  ];

  carrinho = [];

  soma=0;

  comprar(produto){
    if (this.carrinho.indexOf(produto) === -1){
      this.carrinho.push(produto);
    }

    else{
      produto.quantidade+=1
    }
    this.soma+=produto.preco;
  }
}
