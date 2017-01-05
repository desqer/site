---
layout: post
title: 'React Native vs Ionic vs Weex'
description: Comparação dos frameworks React Native, Ionic e Weex e como escolhemos a melhor alternativa para o Desqer
categories: mobile
tags: [react native]
thumbnail: koala.jpg
---

Durante o desenvolvimento do aplicativo mobile do Desqer testamos algumas alternativas de frameworks para desenvolvimento mobile atuais. Estávamos em busca de uma plataforma que conseguisse cubrir todas funcionalidades que desejávamos sem perder performance. Alguns outros pontos como comunidade e a stack utilizada no desenvolvimento também foram fatores para a tomada de decisão. Basicamente, buscávamos algo que nos suprisse nos seguintes itens:

* Performance;
* Stack utilizada;
* Curva de aprendizado;
* Comunidade;
* Plataformas.

## Frameworks

Os frameworks estudados e detalhados nesse post são o [Ionic](https://ionicframework.com/), o [React Native](https://facebook.github.io/react-native/) e por fim o [Weex](https://alibaba.github.io/weex/).

### React Native

O [React Native](https://facebook.github.io/react-native/) é um framework criado pelo Facebook na busca de suprir a necessidade de desenvolvedores web na criação de aplicações nativas. Diferente do Ionic, apesar do React utilizar Javascript como sua linguagem principal, todo código gerado pela aplicação é nativo, assim, a performance se torna maior já que não é necessário renderizar um navegador no cliente para reprodução da interface.

### Ionic framework

O [Ionic](https://ionicframework.com/) é um framework utilizado para criação de aplicativos mobile híbridos, ou seja, todo código feito na aplicação é escrito utilizando linguagens web (HTML/CSS/JS). A principal qualidade o Ionic Framework é a facilidade na criação das interfaces e a reutilização do código entre os ambientes Android e iOS.

### Weex

[Weex](https://alibaba.github.io/weex/) é um framework open-source que possui o mesmo intuito do React Native, porém ao invés de utilizar o ReactJS como stack de desenvolvimento, utiliza o [VueJS](https://vuejs.org/) para criação e manipulação dos componentes da interface. A principal desvantagem desse framework é sua comunidade ainda pequena e a não-utilização da versão 2 do VueJS.
