import toastr from "reactjs-toastr";

export const apiBaseUrl = 'https://pbx.cap-tek.com:8080';

export const deleteRecord = (url,id)=>{
    return new Promise((resolve,reject)=>{
        const request = new Request(`${apiBaseUrl}/user/${url}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "X-Auth-Token": `${localStorage.getItem("token")}`
            }
          });
        fetch(request)
        .then(res => res.json())
        .then(res => {
            
          if (res.ResponseCode === "1") {
            toastr.success("Contact deleted successfully.", {
              displayDuration: 1500
            });
             resolve(res);
          } else {
            toastr.error(res.ResponseText, { displayDuration: 1500 });
             reject(Error("Something went wrong"));
          }
        });
    })
}

export const callHandleArray = (v) => {
  if (v === 0) {
    return 11;
  } else if (v === 1) {
    return 21;
  } else if (v === 2) {
    return 31;
  } else if (v === 3) {
    return 41;
  } else if (v === 4) {
    return 51;
  } else if (v === 5) {
    return 61;
  } else if (v === 6) {
    return 71;
  } else if (v === 7) {
    return 81;
  }else if (v === 8) {
    return 91;
  } else {
    return 101;
  }
}