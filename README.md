# Shopping mall App

* This is my first react project.   
* Simply focusing on functions !    
* Gonna add more functions and refactore some codes to look better.   

## Main page

+ ### APP      
<img src="https://user-images.githubusercontent.com/62753490/116693115-6831a680-a9f8-11eb-9631-eff6e2b767d6.png" width="300" height="550">   

* This is how it looks on its main page.   
* Got Navbar and Jumbotron from Bootstrap.   
* Below, it shows various products. Got these products from data.js (hard coded).  
* it also has "view more" button at the end of products and if the button is clicked, it shows more products. I got these additional data from server using axios.   
   
## Detail page   
<img src="https://user-images.githubusercontent.com/62753490/116695850-1db22900-a9fc-11eb-88fb-ede266cfbc25.png" width="300" height="550">   

* If we click on products, the page moves to its detail page.   
(Used Route to move into '/detail' page. (implemented in App.js)).   
* It has some functions on this detail page.  
1. order button   
   If we click this red order button, the page moves into '/cart' page.   
   spontaneously, it deducts from stock.   
2. goBack button
   If we click on GoBack button, the page goes back to previous web page. Used 'useHistory' from react to implement this function.   
3. Alert ( Out of Stock) 
   For now, this alert box only after when the page is loaded for two seconds, (used UseEffect) but, afterward, i am going to add a function on it so that the alert box only appears when the stock is below 10.   
   
## Cart Page   
<img src="https://user-images.githubusercontent.com/62753490/116697357-0b38ef00-a9fe-11eb-9891-92eed61c09c6.png" width="300" height="550">   
* This page appears when we click on order button from '/detail' page.
* Gonna need many functions for this page, but not implemented yet.   
* It now just has add/minus products functions.
* Deduplicated the same products.   

## Recent view page   
<img src="https://user-images.githubusercontent.com/62753490/116697833-a4680580-a9fe-11eb-9d53-0772b7c5e1ad.png" width="550" height="500">    
* On navbar, there's 'recent view' section. If we click on it, the page moves to '/recent' page.         
       
<img src="https://user-images.githubusercontent.com/62753490/116699332-69ff6800-aa00-11eb-8098-fcb1e37d9385.png" width="300" height="550" margin-top:"20">   












