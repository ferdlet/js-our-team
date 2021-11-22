const membriTeam = 
[
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'image': 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'image': 'img/angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'image': 'img/walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'image': 'img/angela-lopez-social-media-manager.jpg'

    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'image': 'img/scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'image': 'img/barbara-ramos-graphic-designer.jpg'
    },
];

generateCard(membriTeam);

const addMember = document.getElementById('addMemberButton');
addMember.addEventListener('click', function () {
    addCard(membriTeam);
    generateCard(membriTeam);
})

function generateCard(array) {

    document.querySelector('.team-container').innerHTML = '';
    let cards = '';
    for (let i = 0; i < array.length; i++) {
        cards +=
            `
        <div class="team-card">
            <div class="card-image">
            <img
                src='${array[i].image}'
                alt='${array[i].nome}'
            />
            </div>
            <div class="card-text">
            <h3>${array[i].nome}</h3>
            <p>${array[i].ruolo}</p>
            </div>
        </div>
        `;

    }
    console.log(cards);
    document.querySelector('.team-container').innerHTML = cards;
};


function addCard(array) {
    const newName = document.getElementById('name');
    const newRole = document.getElementById('role');
    const newImage = document.getElementById('image');
    array.push({
        'nome': newName.value,
        'ruolo': newRole.value,
        'image': newImage.value
    });
    console.log(array);
}