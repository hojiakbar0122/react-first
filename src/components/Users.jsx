import axios from 'axios'
import { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [limitItem, setLimitItem] = useState(3)
    const [isLimited, setIsLimited] = useState(false)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limitItem}`).then((res)=>{
            setUsers(res.data)
            if(res.data.length<limitItem){
                setIsLimited(true)
            }
            else{
                setIsLimited(false)
            }
                      
        })
    }, [page, limitItem])

    const setItemsLimit = (num) => {
        setLimitItem(num)
    }

    const nextPage = ()=>{
        setPage(prev => prev+1)
    }
    const prevPage = ()=>{
        setPage(prev => prev-1)
    }
  return (
    <div className='container'>
        <div className="row">
            <table className='table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       users.map(user=>{
                        return  <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.company.name}</td>
                        </tr>
                       })
                    }
                </tbody>
            </table>
            <div className="text-center my-2">
                <button className='btn btn-secondary' onClick={prevPage}>prev</button>
                <span>{page}</span>
                <button className='btn btn-secondary' onClick={nextPage} disabled={isLimited}>next</button>
            </div>
        </div>
        <select className='form-select' onChange={(e)=>setItemsLimit(Number(e.target.value))}>
            <option value="3">3 ta</option>
            <option value="5">5 ta</option>
            <option value="10">10 ta</option>
            <option value="20">20 ta</option>
        </select>
    </div>
  )
}

export default Users