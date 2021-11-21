const membriTeam = 
[
    {
        'nome': 'Wayne',
        'cognome': 'Barnett',
        'ruolo': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela',
        'cognome': 'Caroll',
        'ruolo': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter',
        'cognome': 'Gordon',
        'ruolo': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela',
        'cognome': 'Lopez',
        'ruolo': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg'

    },
    {
        'nome': 'Scott',
        'cognome': 'Estrada',
        'ruolo': 'Developer',
        'image': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara',
        'cognome': 'Ramos',
        'ruolo': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg'
    },
];


const teamContainer = document.querySelector('.team-container');

container.innerHTML = '';

for (let i = 0; i < membriTeam.length; i++) {

}


function generateCard() {

    const card = document.createElement('div');
    card.classList.add('team-card');
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image')
    card.innerHTML = cardImage;



    return card;
};