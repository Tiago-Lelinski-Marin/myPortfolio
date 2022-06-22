const recentWorks = document.querySelector('#recent-works');

// function cardsSection (portifolio)
const portifolio = [
  {
    heading: 'title of Featured card',
    highlight: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'assets/project-featured.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    badge4: 'Ruby',
    button: 'See project',
  },
  {
    heading: 'title of card 1',
    highlight: '1 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    image: 'assets/project1-web.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    badge4: 'Ruby',
  },
  {
    heading: 'title of card 2',
    highlight: '2 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    image: 'assets\project2.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
    badge4: 'Ruby',
  },
  {
    heading: 'title of card 3',
    highlight: '3 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    image: 'assets\project3.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
  {
    heading: 'title of card 4',
    highlight: '4 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    image: 'assets\project4.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
  {
    heading: 'title of card 5',
    highlight: '5 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    image: 'assets\project5.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
  {
    heading: 'title of card 6',
    highlight: '6 - A daily selection of privately personalized reads, no accounts or sign-ups require has been the industrys standard',
    image: 'assets\project6.jpg',
    badge1: 'css',
    badge2: 'html',
    badge3: 'Bootstrap',
  },
];

// -------------------
// create featured card
let article = document.createElement('article');
article.classList = 'featured';
recentWorks.appendChild(article);

// create img of card
const img = document.createElement('img');
img.src = (portifolio[0].image);
article.appendChild(img);

// create card wrap
let divWrap = document.createElement('div');
divWrap.classList = 'wrap-featured';
article.appendChild(divWrap);

// create title of card
let h3 = document.createElement('h3');
h3.classList = 'card-h';
h3.innerText = portifolio[0].heading;
divWrap.appendChild(h3);

// create card text
let p = document.createElement('p');
p.id = 'featured-p';
p.innerText = portifolio[0].highlight;
divWrap.appendChild(p);

// create the div of badges
div = document.createElement('div');
div.classList = 'lang';
divWrap.appendChild(div);

// add ul of badges
let ul = document.createElement('ul');
div.appendChild(ul);

// create badge items

let li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
let button = document.createElement('button');
button.innerHTML = portifolio[0].badge1;
li.appendChild(button);

li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
button = document.createElement('button');
button.innerHTML = portifolio[0].badge2;
li.appendChild(button);

li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
button = document.createElement('button');
button.innerHTML = portifolio[0].badge3;
li.appendChild(button);

li = document.createElement('li');
li.classList = 'lang-icons';
ul.appendChild(li);
button = document.createElement('button');
button.innerHTML = portifolio[0].badge4;
li.appendChild(button);

// create the button see project
button = document.createElement('button');
button.classList = 'small-button see-project';
button.innerHTML = 'See Project';
divWrap.appendChild(button);

// -----------------------
// loop to create the STANDARD cards
// ----------------------
for (i = 1; i < 7; i++) {
// create STANDARD cards
  article = document.createElement('article');
  article.classList = `card${i}`;
  recentWorks.appendChild(article);

  // create div
  divWrap = document.createElement('div');
  divWrap.classList = 'wrap-card';
  article.appendChild(divWrap);

  // create title of card
  h3 = document.createElement('h3');
  h3.classList = 'card-h';
  h3.innerHTML = portifolio[i].heading;
  divWrap.appendChild(h3);

  // create p
  p = document.createElement('p');
  p.classList = 'card-p';
  p.innerText = portifolio[i].highlight;
  divWrap.appendChild(p);

  // create div
  div = document.createElement('div');
  div.classList = 'lang';
  divWrap.appendChild(div);

  // create ul
  ul = document.createElement('ul');
  div.appendChild(ul);

  // create li-items
  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);

  // create badge items
  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  button = document.createElement('button');
  button.innerHTML = portifolio[i].badge1;
  li.appendChild(button);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  button = document.createElement('button');
  button.innerHTML = portifolio[i].badge2;
  li.appendChild(button);

  li = document.createElement('li');
  li.classList = 'lang-icons';
  ul.appendChild(li);
  button = document.createElement('button');
  button.innerHTML = portifolio[i].badge3;
  li.appendChild(button);

  // create the button see project
  div = document.createElement('div');
  div.classList = 'card-link';
  divWrap.appendChild(div);
  const a = document.createElement('a');
  a.classList = 'see-project';
  a.innerText = 'See Project';
  div.appendChild(a);
}

// -------------------
// create Details pop up
// -------------------