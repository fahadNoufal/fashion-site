const menuIcon = document.querySelector(".menu-icon");
const navLinks=document.querySelector(".nav-links");
const closeMenuIcon=document.querySelector(".close-menu-icon");

/* setting cart number and adding items to storage */

const cartIcon=document.querySelector(".cart-icon");
const cartItemNo=document.querySelector(".cart-item-no");

if (localStorage.getItem("cartNo")>0){
    cartItemNo.innerHTML=localStorage.getItem("cartNo")
}else{
    localStorage.setItem("cartNo",0);
    cartItemNo.style.opacity="0";
}

/*navbar settings*/

menuIcon.addEventListener("click",()=> {
    navLinks.classList.add("mob-nav-links")
    menuIcon.style.right="-15%";
    cartIcon.style.right="-26%";
    cartItemNo.style.right="-24%";
    closeMenuIcon.style.visibility="visible";
    navLinks.style.right="0";
})

closeMenuIcon.addEventListener("click",()=>{
    navLinks.classList.remove("mob-nav-links")
    menuIcon.style.right="15%"
    cartIcon.style.right="26%";
    cartItemNo.style.right="24%";
    closeMenuIcon.style.visibility="hidden";
    navLinks.style.right="-500px";
})

/* PRODUCT LIST  */

var productList=[
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"98$",
        src:"images/products/f1.jpg",
        sNo:'s1',
        quantity:0,
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"82$",
        src:"images/products/f2.jpg",
        sNo:'s2',
        quantity:0,
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"78$",
        src:"images/products/f3.jpg",
        quantity:0,
        sNo:'s3',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"70$",
        src:"images/products/f4.jpg",
        quantity:0,
        sNo:'s4',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"72$",
        src:"images/products/f5.jpg",
        quantity:0,
        sNo:'s5',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"98$",
        src:"images/products/f6.jpg",
        quantity:0,
        sNo:'s6',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"78$",
        src:"images/products/f7.jpg",
        quantity:0,
        sNo:'s7',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"80$",
        src:"images/products/f8.jpg",
        quantity:0,
        sNo:'s8',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"78$",
        src:"images/products/n1.jpg",
        quantity:0,
        sNo:'s9',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"90$",
        src:"images/products/n2.jpg",
        quantity:0,
        sNo:'s10',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"69$",
        src:"images/products/n3.jpg",
        quantity:0,
        sNo:'s11',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"62$",
        src:"images/products/n4.jpg",
        quantity:0,
        sNo:'s12',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"88$",
        src:"images/products/n5.jpg",
        quantity:0,
        sNo:'s13',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"78$",
        src:"images/products/n6.jpg",
        quantity:0,
        sNo:'s14',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"78$",
        src:"images/products/n7.jpg",
        quantity:0,
        sNo:'s15',
    },
    {
        company:"adidas",
        model:"Cartoon Astronaut T-Shirt",
        stars:"⭐⭐⭐⭐⭐",
        price:"70$",
        src:"images/products/n8.jpg",
        quantity:0,
        sNo:'s16',
    }
]



/* updating cart Icon Number  */

function setItems(prod){

    var storedProducts=JSON.parse(localStorage.getItem("productsInCart"));
    
    if (storedProducts){

        if (prod.sNo in storedProducts){
            storedProducts[prod.sNo].quantity +=1;
        }

        else{
            prod.quantity=1;
            storedProducts={
                ...storedProducts,[prod.sNo]:prod
            }
        }

    }else{
        prod.quantity=1;
        storedProducts={[prod.sNo]:prod};
    }
localStorage.setItem("productsInCart",JSON.stringify(storedProducts));
}

var updateCartNumber=function(product){
    
    // setting current product to the local storage.
    localStorage.setItem("currentProduct",JSON.stringify(product));
}

const allProducts=document.querySelectorAll(".item");
for (let i=0;i<allProducts.length;i++){
    console.log("done");
    allProducts[i].addEventListener("click",()=>updateCartNumber(productList[i]));

    // if it is product page, we displays last 8 products instead of 1st 8 products.
    if (document.querySelector(".single-shop-page")){
        allProducts[i].addEventListener("click",()=>updateCartNumber(productList[8+i]));
    }

}

/* SETTING UP THE CART TABLE */

if (document.querySelectorAll(".cart-table tbody").length!=0){

    var cTotal=0; //counting total amount foe products in the cart.
    function displayCartTable(cartInMemory){

        var cartInsideMemory=cartInMemory;
        
        var noOfRows=Object.keys(cartInsideMemory).length-1;
        var tableBody=document.querySelector(".cart-table tbody");
        tableBody.innerHTML="";
        var totalNoOfProducts=0;
        for (let i=0;i<=noOfRows;i++){

            tableBody.innerHTML+='<tr> <td>close</td> <td>img</td> <td>name</td> <td>price</td> <td>quantity</td> <td>total</td> </tr>';

            var rowElements=document.querySelectorAll(".cart-table tbody :nth-child("+(i+1)+") td");
            rowElements[0].innerHTML=`<i class="fa-regular fa-circle-xmark" id="${i}"> </i>`;
            rowElements[1].innerHTML=`<img src=${cartInsideMemory[Object.keys(cartInsideMemory)[i]].src} >`;
            rowElements[2].innerHTML=`${cartInsideMemory[Object.keys(cartInsideMemory)[i]].model}`;
            rowElements[3].innerHTML=`${cartInsideMemory[Object.keys(cartInsideMemory)[i]].price}`;
            rowElements[4].innerHTML=`<input type="number" value=${cartInsideMemory[Object.keys(cartInsideMemory)[i]].quantity}>`;

            var itemQuantity=document.querySelector(".cart-table tbody :nth-child("+(i+1)+") input");
            var totalCost=parseInt(rowElements[3].innerHTML)*parseInt(itemQuantity.getAttribute("value"));
            cTotal+=totalCost;
            console.log(cTotal);

            totalNoOfProducts+=parseInt(itemQuantity.getAttribute("value"));    // counting the total no of products

            rowElements[5].innerHTML=totalCost+" $";
        }

        //CHANGING CART ITEMS NO. 
        
        localStorage.setItem("cartNo",totalNoOfProducts);
        cartItemNo.innerHTML=totalNoOfProducts;
    
    // adding function to close icon to remove a product

    const deleteItem=document.querySelectorAll(".cart-table tbody tr i");
    for (let i of deleteItem){
        
        i.addEventListener("click",(itm)=>{
        let itemId=Object.keys(cartInsideMemory)[itm.target.id];
        console.log(itemId);
        delete cartInsideMemory[itemId];
        console.log(cartInsideMemory);
        localStorage.setItem("productsInCart",JSON.stringify(cartInsideMemory));        
        displayCartTable(cartInsideMemory);
        
        })
    };


    }

    var cartInsideMemory=JSON.parse(localStorage.getItem("productsInCart"));
    
    displayCartTable(cartInsideMemory)

    // setting total amount for checkout
    var cartSubtotal=document.querySelector(".cart-subtotal");
    var totalAmount=document.querySelector(".total-amount");
    
    cartSubtotal.innerText="$"+String(cTotal);
    totalAmount.innerText="$ "+String(cTotal);
    
}

//  SINGLE PRODUCT PAGE FUNCTIONS

if (document.querySelector(".single-shop-page")){
    
    //picking elements
    var itemDetails=JSON.parse(localStorage.getItem("currentProduct"));
    let mainImage=document.querySelector(".main-img img");
    let productModel=document.querySelector(".product-text-details h3");
    let productPrice=document.querySelector(".product-text-details h2");
    
    //changing elemente
    mainImage.setAttribute("src",itemDetails.src);
    productModel.innerText=itemDetails.model;
    var prodPrice=itemDetails.price;
    productPrice.innerText="$"+prodPrice.slice(0,-1)+".00";

    // checking click on add to cart button.
    const addToCartBtn=document.querySelector(".add-to-cart");
    addToCartBtn.addEventListener("click",()=>{
        items=parseInt(parseInt(localStorage.getItem("cartNo")));
        localStorage.setItem("cartNo",items+1);
        cartItemNo.innerText=(items+1);
        cartItemNo.style.transition="0.1s";
        cartItemNo.style.opacity="1";

        //adding product to cart
        var cProduct=JSON.parse(localStorage.getItem("currentProduct"));
        setItems(cProduct);
    })

    

}
