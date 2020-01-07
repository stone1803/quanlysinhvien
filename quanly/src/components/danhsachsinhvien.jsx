import React, { Component } from "react";
import { connect } from "react-redux"; // thu vien ket noi voi redux
class DanhSachSinhVien extends Component {
  renderDanhSachSinhVien = () => {
    let { mangSinhVien } = this.props;
    return mangSinhVien.map((item,index)=>{
      return (
        <tr key={index}>
              <td>
              {item.masv}
            </td>
            <td>
              {item.hoten}
            </td>
            <td>
              {item.email}
            </td>
            <td>
              {item.sdt}
            </td>
        </tr>
           

        )
    })
  };

  render() {
    return (
      <div className="table table-dark">
        <table>
          <thead>
            <tr>
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
            </tr>
          </thead>
          <tbody>
              {this.renderDanhSachSinhVien()}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    mangSinhVien: state.quanLyReducer.mangSinhVien
    // tao mang sinh vien tai : sate dai dien cua rootreducer . mang trang quan ly reucer . lay toi mang sinh vien
  };
};
export default connect(mapStateToProps, null)(DanhSachSinhVien);
