//criação de uma timeline do GSAP com animações, sincronizadas com o scroll

var tl= gsap.timeline({
    scrollTrigger:{ 
        trigger:'.two',
        start: '0% 95%',
        end:'70% 50%',
        scrub:true, // animação sincroniza com o movimento do scroll
        markers: true, //depuração

    },
});

tl.to(
    '#fanta',
    {
        top:'130%', //move o elemento com id fanta 120% do topo
        left:'0%',
    },
    'orange'
); //nomeando esse trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top:'160%', //move o elemento com id fanta 120% do topo
        left:'21%',
    },
    'orange'
);

tl.to(
    '#laranja',
    {
        width:'15%',
        top:'165%', //move o elemento com id fanta 120% do topo
        right:'10%',
    },
    'orange'
);


tl.to(
    '#folha',
    {
        top:'110%', //move o elemento com id fanta 120% do topo
        rotate:'530deg',
        left:'70%',
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top:'170%', //move o elemento com id fanta 120% do topo
        rotate:'530deg',
        left:'0%',
    },
    'orange'
);

// criando outra timeline

var tl2= gsap.timeline({
    scrollTrigger:{ 
        trigger:'.three',
        start: '0% 95%',
        end:'20% 50%',
        scrub:true, // animação sincroniza com o movimento do scroll
        markers: true, //depuração

    },
});

tl2.from(
    '.lemon',
    {
        rotate:'-90deg',
        left:'-100%',
        top:'100%',

    },
    'ca'
);


tl2.from(
    '#Coca-Cola',
    {
        rotate:'-90deg',
        left:'-100%',
        top:'100%',

    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate:'-90deg',
        left:'-100%',
        top:'100%',

    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width:'18%',
        left:'41%',
        top:'204%',


    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width:'35%',
        left:'33%',
        top:'215%',


    },
    'ca'
);