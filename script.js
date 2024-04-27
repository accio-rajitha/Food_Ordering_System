async function getMenu() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
      const menuItems = await response.json();
      displayMenu(menuItems);
      return menuItems;
    } catch (error) {
      console.error('Error fetching menu:', error);
      throw new Error('Failed to fetch menu');
    }
  }

  
  function displayMenu(menuItems) {
    const menuList = document.getElementById('menu-list');
    menuItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.price}`;
      menuList.appendChild(li);
    });
  }

 
  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const order = {
          burgers: getRandomBurgers()
        };
        resolve(order);
      }, 2500);
    });
  }

  
  function getRandomBurgers() {
    const menu = [
      { name: 'Cheeseburger', price: 5 },
      { name: 'Chicken Burger', price: 6 },
      { name: 'Veggie Burger', price: 4 }
    ];
    const burgers = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * menu.length);
      burgers.push(menu[randomIndex]);
    }
    return burgers;
  }

 
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }

  
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }

  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }

  
  async function startOrder() {
    try {
      const menuItems = await getMenu();
      const order = await takeOrder();
      console.log('Order:', order);
      const prepStatus = await orderPrep();
      console.log('Preparation Status:', prepStatus);
      const paymentStatus = await payOrder();
      console.log('Payment Status:', paymentStatus);
      thankyouFnc();
    } catch (error) {
      console.error('Error:', error);
      
    }
  }

  
  startOrder();
