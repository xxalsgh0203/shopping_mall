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


