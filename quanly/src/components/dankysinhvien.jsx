import React, { Component } from "react";
import { connect } from "react-redux";
class DanhKySinhVien extends Component {
  state = {
    value :{  masv: "",
    hoten: "",
    email: "",
    sdt: ""},
    error :{
      masv: "",
      hoten: "",
      email: "",
      sdt: ""
    }
  
  };
  handleInput = event => {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState(
      {
        [name]: value
      },
      
    );
  };
  handleSubmit = (event)=>{
      event.preventDefault(); // koh load lai form 
      // gui du lieu len reducer 
      this.props.themSinhVien(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mã SV</label>
            <input
              className="form-control"
              name="masv"
              value={this.state.masv}
              onChange={this.handleInput}
            />
            <p className="text-danger">
              {this.state.error.masv}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Họ Tên</label>
            <input
              className="form-control"
              name="hoten"
              value={this.state.hoten}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Số Điện Thoại</label>
            <input
              className="form-control"
              name="sdt"
              value={this.state.sdt}
              onChange={this.handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  // tra ve 1 su kien
  return {
    // la 1 ham nhan vao gia tri mang sinh vien 
    themSinhVien: dangKySinhVien => {
      // dua sinh vien len reducer thong qua 1 action
      const action = {
        type: "THEM_SINH_VIEN",
        // du lieu gui di doi tuong sinh vien
        dangKySinhVien
      };
      dispatch(action);
    }
  };
};
export default connect(null,mapDispatchToProps)(DanhKySinhVien)