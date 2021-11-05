const all_users = document.querySelector("#fetch_all_users");
const all_addresses = document.querySelector("#fetch_all_addresses");
const user_by_uid = document.querySelector("#fetch_user_by_uid");
const address_by_aid = document.querySelector("#fetch_address_by_aid");

// console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));

const result = document.querySelector("#show_place");

// gets data from API and sets the content of #result div
const get_all_users = function () {
  result.innerText = "Loading....";
  fetch("http://ec2-54-83-151-50.compute-1.amazonaws.com:5000/users")
    .then((res) => res.json())
    .then((data) => {
      result.innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => console.log(error));
};

const get_all_addresses = function () {
  result.innerText = "Loading....";
  fetch("http://ec2-54-83-151-50.compute-1.amazonaws.com:5000/address")
    .then((res) => res.json())
    .then((data) => {
      result.innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => console.log(error));
};

const get_user_by_uid = function (event) {
  event.preventDefault();
  console.log("I'm here!");
  result.innerText = "Loading....";
  const uid = document.getElementById("uid").value;
  document.forms['uid_form'].reset();
  // console.log(uid);
  fetch("http://ec2-54-83-151-50.compute-1.amazonaws.com:5000/users/".concat(uid))
    .then((res) => res.json())
    .then((data) => {
      result.innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => console.log(error));

};

const get_address_by_aid = function (event) {
  event.preventDefault();
  console.log("I'm here!");
  result.innerText = "Loading....";
  const aid = document.getElementById("aid").value;
  document.forms['aid_form'].reset();
  // console.log(uid);
  fetch("http://ec2-54-83-151-50.compute-1.amazonaws.com:5000/address/".concat(aid))
    .then((res) => res.json())
    .then((data) => {
      result.innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => console.log(error));

};


// add event listener for #fetchdata button
all_users.addEventListener("click", get_all_users);
all_addresses.addEventListener("click", get_all_addresses);
user_by_uid.addEventListener("click", get_user_by_uid);
address_by_aid.addEventListener("click", get_address_by_aid);
