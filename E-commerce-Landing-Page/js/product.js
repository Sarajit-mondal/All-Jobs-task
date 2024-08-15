const productContainer = document.querySelector(".product_container");
let allProducts = [];
const getProduct = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allProducts = data.products;
      setProduct(data.products)
    });
};
// show products on ui
const setProduct = (products) => {
  console.log(products);
  pagination(products.length)

  // clear products card
  productContainer.innerHTML = ''
  products.map((product, inx) => {
    // create product card
    const productContaint = document.createElement("div");
    const div = document.createElement("div");
    
    div.classList.add("product")
    productContainer.appendChild(div)

   div.innerHTML = `
          <img
            src=${product.thumbnail}
            alt=""
          />
          <h2>${
            product.title.length > 20
              ? product.title.slice(0, 20) + "..."
              : product.title
          }</h2>
          <!-- price -->
          <div class="product-price">
            <h4>Price: <span>$${product.price}</span></h4>
            <h4>dicount: <span>${product.discountPercentage}%</span></h4>
          </div>
          <!-- ratting and stock -->
          <div class="ratting-stock">
            <h4>Rating: <span>${product.rating}</span></h4>
             <h4>Total Reviews: <span>${Math.ceil(
               Math.random() * 200 + 10
             )}</span></h4>
          </div>
     
          <!-- buy now button -->
        `;
        const addButton = document.createElement("div")
        addButton.innerHTML= `<button class="add">+ $${(
              product.price -
              (product.price / 100) * product.discountPercentage
            ).toFixed(2)}</button>`
        div.appendChild(addButton)
    productContainer.appendChild(div);


    // addEventListener button
    addButton.addEventListener("click",() =>{
      console.log(product.title)
    })
    // Call the function to update the cart initially
  
updateCart(addButton);
  });
};

// filter
// filter
const categorys = document.getElementById('category');

fetch('https://dummyjson.com/products/category-list')
.then(res => res.json())
.then(data => data.map(category =>{
const option = document.createElement('option')
option.value = category;
option.innerText = category;
categorys.appendChild(option)
}))


function handleFilterChange(identify) {
  // Get the values of all select elements

  const price = document.getElementById('price').value;
  const rating = document.getElementById('rating').value;


// check which category
if(identify === "category"){
  if(categorys.value !== "all"){
    getProduct(`https://dummyjson.com/products/category/${categorys.value}`)
  }else {
   getProduct("https://dummyjson.com/products?limit=60")
  }
}
// filter  price range
if(identify === "price"){
  if(price !== "all"){
   const priceRange = price.split('-').map(Number);
   const pricefilter = allProducts.filter(result => result.price >= priceRange[0] && result.price <= priceRange[1] &&  result) ;
   const sortPrice = pricefilter.sort((a,b)=> a.price - b.price)
   setProduct(sortPrice)
 
  }else {
    getProduct("https://dummyjson.com/products?limit=60")
  }
}
// filter rating
console.log(identify)
if(identify === "stars"){
  if(rating !== "all"){
 
   const filterRating = allProducts.filter(result => result.rating >= parseInt(rating) && result.rating < parseInt(rating)+1 &&  result);
   const sortRating = filterRating.sort((a,b)=> a.rating - b.rating)
   setProduct(sortRating)
 
  }else {
    getProduct("https://dummyjson.com/products?limit=60")
  }
}


}



// pagination page 
// pagination page 
// pagination page 

const pagination = (total)=>{

    let totalData = total;
    let showPerPage = 10; // Default items per page
    let currentPage = 1;
    console.log(totalData)
  
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const itemsPerPageSelect = document.getElementById('itemsPerPage');
    const pageButtonsContainer = document.getElementById('pageButtons');
  
    function updatePagination() {
        const totalPages = Math.ceil(totalData / showPerPage);
        pageButtonsContainer.innerHTML = '';
  
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                currentPage = i;
                updatePagination();
            });
            pageButtonsContainer.appendChild(pageButton);
        }
  
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }
  
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });
  
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(totalData / showPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });
  
    itemsPerPageSelect.addEventListener('change', (e) => {
        showPerPage = parseInt(e.target.value);
        currentPage = 1; // Reset to first page on items per page change
        updatePagination();
    });
  
    // Initialize pagination on page load
    updatePagination();
  
  
}

getProduct("https://dummyjson.com/products?limit=60");



///products cart
// Sample cart items


function updateCart(button) {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Clear existing items
  cartItemsContainer.innerHTML = '';

  let total = 0;

  // cartItems.forEach(item => {
  //   const listItem = document.createElement('li');
  //   listItem.innerHTML = `<h4>${item.title}</h4><p>$${item.price.toFixed(2)}</p>`;
  //   cartItemsContainer.appendChild(listItem);

  //   total += item.price;
  // });

  // Apply discount if total is more than $200
  // if (total >= 200) {
  //   total = total * 0.9;
  // }

  // totalPriceElement.textContent = `$${total.toFixed(2)}`;
}


