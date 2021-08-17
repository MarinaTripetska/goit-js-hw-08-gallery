const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const galleryContainerEl = document.querySelector('.js-gallery')
const lightboxImgEl = document.querySelector('.lightbox__image')
const lightboxEl = document.querySelector('.js-lightbox')
const btnCloseEl = document.querySelector('button[data-action="close-lightbox"]')



function createGaleryList(array) {
   return array.map(item => `<li class="gallery__item">
      <a class="gallery__link" href="./">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>
    </li>
    `).join('')
   
}
galleryContainerEl.innerHTML = createGaleryList(galleryItems)

galleryContainerEl.addEventListener('click', onClickOpenModal)


function onClickOpenModal(e) {
  
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') return;
  lightboxEl.classList.add('is-open')
    
  modalOpen(e.target.dataset.source, e.target.alt, e.target.src);
  lightboxEl.addEventListener('click', onClickCloseModal)
  window.addEventListener('keydown', onEscPressCloseModal)
  // window.addEventListener('keydown', onClikArrowChangeImg)
}
  

function onClickCloseModal(e) {
  
  if (e.target === btnCloseEl || e.target.classList.contains('lightbox__overlay')) {
    lightboxEl.removeEventListener('click', onClickCloseModal)
    // window.removeEventListener('keydown', onClikArrowChangeImg)
    window.removeEventListener('keydown', onEscPressCloseModal)
  modalClose(lightboxEl, lightboxImgEl)
}
}
function onEscPressCloseModal(e) {
  
  if (e.code === 'Escape') {
    window.removeEventListener('keydown', onEscPressCloseModal)
    // window.removeEventListener('keydown', onClikArrowChangeImg)
    modalClose(lightboxEl, lightboxImgEl)
  }
};

// function onClikArrowChangeImg(e) {
//     if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
//       console.log(e.code);
//       // replaceImg(src, sourse)
   
//   }

// }

// function replaceImg() {
//   const imgArray = document.querySelectorAll('.gallery__image');
//   imgArray.forEach(item => {
//     console.log(item)
   //   })

// }
// replaceImg();

function modalClose(elemBox, elemImg) {
elemBox.classList.remove('is-open')
  elemImg.src = ''
  elemImg.alt = ''
};
function modalOpen(sourse, alt, src) {
    lightboxImgEl.src = sourse;
  lightboxImgEl.alt = alt;
  lightboxImgEl.setAttribute(`data-source`, src)
  
};
