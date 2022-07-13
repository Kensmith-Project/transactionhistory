
APPLICATION TYPE


 This is a transaction page history application that displays all transaction data with their respective dates and time of the transaction.


APPLICATION STRUCTURE

The apllication has a mocked dataset grouped by their date of creation and can be filtered byn either their types or status of data with a specific filter component and also can be searched through by types, status, dates, or name with a search box.
It is a five group of data set with unique dates and time. 


DECISIONS

I mocked a faked graphql Api using fake-graphql library. I installed it globally using command yarn add globally fake-graphql and opened it on a local host graphql editor.
This enabled the graphql schema  to be saved locally on the root of this application.
I created a grouped multidimensional array data structure of JSON  using grapql faker . I used this mutidensional array api structure to model the application wireframe design.
This structure was in the same shape with the wireframe design. 
   
   Data fetching implementation
   
   I used useEffect react hook to fetch the faked data using the localhost api url as the data Url. 
   I used a promise to fetch the faked api data and converted it to JSON. 
   I added header, method of Post and added body which I passed the all query. This enabled me fetch the data effectively. 
   Note: There was no try and catch because the data is on local host.
   

   UI Implementation

   I used a simple one page UI  with less or no side components to design the UI since is a one page application.
   I applied Block Element Modifier principles in the styles and made use of the latest Css syntax .
   I also used flexbox and media query  to achieve web and mobile responsiveness of the  application.


   Logic execution and Integration
   I made use of declarative methods like maps, filter and algorithms to render the data accurately on the ui component
   I used filter and useState hook to achieve filtering and searching in this application.
   I also made use of itenary to achieve dynamic state in the application. The Ui is highly response and gives a good user experience.


   SHORTCUTS
   use command yarn add globally graphql-faker to install graphql faker.
   use yarn graphql-faker ..open to open on a local host editor.

   use @fake to set the type of the data in the faker's graphql faker schema.
   use @example to set an instance of the data you intend to use in the api



   USER EXPERIENCE
    The app has an excellent user experience since its one page application with clean and colorful user interface .
     The data rows are well arranged and flexible to play along with.
     The logics and functionalities are fascinating and met all the requirements in the project backlogs.
     Although the user experience is good, It can better be improved if more features are incorporated into the application. Such features include page routing and click-and-view-details features. Like a two page of data list and a data details page can be employed for a better user experience.



 



