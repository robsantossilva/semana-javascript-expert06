Server Layers
    service -> Tudo que é regra de negocio ou processamento
    controller -> intermediar a camada de apresentação e a camada de negocio
    routes = camada de apresentação
    server = responsavel por criar o servidor (mas não instancia)
    index = instanciar o servidor e expoe para a web (lado da infraestrutura)
    config = tudo que for estático do projeto

client
    service = tudo que é regra  de negocio ou processamento
    view = yudo que é elemento HTML (visualização)
    controller = é o intermedio entre a view e o service
    index = Factory = quem inicializa tudo