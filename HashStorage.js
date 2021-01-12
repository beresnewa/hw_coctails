class HashStorage {
    constructor () {
        this.store = {}
    }

    addValue(key, value) {
        this.store[key] = value;
    }
    getValue(key) {
        return this.store[key] || undefined;
    }
    deleteValue(key) {
        if(key in this.store) {
            return delete this.store[key];
        } else {
            return false
        }   
    }
    getKeys(){
        return Object.keys(this.store);
    }
}

const coctailsStorage = new HashStorage();

coctailsStorage.addValue('Cubalibre', {alcohol: true, ingredients: ['rum', 'coca-cola', 'lemon'], recipe: 'all ingredients mix'});
coctailsStorage.addValue('Margarita', {alcohol: true, ingredients: ['Водка Finlandia 50мл', 'Кофейный ликер 25мл', 'Лед в кубиках 120 г'], recipe: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой'}); 
coctailsStorage.addValue('Pelican', {alcohol: false, ingredients: ['Гренадин Monin 10мл', 'Клубничный сироп Monin 10мл', 'Персиковый сок 150мл', 'Лимонный сок 15мл', 'Банан 110г', 'Клубника 50г', 'Дробленый лед 60г'], recipe: 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'});  
coctailsStorage.addValue('Milkshake', {alcohol: false, ingredients: ['milk', 'ice-cream', 'vanilla'], recipe: 'all ingredients mix'}); 

const addButton = document.querySelector('#addCoctail');
addButton.onclick = function () {
    const name = window.prompt('Введите название коктеля');
    const isAlcohol = window.prompt('Напиток алкогольный?');
    
    coctailsStorage.addValue(name, {name, isAlcohol});
    alert ('Coctail was added');
}

const getButton = document.querySelector('#getCoctail');
getButton.onclick = function () {
    const name = window.prompt('Введите название коктеля');

    document.querySelector('#ingredients').innerText = `Вам понадобиться: ${coctailsStorage.getValue(name).ingredients}`
    document.querySelector('#recipe').innerText = `Рецепт приготовления: ${coctailsStorage.getValue(name).recipe}`;
}

const deleteButton = document.querySelector('#deleteCoctail');
deleteButton.onclick = function () {
    const name = window.prompt('Введите название коктеля');
    
    coctailsStorage.deleteValue(name);
}

const getListCoctailsButton = document.querySelector('#listCoctails');
getListCoctailsButton.onclick = function () {
    document.querySelector('#list').innerText = coctailsStorage.getKeys()
}

