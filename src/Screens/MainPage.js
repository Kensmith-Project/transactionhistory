
import React from 'react'
import { useState , useEffect} from 'react'
import { gql , useQuery, useMutation} from '@apollo/client'
import DailyTransaction from '../components/DailyTransaction'


const LAUNCHES_QUERY =`
query AllPosts{
    posts{
        id
     date
      name
        status
        
        Type
      
        
      
    }
  }
`

function MainPage() {
    const [launches,setlaunches]= useState([])
    useEffect(()=>{
fetch('http://localhost:9002/graphql',{
    method:"POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({query:LAUNCHES_QUERY})
}).then(response=>response.json())
  .then(data=>setlaunches(data.data.posts))
    },[])
   console.log(launches)
   const collector = []
   for( let element of launches ){
    let year = []
    if(element.date.slice(0,4)===element.year){
      console.log(element.date.slice(0,4))
      year.push(element)

    }
    collector.push(year)
   }
   console.log(collector)

const [loading, setLoading] = useState(false);
const [searchTitle, setSearchTitle] = useState("")
  return (
    <div className='board'>
    <input type={'search'} className='search' placeholder='Search'
    onChange={(e)=> setSearchTitle(e.target.value)}
    />

    <div className='filter-section'>
      <button className='filter'  type={'button'} title='All'>
        All
        
      </button>
      <button className='filter' placeholder='Successful' title='Successful'>Successful</button>
      <button className='filter' placeholder='Debit'>Debit</button>
      <button className='filter' placeholder='Credit'>Credit</button>
      <button className='filter' placeholder='Failed'>Failed</button>
    </div>

    
    
        {launches
        .filter((value,index)=>{
            if(searchTitle.trim()==""){
                return value
            }else if(value.date.toLowerCase().includes(searchTitle.toLocaleLowerCase())||
             value.name.toLowerCase().includes(searchTitle.toLocaleLowerCase())||
             value.Type.toLowerCase().includes(searchTitle.toLocaleLowerCase())|| value.status.toLowerCase().includes(searchTitle.toLocaleLowerCase())
             
             ){
                return value
            }
        })
        
       .map((item,key)=>{
            return <div className='daily-transact' key={item.id}>
            <h3 className='date'>{item.date}</h3>
    
            
              <div className='data-body' >
    
                <div className='side-box'>
                  <img src={item.img} style={{height: 40
                  
                  }}/>
                </div>
                <div className='data-box'>
                    <p> {item.name}</p>
                    <p>{item.Type}</p>
                    <p>{item.status}</p>
                </div>
            </div>
          
            
        </div>
        })}
    
    
  </div>
  )
}

export default MainPage