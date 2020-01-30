import toastr from "reactjs-toastr";
import axios from 'axios';

export const apiBaseUrl = 'https://xrsports.gg/team/public';

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
export default function parseJwt(token) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}
// var currid = parseJwt(localStorage.getItem('token'));
// console.log(currid);
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
export function gameName(gname) {
  // if (gname === "nascar") {
  //   return 'NASCAR HEAT 4';
  // } else if (gname === "madden") {
  //   return 'MADDEN 20';
  // } else if (gname === "nba20") {
  //   return 'NBA 20';
  // } else if (gname === "rocketleague") {
  //   return 'ROCKET LEAGUE';
  // } else if (gname === "supersmash") {
  //   return 'SUPER SMASH BROS';
  // } else if (gname === "fortnite") {
  //   return 'FORTNITE';
  // } else if (gname === "codmw") {
  //   return 'CALL OF DUTY MODERN WARFARE';
  // }  else if (gname === "fifa20") {
  //   return 'FIFA 20';
  // } else {
  //   return '';
  // }
  if (gname === "codmw") {
    return 'Call of Duty Modern Warfare';
  }else if(gname === 'codm'){
    return 'Call of Duty Mobile';
  }else if(gname === 'codbo3'){
    return 'Call of Duty Black Ops 3';
  }else if(gname === 'codaw'){
    return 'Call of Duty Advance Warfare';
  }else {return '';}
}

export function gamePlatformName(gpname) {
  if (gpname === "ps4") {
    return 'PlayStation 4';
  } else if (gpname === "xbox") {
    return 'XBOX';
  } else if (gpname === "pc") {
    return 'PC';
  } else {
    return '';
  }
}

export function gameImages(gname) {
  // if (gname === "nascar") {
  //   return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1576850722/cardsss/New_Project_5_ujnxbe.png';
  // } else if (gname === "madden") {
  //   return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1576850721/cardsss/New_Project_7_ftplkq.png';
  // } else if (gname === "nba20") {
  //   return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1576850725/cardsss/New_Project_3_qm1ew7.png';
  // } else if (gname === "rocketleague") {
  //   return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1576850725/cardsss/New_Project_1_kiweff.png';
  // } else if (gname === "supersmash") {
  //   return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1576850725/cardsss/New_Project_2_nyzzaf.png';
  // } else if (gname === "fortnite") {
  //   return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1576850721/cardsss/New_Project_9_feylsc.png';
  // } else if (gname === "codmw") {
  //   return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579679322/envy/game%20images/four_nq5vvr.png';
  // }  else if (gname === "fifa20") {
  //   return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1576850721/cardsss/New_Project_8_nofgid.png';
  // }
  if (gname === "codmw") {
    return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579679322/envy/game%20images/four_nq5vvr.png';
  }else if(gname === 'codm'){
    return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579679323/envy/game%20images/_four_lco880.png';
  }else if(gname === 'codbo3'){
    return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579679323/envy/game%20images/_four_1_qay6fd.png';
  }else if(gname === 'codaw'){
    return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579679323/envy/game%20images/_four_2_z3effx.png';
  }else {return '';}
  // if (gname === "codmw") {
  //   return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579758869/envy/game%20banners/Codme_wjlamx.jpg';
  // }else if(gname === 'codm'){
  //   return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579758873/envy/game%20banners/codm_webxbx.jpg';
  // }else if(gname === 'codbo3'){
  //   return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579758869/envy/game%20banners/codblackops3_rlfyey.jpg';
  // }else if(gname === 'codaw'){
  //   return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579758870/envy/game%20banners/codaw_iri6td.jpg';
  // }else {return '';}
}
export function gamePlatformIcons(gpname) {
  if (gpname === "ps4") {
    return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/PSN_mwgnrg.png';
  } else if (gpname === "xbox") {
    return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/XBOX_pjbe6s.png';
  } else if (gpname === "pc") {
    return 'https://res.cloudinary.com/dnv0dij0y/image/upload/v1574920962/platformicons/PC_baza0t.png';
  } else {
    return '';
  }
}
export function gametourBanners(gname) {
  if (gname === "codmw") {
    return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579758869/envy/game%20banners/Codme_wjlamx.jpg';
  }else if(gname === 'codm'){
    return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579758873/envy/game%20banners/codm_webxbx.jpg';
  }else if(gname === 'codbo3'){
    return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579758869/envy/game%20banners/codblackops3_rlfyey.jpg';
  }else if(gname === 'codaw'){
    return 'https://res.cloudinary.com/dg3sjwu2p/image/upload/v1579758870/envy/game%20banners/codaw_iri6td.jpg';
  }else {return '';}
}
export function userData(id, param) {
  var currid = parseJwt(localStorage.getItem('token'));
  var curid = currid.sub;
      return axios.get(`https://xrsports.gg/team/public/user/get-user/${curid}`, { headers: { "Content-Type": "application/json", 'X-Auth-Token': `${localStorage.getItem('token')}` } })
      .then(response => {
        // var gg = response.data.data.nickname;
        // var ggg = response.data.data.uniquecode;
          const { [param]:result } = response.data.data;
          return result;
          
       })
      .catch((error) => {
          console.log('error ' + error);
       });
  // return "dfgdf";
}

// const userData1  = async (id) => {
//   const currid = parseJwt(localStorage.getItem('token'));
//   const curid = currid.sub;
//   try {
//     const response = await axios.get(`https://xrsports.gg/team/public/user/get-user/${curid}`, { headers: { "Content-Type": "application/json", 'X-Auth-Token': `${localStorage.getItem('token')}` } });
//     return response;
//   }catch (error) {
//     console.error(error);
//   }
// }
// export default userData1;

