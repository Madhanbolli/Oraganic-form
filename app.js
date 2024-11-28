

const slides = document.querySelector(".slides");
 const slide = document.querySelectorAll(".slide"); 
 const prevButton = document.querySelector(".prev");
 const nextButton = document.querySelector(".next");

 let currentIndex = 1;
//  const slidesToShow = 1; 
let gap = 20; 


const calculateSlideWidth = () => {
    return slide[1].clientWidth;
};


 const handleSlide = (index) => {
  const totalSlides = slide.length - 1; 
    
     if (index > totalSlides) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = totalSlides; 
     } else {
         currentIndex = index;
     }

    const slideWidth = calculateSlideWidth();
     const offset = -(currentIndex * (slideWidth + gap));
    slides.style.transform = `translateX(${offset}px)`; 
 };


 prevButton.addEventListener("click", () => {
     handleSlide(currentIndex - 1); 
 });
 nextButton.addEventListener("click", () => {
    handleSlide(currentIndex + 1); 
 });


 const updateSlider = () => {
     handleSlide(currentIndex);
 };
 updateSlider();



let items =[];
let subtotal =0;

function addItem() {
  const itemName = document.getElementById("itemName").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseFloat(document.getElementById("price").value);

  if (!itemName || quantity <= 0 || price <= 0) {
    alert("Please enter valid item details.");
    return;
  }

  const totalPrice = quantity * price;
  items.push({ itemName, quantity, price, totalPrice });

  // Update Subtotal
 subtotal += totalPrice;
 updateItemList();
}

 function updateItemList() {
  const itemsList = document.getElementById("itemsList");
  itemsList.innerHTML = "";

  items.forEach((item, index) => {
    itemsList.innerHTML += `<li>${item.itemName} (x${item.quantity}) - $${item.totalPrice.toFixed(2)} 
    
         <button onclick="removeItem(${index})">Remove</button></li>`;
  });

 calculateTaxes();
}

function removeItem(index) {
 subtotal -= items[index].totalPrice;
  items.splice(index, 1);
updateItemList();
}

function calculateTaxes() {
  const cgstRate = parseFloat(document.getElementById("cgst").value);
  const cgst = (cgstRate / 100) * subtotal;
  const grandTotal = subtotal + cgst ;

  document.getElementById( "totalAmount"  ).innerText = `Subtotal: $${subtotal.toFixed(2)}`;
  document.getElementById("cgstAmount").innerText = `CGST: $${cgst.toFixed(2)}`;
  document.getElementById("grandTotal" ).innerText = `Grand Total: $${grandTotal.toFixed(2)}`;
    
 
}

function printBill() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!name || !email || !phone) {
    alert("Please enter customer details.");
    return;
  }

  if (items.length === 0) {
    alert("No items added.");
    return;
  }

  const cgstRate = parseFloat(document.getElementById("cgst").value);
  const cgst = (cgstRate / 100) * subtotal;
  const grandTotal = subtotal + cgst;

  let bill = `Bill\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nItems Ordered:\n`;
  items.forEach((item) => {
    bill += `${item.itemName} (x${item.quantity}) - $${item.totalPrice.toFixed(2)}\n`;
      
    
  });
  bill += `\nSubtotal: $${subtotal.toFixed(2)}\nCGST (${cgstRate}%): $${cgst.toFixed(2)}\nGrand Total: $${grandTotal.toFixed(2)}`;
    

  alert(bill);
}
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) =>{
    faq.addEventListener("click",() => {
        faq.classList.toggle("active");

    });

});

