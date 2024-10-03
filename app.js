let quantity = 0;

function selectTicet(element) {
    console.log(element);

    if(element){
        quantity = quantity + 1;
    }
    
    if(quantity > 4) return;

    // updating ticekt quantity 
    document.querySelector('.ticket').innerText = quantity;

    // create new element
    const newHTML = `
        <div class="flex justify-between text-sm font-bold text-black mt-6">
            <div>${element.id}</div>
            <div>Economy</div>
            <div>550</div>
        </div>
    `
    const collection = document.querySelector('.collection');
    collection.insertAdjacentHTML("afterend", newHTML);

    // change selected seat background
    // Change selected seat background
    element.classList.remove('bg-[#e5e5e6]');
    element.classList.add('bg-[#1dd100]', 'text-white');
}