const quanLySinhVienState = {
  mangSinhVien: [
    {
      masv: 1,
      hoten: "Nguyen Van A",
      email: "ledanghongphuc@gmail.com",
      sdt: "0924337688"
    },
    {
      masv: 2,
      hoten: "Nguyen Van B",
      email: "ctythanhphong@gmail.com",
      sdt: "0924337688"
    }
  ]
};

export const quanLyReducer = (state = quanLySinhVienState, action) => {
    switch (action.type) {
        case "THEM_SINH_VIEN":{
            // đưa dữ liệu từ đăng ký sinh viên lên mảng sinh viên
            const dangKySinhVienUpDate = [...state.mangSinhVien,action.dangKySinhVien]
            state.mangSinhVien = dangKySinhVienUpDate
            return {...state}

            break
        };
            
    
        default:{
            return { ...state };

        }

    }
};
