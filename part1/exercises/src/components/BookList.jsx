export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://www.pinterest.com/pin/7-new-mustsee-harry-potter-covers--432697476672478138/";
   let book2 = "https://www.pinterest.com/pin/cover-art--173247916886057747/";
   let book3 = "https://ew.com/article/2013/02/13/harry-potter-sorcerors-stone-new-cover/";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img style = {{height:"500px"}} src={book1} alt="Harry Potter" />
         <img style = {{height:"500px"}} src={book2} alt="Harry Potter" />
         <img style = {{height:"500px"}} src={book3} alt="Harry Potter" />
      </div>      
   );
}