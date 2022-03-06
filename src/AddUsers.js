import React from 'react';
import './AddUsers.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {Link} from 'react-router-dom';

function AddUsers() {
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
          <AddMe />
        </div>
      </div>
    </div>
  )
}


class AddMe extends React.Component {
  constructor() {
    super();
    this.state = {
      datas: [{
        name: "Elon",
        brand: "elon@tesla.com",
        price: 9874563210
      }, {
        name: "Jeff",
        brand: "jeff@amazon.com",
        price: 9878879879
      }
      ],
      act: 0
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let brand = this.refs.brand.value
    let price = this.refs.price.value
    this.refs.name.value = "";
    this.refs.brand.value = "";
    this.refs.price.value = "";
    if (this.state.act === 0) {
      let data = {
        name, brand, price
      }
      datas.push(data);
      this.setState({ datas: datas, act: 0 })
    }
  }

  Edit = () => {
    let datas = this.state.datas;
    this.refs.name.value = datas.map(e => e.name)
    this.refs.brand.value = datas.map(e => e.brand)
    this.refs.price.value = datas.map(e => e.price)
    this.Delete();
  }

  Delete = (index) => {
    let datas = this.state.datas;
    datas.splice(index, 1)
    this.setState({ datas: datas, act: 0 })
  }

  render() {
    let datas = this.state.datas;
    return (
      <div>
        <h3 className='pr'>Create,Read,Update,Delete Users here</h3>
        <form className='pro-forms'>
          <input type="text" ref="brand" placeholder='User Name'></input>
          <input type="email" ref="name" placeholder='Email ID'></input>
          <input type="number" ref="price" placeholder='Phone.No'></input>
          <input type="submit" value="Submit" className='input-submit' onClick={this.handleSubmit}></input>
        </form>
        <div>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>USERNAME</th>
                <th>EMAIL-ID</th>
                <th>PHONE.NO</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>

              {datas.map((e, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.brand}</td>
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




export default AddUsers