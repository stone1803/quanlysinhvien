import React, { Component } from "react";
import DanhSachSinhVien from "./danhsachsinhvien";
import DanhKySinhVien from "./dankysinhvien";

export default class Main extends Component {
  render() {
    return (
      <div className="row container">
        <div className="col-5">
            <DanhKySinhVien/>
        </div>
        <div className="col-7">
          <DanhSachSinhVien />
        </div>
      </div>
    );
  }
}
