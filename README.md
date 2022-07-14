IMPORTANT NOTE
This Application runs locally on a faked-graphql local host. 
   The faked graphQL API is not hosted and can only run locally.
   Hence to run this apllication , first install graphQL faker globally at the root of  your system's terminal using the command  `yarn add globally graphql-faker `
   After that run command `yarn graphql-faker --open ` to open it in a local graphql editor
   Then down at your IDE you will see the last file `schema.faker.graphql` click on it and copy the whole text and paste it on your running graphql editor. Ensure you click the `SAVE` button on the bottom. This automatically generates the required faked-graphql API and can be fetched by the query that I have written on the code.
   Before all these activity, ensure that npm is installed on your system and ensure that you run npm install on this project before npm start to see the application on the browser.


APPLICATION TYPE


 This is a Transaction History Application that displays all transaction data grouped by their  dates and time of the transaction.


APPLICATION STRUCTURE

The apllication has a mocked dataset grouped by their date of creation and can be filtered byn either their types or status of data with a specific filter component and also can be searched through by types, status, dates, or name with a search box.
It is a five group of data set with unique dates and time. 


DECISIONS

I mocked a faked graphql Api using fake-graphql library. I installed it globally using command `yarn add globally fake-graphql`  and opened it on a local host graphql editor.
This enabled the graphql schema  to be saved locally on the root of this application.
I created a grouped multidimensional array data structure of JSON  using grapql faker . I used this mutidensional array api structure to model the application wireframe design.
This structure was in the same shape with the wireframe design. 
   
   Data fetching implementation
   
   I used useEffect react hook to fetch the faked data using the localhost api url as the data Url. 
   I used a promise to fetch the faked api data and converted it to JSON. 
   I added header, method of `Post` and added body which I passed the all query. This enabled me fetch the data effectively. 
   Note: There was no try and catch because the data is on local host, ie it is not running online.
   

   UI Implementation

   I used a simple one page UI  with less or no side components to design the UI since is a one page application.
   I applied Block Element Modifier principles in the styles and made use of the latest Css syntax .
   I also used flexbox and media query  to achieve web and mobile responsiveness of the  application.


   Logic execution and Integration
   I made use of declarative methods like maps, filter and algorithms to render the data accurately on the ui component
   I used filter and useState hook to achieve filtering and searching in this application.
   I also made use of itenary to achieve dynamic state in the application. The Ui is highly response and gives a good user experience.


   SHORTCUTS
   
   NOTE: This Application runs locally on a faked-graphql local host. 
   The faked graphQL API is not hosted and can only run locally.
   Hence to run this apllication , first install graphQL faker globally at the root of  your system's terminal using the command  `yarn add globally graphql-faker `
   After that run command `yarn graphql-faker --open ` to open it in a local graphql editor
   Then down at your IDE you will see the last file `schema.faker.graphql` click on it and copy the whole text and paste it on your running graphql editor. Ensure you click the `SAVE` button on the bottom. This automatically generates the required faked-graphql API and can be fetched by the query that I have written on the code.
   Before all these activity, ensure that npm is installed on your system and ensure that you run npm install on this project before npm start to see the application on the browser.

   I used command yarn add globally graphql-faker to install graphql faker.
   I used yarn graphql-faker ..open to open on a local host editor.

   I used @fake to set the type of the data in the faker's graphql faker schema.
   I used @example to set an instance of the data I intend to use in the api



   USER EXPERIENCE
    The app has an excellent user experience since its one page application with clean and colorful user interface .
     The data rows are well arranged and flexible to play along with.
     The logics and functionalities are fascinating and met all the requirements in the project backlogs.
     Although the user experience is good, It can better be improved if more features are incorporated into the application. Such features include page routing and click-and-view-details features. Like a two page of data list and a data details page can be employed for a better user experience.



 



