import React from 'react'
import './Products.css'
import {Link} from 'react-router-dom';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Products() {
  return (
    <div>
    <div className='product-dashboard'>
        <Link to="/">
          <h2 className='sb'>SB ADMIN</h2>
        </Link>
        <input type="search" className='search-box' placeholder='Search here...'></input>
        <h2 className='n-icons'><NotificationsActiveIcon /></h2>
        <h2 className='m-icons'><MailRoundedIcon /></h2>
        <h2 className='a-icons'><AccountCircleRoundedIcon /></h2>
        <h4 className='uday'>Uday Shankhar</h4>
    </div>
    <div>
      <div>
<AddProducts/>
      </div>
    </div>
    </div>
  )
}

class AddProducts extends React.Component{
  constructor(){
    super();
    this.state={
      datas:[{
        name:"6T",
        brand:"OnePlus",
        price:44000
      },{
        name: "S21 Ultra",
        brand: "Samsung",
        price: 52000
      }
      ],
      act:0
    }
  }

handleSubmit = (e) => {
  e.preventDefault();
  let datas = this.state.datas;
  let name = this.refs.name.value;
  let brand = this.refs.brand.value
  let price = this.refs.price.value
  this.refs.name.value="";
  this.refs.brand.value="";
  this.refs.price.value="";
  if(this.state.act===0){
   let data = {
     name,brand,price
   }
   datas.push(data);
   this.setState({datas:datas,act:0})
  }
}

Edit = () => {
  let datas = this.state.datas;
  this.refs.name.value = datas.map(e=>e.name)
  this.refs.brand.value = datas.map(e => e.brand)
  this.refs.price.value = datas.map(e => e.price)
  this.Delete();
}

Delete = (index) => {
  let datas = this.state.datas;
  datas.splice(index,1)
  this.setState({datas:datas,act:0})
}

  render(){
    let datas=this.state.datas;
    return(
      <div>
        <h3 className='pr'>Create,Read,Update,Delete Products here</h3>
        <form className='pro-forms'>
          <input type="text" ref="brand" placeholder='Brand'></input>
          <input type="text" ref="name" placeholder='Product Name'></input>
          <input type="text" ref="price" placeholder='Price'></input>
          <input type="submit" value="Submit" className='input-submit' onClick={this.handleSubmit}></input>
        </form>
        <div>
          <table className='table'>
            <thead>
            <tr>
              <th>ID</th>
              <th>BRAND</th>
                <th>PRODUCT-NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              
             {datas.map((e,index)=>(
               <tr>
                 <td>{index+1}</td>
                 <td>{e.brand}</td>
                 <td>{e.name}</td>
                 <td>{e.price}</td>
                 <button className='btn btn-outline-warning' onClick={this.Edit} >EDIT</button>
                 <button className="btn btn-outline-danger" onClick={this.Delete}>DELETE</button>
               </tr>
             ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Products