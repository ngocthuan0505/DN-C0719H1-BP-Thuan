let V;
let H;
let S;
V = parseInt( prompt("Nhap diem mon vat ly"));
H = parseInt( prompt("Nhap diem mon hoa hoc"));
S = parseInt( prompt("Nhap diem mon sinh hoc"));
let DTB = (V + H + S)/3;
document.write("Diem Trung Binh: " + DTB);