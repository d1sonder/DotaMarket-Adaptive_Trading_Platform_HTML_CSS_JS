
const items = [
    { time: "Сегодня 13:57", price: "1 000 000 руб.", itemName: "Pudge Arcana" },
    // Другие товары
];

// Список ваших вещей для продажи
const salesData = [
    { time: "Сегодня 13:57", price: "1 000 000 руб.", itemName: "Pudge Arcana" },
    // Добавьте сюда остальные ваши записи
];

function updateSalesItems() {
    if (salesData.length >= 3) {
        salesData.shift();
        const removedItem = salesItemsElement.getElementsByClassName('section2-div1-div')[0];
        const firstChild = removedItem.firstElementChild;
        
        firstChild.style.opacity = '0';
        setTimeout(() => {
            removedItem.removeChild(firstChild);
            updateContainerHeight(); // Обновление высоты контейнера после удаления элемента
        }, 400);
    }
    
    // Добавление нового элемента
    const item = salesData[salesData.length - 1];
    const newItem = document.createElement('div');
    
    newItem.classList.add('section2-div1-div');
    newItem.innerHTML = `
        <div class="section2-div1-div-p">
            <p class="section2-div1-div-p-p1">${item.time}</p>
            <p class="section2-div1-div-p-p2">${item.price}</p>
        </div>
        <p class="section2-div1-p-p">${item.itemName}</p>
    `;
    
    salesItemsElement.insertBefore(newItem, salesItemsElement.firstElementChild);
    
    // Анимация появления
    newItem.style.opacity = '0';
    setTimeout(() => {
        newItem.style.opacity = '1';
        updateContainerHeight(); // Обновление высоты контейнера после добавления элемента
    }, 100);
}

function updateContainerHeight() {
    let totalHeight = 0;
    salesItemsElement.childNodes.forEach(item => {
        totalHeight += item.offsetHeight;
    });
    salesItemsElement.style.maxHeight = totalHeight + 'px';
}

const salesItemsElement = document.getElementById('sales-items');


// Обновление ленты продаж каждую 1 секунду
updateSalesItems();
setInterval(() => {
    updateSalesItems();
}, 1000);
