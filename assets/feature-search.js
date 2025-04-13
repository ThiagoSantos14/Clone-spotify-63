//Feature para fazer buscas de styles de music ao clicar no btn search
const inputSearch = document.querySelector('.input-search');
const btnSearch = document.querySelector('.btn-search');

btnSearch.addEventListener('click', function(e) {
    e.preventDefault();

    const inputSearchValue = inputSearch.value;

    const textPlaceholder = document.querySelector('.textPlaceholder');

    const contantSertanejo = document.querySelector('.contantSertanejo');

    const contantFunk = document.querySelector('.contantFunk');

    const contantTrap = document.querySelector('.contantTrap');

    const contantPhonk = document.querySelector('.contantPhonk');

    const contantInternacional = document.querySelector('.contantInternacional');

    if (inputSearchValue === 'Sertanejo' || inputSearchValue === 'sertanejo') {
        contantSertanejo.style.background = '#dbdbdb';
        contantSertanejo.style.borderRadius = '10px';
        contantSertanejo.style.color = '#19B14F';

        contantFunk.style.background = '#ecebeb';
        contantFunk.style.borderRadius = '10px';
        contantFunk.style.color = 'black';

        contantTrap.style.background = '#ecebeb';
        contantTrap.style.borderRadius = '10px';
        contantTrap.style.color = 'black';

        contantPhonk.style.background = '#ecebeb';
        contantPhonk.style.borderRadius = '10px';
        contantPhonk.style.color = 'black';

        contantInternacional.style.background = '#ecebeb';
        contantInternacional.style.borderRadius = '10px';
        contantInternacional.style.color = 'black';

        textPlaceholder.style.display = 'none';

    }else if (inputSearchValue === 'Funk' || inputSearchValue === 'funk') {
        contantFunk.style.background = '#dbdbdb';
        contantFunk.style.borderRadius = '10px';
        contantFunk.style.color = '#19B14F';

        contantSertanejo.style.background = '#ecebeb';
        contantSertanejo.style.borderRadius = '10px';
        contantSertanejo.style.color = 'black';

        contantTrap.style.background = '#ecebeb';
        contantTrap.style.borderRadius = '10px';
        contantTrap.style.color = 'black';

        contantPhonk.style.background = '#ecebeb';
        contantPhonk.style.borderRadius = '10px';
        contantPhonk.style.color = 'black';

        contantInternacional.style.background = '#ecebeb';
        contantInternacional.style.borderRadius = '10px';
        contantInternacional.style.color = 'black';

        textPlaceholder.style.display = 'none';

    }else if (inputSearchValue === 'Trap' || inputSearchValue === 'trap') {
        contantTrap.style.background = '#dbdbdb';
        contantTrap.style.borderRadius = '10px';
        contantTrap.style.color = '#19B14F';

        contantSertanejo.style.background = '#ecebeb';
        contantSertanejo.style.borderRadius = '10px';
        contantSertanejo.style.color = 'black';

        contantFunk.style.background = '#ecebeb';
        contantFunk.style.borderRadius = '10px';
        contantFunk.style.color = 'black';

        contantPhonk.style.background = '#ecebeb';
        contantPhonk.style.borderRadius = '10px';
        contantPhonk.style.color = 'black';

        contantInternacional.style.background = '#ecebeb';
        contantInternacional.style.borderRadius = '10px';
        contantInternacional.style.color = 'black';

        textPlaceholder.style.display = 'none';

    }else if (inputSearchValue === 'Phonk' || inputSearchValue === 'phonk') {
        contantPhonk.style.background = '#dbdbdb';
        contantPhonk.style.borderRadius = '10px';
        contantPhonk.style.color = '#19B14F';

        contantSertanejo.style.background = '#ecebeb';
        contantSertanejo.style.borderRadius = '10px';
        contantSertanejo.style.color = 'black';

        contantFunk.style.background = '#ecebeb';
        contantFunk.style.borderRadius = '10px';
        contantFunk.style.color = 'black';

        contantTrap.style.background = '#ecebeb';
        contantTrap.style.borderRadius = '10px';
        contantTrap.style.color = 'black';

        contantInternacional.style.background = '#ecebeb';
        contantInternacional.style.borderRadius = '10px';
        contantInternacional.style.color = 'black';

        textPlaceholder.style.display = 'none';

    }else if (inputSearchValue === 'Internacional' || inputSearchValue === 'internacional') {
        contantInternacional.style.background = '#dbdbdb';
        contantInternacional.style.borderRadius = '10px';
        contantInternacional.style.color = '#19B14F';

        contantPhonk.style.background = '#ecebeb';
        contantPhonk.style.borderRadius = '10px';
        contantPhonk.style.color = 'black';

        contantSertanejo.style.background = '#ecebeb';
        contantSertanejo.style.borderRadius = '10px';
        contantSertanejo.style.color = 'black';

        contantFunk.style.background = '#ecebeb';
        contantFunk.style.borderRadius = '10px';
        contantFunk.style.color = 'black';

        contantTrap.style.background = '#ecebeb';
        contantTrap.style.borderRadius = '10px';
        contantTrap.style.color = 'black';

        textPlaceholder.style.display = 'none';

    }else {
        textPlaceholder.style.display = 'flex';
        textPlaceholder.style.justifyContent = 'flex-end';
        textPlaceholder.style.marginLeft = '-50vh';
        textPlaceholder.style.position = 'absolute';
        textPlaceholder.style.width = '100%';
        textPlaceholder.style.color = 'red';
    }
});