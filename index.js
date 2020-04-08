const usuarios = [
    {
        nome:"Pedro",
        tecnologias: [
            "HTML",
            "CSS"
        ]
    },
    {
        nome:"Laura",
        tecnologias: [
            "JavaScript",
            "CSS"
        ]
    },
    {
        nome:"Denis",
        tecnologias: [
            "HTML",
            "Node Js"
        ]
    }      
];

for ( let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(',')}`)
}
