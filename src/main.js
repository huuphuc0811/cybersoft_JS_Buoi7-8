document.getElementById("chonChucNang").addEventListener("change", function () {
    const type = document.getElementById("chonChucNang").value;
    const input = document.getElementById("extraInput");
    const input2 = document.getElementById("extraInput_6");
    if (type === "6") {
        input2.style.display = "block";
        input.style.display = "none";
    }
    else if (type === "9") {
        input2.style.display = "none";
        input.style.display = "block";
    }
    else {
        input2.style.display = "none";
        input.style.display = "none";
    }
})
// Xu li gia tri input nguoi dung nhap vao 
let listNum = [];
document.getElementById("btn-form").addEventListener("click", function () {
    const num = document.getElementById("inputArray").value * 1;
    listNum.push(num);
    let resultArr = document.getElementById("arrayDisplay");
    resultArr.innerHTML = `[${listNum}]`;
})

// Xu li DOM gia tri input o chuc nang 9 
let listFloat = []
document.getElementById("btn-form-fun9").addEventListener("click", function () {
    const num = document.getElementById("inputExtra").value * 1;
    listFloat.push(num);
    let resultArr = document.getElementById("arrayDisplay-fun9");
    resultArr.innerHTML = `[${listFloat}]`;
})


// Xu li cac chuc nang tu 1-> 10 

// chuc nang 1:
function sumSoDuong(arr) {
    let sumDuong = 0;
    let lengthArr = arr.length;
    for (let i = 0; i <= lengthArr; i++) {
        if (arr[i] > 0) {
            sumDuong += arr[i];
        }
    }
    return sumDuong;
}
// chuc nang 2:
function countSoDuong(arr) {
    let count = 0;
    let lengthArr = arr.length;
    for (let i = 0; i <= lengthArr; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
// chuc nang 3 
function minArr(arr) {
    let lengthArr = arr.length;
    let min = arr[0];
    for (let i = 0; i <= lengthArr; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
// chuc nang 4 
function minSoDuong(arr) {
    let min = arr[0];
    let lengthArr = arr.length;
    for (let i = 0; i <= lengthArr; i++) {
        if (arr[i] % 2 === 0) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
    }
    return min;
}
// chuc nang 5 
function lastEven(arr) {
    let lastNum = -1;
    let i = arr.length - 1;
    for (i; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            lastNum = arr[i];
            break;
        }
    }
    return lastNum;
}
// chuc nang 6
function swapPositionArr(arr, pos1, pos2) {
    let arrAfterSwap = []
    let swap = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = swap;
    arrAfterSwap = arr;
    return arrAfterSwap;

}
// chuc nang 7 
function arrSort(arr) {
    let lengthArr = arr.length;
    let newArr = [];
    for (let i = 0; i <= lengthArr - 1; i++) {
        for (let j = i + 1; j <= lengthArr; j++) {
            if (arr[i] > arr[j]) {
                let swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    newArr = arr;
    return newArr;
}
// chuc nang 8 
function prime(arr) {
    let lengthArr = arr.length;
    let firstPrime = 0;
    for (let i = 0; i <= lengthArr; i++) {
        let count = 0;
        if (arr[i] > 1) {
            for (let j = 1; j <= arr[i]; j++) {
                if (arr[i] % j === 0) {
                    count++;
                }
            }
            if (count === 2) {
                firstPrime = arr[i];
                break;
            }
        }
        else {
            firstPrime = -1;
        }
    }
    return firstPrime;
}
// chuc nang 9 
function numOfInterger(arr) {
    let lengthArr = arr.length;
    let count = 0;
    for (let i = 0; i <= lengthArr; i++) {
        if (arr[i] % 1 === 0) {
            count++;
        }
    }
    return count;
}
// chuc nang 10 
function compare(arr) {
    let lengthArr = arr.length;
    let countEven = 0;
    let countOdd = 0;
    let soDuong = "Số dương nhiều hơn";
    let soAm = "Số âm nhiều hơn";
    let equal = "Số lượng 2 số âm và số dương bằng nhau"
    for (let i = 0; i < lengthArr; i++) {
        if (arr[i] % 2 === 0) {
            countEven++;
        }
        else {
            countOdd++;
        }
    }
    if (countEven > countOdd) {
        return soDuong;
    }
    else if (countEven < countOdd) {
        return soAm;
    }
    else {
        return equal;
    }
}


function xuLyChucNang() {
    const chucNang = document.getElementById("chonChucNang").value;
    const vitri1 = document.getElementById("inputViTri1").value * 1;
    const vitri2 = document.getElementById("inputViTri2").value * 1;


    const rs = document.getElementById("ketQua");

    switch (chucNang) {
        case "1":
            const totalDuong = sumSoDuong(listNum);
            rs.innerHTML = `Tổng số dương trong mảng là : ${totalDuong}`;
            break;
        case "2":
            const countDuong = countSoDuong(listNum);
            rs.innerHTML = `Có tổng cộng ${countDuong} số dương trong mảng`;
            break;
        case "3":
            const minList = minArr(listNum);
            rs.innerHTML = `Số nhỏ nhất trong mảng là :${minList}`;
            break;
        case "4":
            const minDuong = minSoDuong(listNum);
            rs.innerHTML = `Số dương nhỏ nhất trong mảng là :${minDuong}`;
            break;
        case "5":
            const lastNumEven = lastEven(listNum);
            if (lastNumEven !== -1) {
                rs.innerHTML = `Số chẵn cuối cùng là :${lastNumEven}`;
            }
            else {
                rs.innerHTML = `${lastNumEven}`;
            }
            break;
        case "6":
            const swapNum = swapPositionArr(listNum, vitri1, vitri2);
            if (vitri1 <= listNum.length && vitri2 <= listNum.length) {
                rs.innerHTML = `Mảng sau khi hoán đổi :[${swapNum}]`;
            } else {
                rs.innerHTML = `Vui lòng nhập vị trị thuộc phạm vi trong mảng [0 -> ${listNum.length - 1}]`;
            }
            break;
        case "7":
            const sortArr = arrSort(listNum);
            rs.innerHTML = `Mảng tăng dần : [${sortArr}]`;
            break;
        case "8":
            const primeNum = prime(listNum);
            if (primeNum !== -1) {
                rs.innerHTML = `Số nguyên đầu tiên là : ${primeNum}`;
            }
            else {
                rs.innerHTML = `${primeNum}`;
            }
            break;
        case "9":
            const numInterger = numOfInterger(listFloat);
            rs.innerHTML = `Có tổng cộng ${numInterger} số nguyên trong mảng`;
            break;
        case "10":
            const compareNum = compare(listNum);
            rs.innerHTML = `${compareNum}`;
            break;
    }
}

