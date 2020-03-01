import Axios from 'axios'; 

let form = document.querySelector('form')!;
let addressInput = document.getElementById('address') as HTMLInputElement
const APIKey= 'AIzaSyCrBDclZN-73ZDraOM93fNHjhFb3gjnYUE';

type GoogleGeocoding=
 {results:{geometry:{location:{lat:number;lng:number}}}[];
 status: 'OK' | 'Zero_Results';
};
declare var google:any
function submitEventListener(event:Event)
{
    event.preventDefault();
    let userAddress = addressInput.value;
    console.log(userAddress);
    Axios.get<GoogleGeocoding>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(userAddress)}&key=${APIKey}`)//.then(response=>console.log(response))
     .then( response=>{
        if(response.data.status!=="OK")
        {throw new Error("Cant find location");}         
        const coordinates =response.data.results[0].geometry.location;
        console.log(coordinates);
        const map = new google.maps.Map(document.getElementById("map"), 
        {
             center: coordinates ,
             zoom: 16
           });
    
     new google.maps.Marker({position: coordinates, map: map});
       })
    .catch(err=>{alert(err.message); console.log(err)}  );

  

}

form.addEventListener('submit',submitEventListener)










import "reflect-metadata";
import {plainToClass} from 'class-transformer'
import  {Product} from './product';

let prd = new Product("MOSSAD",22);
console.log(prd.getInfo());


const products=  [{title: 'A', price:33}, {title:'book',price:23.3}] ;


// const loadedProd = products.map(prod=>
//     {
//         return new Product(prod.title,prod.price);
//     }
// )

const loadedProd = plainToClass(Product,products);

for(const prod of loadedProd)
{
    console.log(prod.getInfo());
}


// import _ from 'lodash';

// console.log(_.shuffle([1,2,3]));


// class ProjectInput
// {
//     inputElement: HTMLTemplateElement;
//     hostingElement: HTMLDivElement;
//     element:HTMLFormElement;
//    // title:HTMLElement

//     constructor()
//     {
//         this.inputElement= document.getElementById('project-input') as HTMLTemplateElement;
//         this.hostingElement= document.getElementById('app') as HTMLDivElement;
         
//       const importedNode = document.importNode(this.inputElement.content,true);
//       this.element = importedNode.firstElementChild as HTMLFormElement;
//       this.attach();

//     }
    
//     private attach()
//     {
//           this.hostingElement.insertAdjacentElement("afterbegin",this.element);
//     }
// }

// const prjctInpt= new ProjectInput();