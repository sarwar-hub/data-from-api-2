const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },
    {
      _id: "6079615d0489a32f948c416a",
      name: "Chevrolet Crossover",
      price: "434",
      description:
        "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
      
    },
  ];






  // get elements
  const title1 = document.getElementById('car-title-1');
  const title2 = document.getElementById('car-title-2');
  const description1 = document.getElementById('description-1');
  const description2 = document.getElementById('description-2');
  const price1 = document.getElementById('price-1');
  const price2 = document.getElementById('price-2');
  const imageContainer1 = document.getElementById('image-container-1');
  const imageContainer2 = document.getElementById('image-container-2');



  // set data
  title1.innerText = data[0].name;
  title2.innerText = data[1].name;

  description1.innerText = data[0].description;
  description2.innerText = data[1].description;

  price1.innerText = data[0].price;
  price2.innerText = data[1].price;


  imageContainer1.innerHTML = `
    <img class="w-full object-cover" src="${data[0].imageURL}">
  `;
  imageContainer2.innerHTML = `
    <img class="w-full object-cover" src="${data[1].imageURL}">
  `;