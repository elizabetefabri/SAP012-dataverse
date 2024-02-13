export const renderItems = (data) => {
  const ul = document.createElement('ul');
  ul.classList.add('container__card');

  data.forEach((item) => {
    ul.innerHTML += `
      <li itemscope itemtype="Coffee" class="container__card">
        <div class="content__card">
          <dl itemscope itemtype="#">
            <dt><img src="${item.imageUrl}" alt="Imagem do Filme" itemprop="${item.name}" class="image__card" /></dt>
            <dd itemprop="name" class="name__card">${item.name}</dd>

            <dd itemprop="shortDescription" class="shortDescription">${item.shortDescription}</dd>
            <dd itemprop="intensidadeCoffe" class="intensidadeCoffe">${item.facts.intensidadeCoffe}</dd>

          </dl>
        </div>
      </li>
    `;
  });
  return ul;
}
