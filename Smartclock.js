console.log("Hello Satoru")

function timTime() {
    // Xác định giờ phút giây trên HTML
    let hour = document.getElementById('hour').innerHTML;
    console.log(hour);
    let min = document.getElementById('min').innerHTML;
    console.log(min);
    let sec = document.getElementById('sec').innerHTML;
    console.log(sec);

    let Ngay_hien_tai = new Date();

    let gio_hien_tai = Ngay_hien_tai.getHours();
    let phut_hien_tai = Ngay_hien_tai.getMinutes();
    let giay_hien_tai = Ngay_hien_tai.getSeconds();


    document.getElementById('hour').innerHTML = gio_hien_tai;
    document.getElementById('min').innerHTML = phut_hien_tai;
    document.getElementById('sec').innerHTML = giay_hien_tai;

}

myInterval = null;

myInterval = setInterval(timTime,1000);

function Start() {

}

function Stop() {
    clearInterval(myInterval);
}

function Reset() {
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
}
