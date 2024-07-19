const cars = [
    {
        name: 'bugatti',
        price: '$1,000,000',
        top_speed: '350KPH',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsum magni nulla vel nemo veniam deleniti enim ut debitis voluptas quis vero itaque doloribus dicta.',
        dealer: 'bugatti personal cars',
        image_url: 'img/bugatti.jfif'
    },
    {
        name: 'ferrari',
        price: '$750,000',
        top_speed: '300KPH',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsum magni nulla vel nemo veniam deleniti enim ut debitis voluptas quis vero itaque doloribus dicta.',
        dealer: 'fast auto cars',
        image_url: 'img/ferrari.jfif'
    },
    {
        name: 'mclaren',
        price: '$875,000',
        top_speed: '275KPH',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsum magni nulla vel nemo veniam deleniti enim ut debitis voluptas quis vero itaque doloribus dicta.',
        dealer: 'next level cars',
        image_url: 'img/mclaren.jfif'
    },
    {
        name: 'mercedes',
        price: '$250,000',
        top_speed: '200KPH',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsum magni nulla vel nemo veniam deleniti enim ut debitis voluptas quis vero itaque doloribus dicta.',
        dealer: 'metal build auto',
        image_url: 'img/mercedes.jfif'
    },
    {
        name: 'rolls royce',
        price: '$1,250,000',
        top_speed: '220KPH',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsum magni nulla vel nemo veniam deleniti enim ut debitis voluptas quis vero itaque doloribus dicta.',
        dealer: 'luxury obsessions',
        image_url: 'img/rolls_royce.jfif'
    },
    {
        name: 'suzuki',
        price: '$85,000',
        top_speed: '200KPH',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ipsum magni nulla vel nemo veniam deleniti enim ut debitis voluptas quis vero itaque doloribus dicta.',
        dealer: 'convenience dealers',
        image_url: 'img/suzuki.jfif'
    },
];

const appendCars = () => {
    for (let index = 0; index < cars.length; index++) {
        const car_details = cars[index];

        // Car Card HTML
        const carDiv = `
        <div class="p-2 bg-red-500 rounded" id=car_${index}>
            <div class="flex justify-center items-center">
                <img src="${car_details.image_url}" alt="car">
            </div>
            <h4 class="text-1xl font-bold p-2">${car_details.name}</h4>
            <h4 class="text-1xl font-bold px-2 mb-2">${car_details.price}</h4>
            <div class="flex items-center justify-between">
                <a href="#" class="rounded p-2 bg-blue-900 text-white mx-2" onclick="displayPopUp('car_${index}')">View</a>
                <a href="#" class="rounded p-2 bg-blue-900 text-white mx-2"  onclick="addCartToCart('car_${index}')">Add to Card</a>
            </div>
        </div>
        `
        carsSection = document.getElementById('carsSection')
        carsSection.innerHTML += carDiv
    }
}

const displayPopUp = (car_id) => {
    const popUpDiv = document.getElementById('pop_up')

    const selected_car_index_in_array = car_id.split("_")[1]
    selected_car_details = cars[selected_car_index_in_array]

    // View Car PopUp HTML
    popUpDiv.innerHTML  = `
        <div class="bg-green-200 w-1/2 rounded px-12 pb-12 flex">
            <div>
                <div class="mb-3 flex justify-end -mr-12 ">
                    <p class="bg-red-900 text-white rounded-full w-5 h-5 flex justify-center items-center cursor-pointer" onclick="closePopUp()">
                        X
                    </p>
                </div>
                <div class="p-2 rounded">
                    <div class="flex justify-center items-center">
                        <img src="${selected_car_details.image_url}" alt="car">
                    </div>
                    <h4 class="text-1xl font-bold p-2">${selected_car_details.name}</h4>
                    <h4 class="text-1xl font-bold px-2 mb-2">${selected_car_details.price}</h4>
                    <div class="flex items-center justify-between">
                    </div>
                </div>
                <p>${selected_car_details.description}</p>
            </div>
        </div>
    `

    popUpDiv.classList.remove("hidden")
}

const closePopUp = () => {
    const popUpDiv = document.getElementById('pop_up')

    popUpDiv.classList.add('hidden')
}

const addCartToCart = (car_id) => {
    const selected_car_index_in_array = car_id.split("_")[1]
    selected_car_details = cars[selected_car_index_in_array]

    const number_of_cars = prompt("How many cars do you want?")
    console.log(number_of_cars)
}

window.onload = function() {
    appendCars();
};
