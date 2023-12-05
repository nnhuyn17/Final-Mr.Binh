const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header .classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}


const startDateInput = document.getElementById("start-date");

// Get the current date
const currentDate = new Date();

// Format the current date as yyyy-MM-dd
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

// Set the min attribute for the Start Date input
startDateInput.setAttribute("min", formattedDate);


// Lấy ngày hiện tại
const today = new Date();

// Lấy ngày, tháng và năm hiện tại
const dd = today.getDate();
const mm = today.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0
const yyyy = today.getFullYear();

// Chuyển ngày, tháng và năm thành chuỗi có định dạng yyyy-MM-DD để đặt giá trị max
const formattedToday = `${yyyy}-${mm.toString().padStart(2, '0')}-${dd.toString().padStart(2, '0')}`;

// Lấy thẻ "Date of Birth" bằng id
const dobInput = document.getElementById('dob');

// Đặt giá trị max cho trường "Date of Birth" thành ngày hiện tại
dobInput.setAttribute('max', formattedToday);
