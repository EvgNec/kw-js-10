import './css/styles.css';
import { fetchCountries } from './js/func';
import { debounce } from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const searchBoxRef = document.getElementById('search-box');
const countryListRef = document.getElementById('.country-list');
const countryInfoRef = document.getElementById('.country-info');

searchBoxRef.addEventListener('input', debounce(searchHandler, DEBOUNCE_DELAY));

function searchHandler(e) {
    e.preventDefault();
    const name = searchBoxRef.ariaValueMax.trim();

    if (name) {
        return fetchCountries(name).then(creatMarkup).catch(error);
    }
    else {
 clearHTML;
    }
}

function creatMarkup(countries) {
    clearHTML;
    if 
}



function clearHTML() {
       countryListRef.innerHTML = '';
    countryInfoRef.innerHTML = ''; 
}

