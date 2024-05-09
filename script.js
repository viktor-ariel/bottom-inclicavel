document.getElementById('sim').addEventListener('click', function() {
    window.location.href = 'sim.html'; // Substitua 'outra_pagina.html' pela URL da sua outra página
  });
  
  document.getElementById('nao').addEventListener('mouseover', function() {
    // Calcula uma nova posição aleatória para o botão "Não"
    var container = document.querySelector('.body');
    var buttonNao = document.getElementById('nao');
    var containerRect = container.getBoundingClientRect();
    var containerWidth = containerRect.width;
    var containerHeight = containerRect.height;
    var buttonWidth = buttonNao.offsetWidth;
    var buttonHeight = buttonNao.offsetHeight;

    // Define a distância mínima entre a borda do contêiner e a posição do botão
    var minDistance = 50;

    // Calcula a nova posição considerando a distância mínima
    var minX = minDistance;
    var minY = minDistance;
    var maxX = containerWidth - buttonWidth - minDistance;
    var maxY = containerHeight - buttonHeight - minDistance;

    // Define a nova posição do botão "Não"
    buttonNao.style.position = 'absolute';
    buttonNao.style.left = Math.floor(Math.random() * (maxX - minX + 1)) + minX + 'px';
    buttonNao.style.top = Math.floor(Math.random() * (maxY - minY + 1)) + minY + 'px';
});



document.getElementById('nao1').addEventListener('mouseover', function() {
    // Calcula uma nova posição aleatória para o botão "Não"
    var container = document.querySelector('.body');
    var buttonNao = document.getElementById('nao1');
    var containerRect = container.getBoundingClientRect();
    var containerWidth = containerRect.width;
    var containerHeight = containerRect.height;
    var buttonWidth = buttonNao.offsetWidth;
    var buttonHeight = buttonNao.offsetHeight;

    // Define a distância mínima entre a borda do contêiner e a posição do botão
    var minDistance = 50;

    // Calcula a nova posição considerando a distância mínima
    var minX = minDistance;
    var minY = minDistance;
    var maxX = containerWidth - buttonWidth - minDistance;
    var maxY = containerHeight - buttonHeight - minDistance;

    // Define a nova posição do botão "Não"
    buttonNao.style.position = 'absolute';
    buttonNao.style.left = Math.floor(Math.random() * (maxX - minX + 1)) + minX + 'px';
    buttonNao.style.top = Math.floor(Math.random() * (maxY - minY + 1)) + minY + 'px';
});

document.getElementById('nao2').addEventListener('mouseover', function() {
    // Calcula uma nova posição aleatória para o botão "Não"
    var container = document.querySelector('.body');
    var buttonNao = document.getElementById('nao2');
    var containerRect = container.getBoundingClientRect();
    var containerWidth = containerRect.width;
    var containerHeight = containerRect.height;
    var buttonWidth = buttonNao.offsetWidth;
    var buttonHeight = buttonNao.offsetHeight;

    // Define a distância mínima entre a borda do contêiner e a posição do botão
    var minDistance = 50;

    // Calcula a nova posição considerando a distância mínima
    var minX = minDistance;
    var minY = minDistance;
    var maxX = containerWidth - buttonWidth - minDistance;
    var maxY = containerHeight - buttonHeight - minDistance;

    // Define a nova posição do botão "Não"
    buttonNao.style.position = 'absolute';
    buttonNao.style.left = Math.floor(Math.random() * (maxX - minX + 1)) + minX + 'px';
    buttonNao.style.top = Math.floor(Math.random() * (maxY - minY + 1)) + minY + 'px';
});