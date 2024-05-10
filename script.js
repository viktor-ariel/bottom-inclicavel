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


function loop() {
            // Definindo o número máximo de vezes para o loop
            var maxLoops = 5;

            // Variável para controlar o número de loops
            var loopCount = 0;

            // Função que será executada repetidamente
            function executarLoop() {
                // Verifica se o limite de loops foi atingido
                if (loopCount < maxLoops) {
                    // Incrementa o contador de loops
                    loopCount++;

                    // Redireciona para a página index.html
                    window.location.href = "index.html";
                } else {
                    // Limpa o intervalo de repetição
                    clearInterval(intervalID);
                }
            }

            // Chama a função executarLoop repetidamente a cada 1000ms (1 segundo)
            var intervalID = setInterval(executarLoop, 1000);
}
