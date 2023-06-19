import { useState } from "react";
const def  = [{Home:false,Dashboard:false,Order:false, Wallet:false,Tools:false, Growth:false,Integration:false, Finance:false,NDR:false, Courier:false,Weight:false,Help:false,Settings:false,}]

export  const useModal = ()=>{
const [open, setOpen] = useState(def);
const handleClick = (index) => {

    setOpen(def)
     if(index === "Dashboard"){if(open.Dashboard === true){setOpen(def)}else{setOpen(prev=>{return {...prev,Dashboard:!prev[index]}})}}
     if(index === "Order"){if(open.Order === true){setOpen(def)}else{setOpen(prev=>{return {...prev,Order:!prev[index]}})}}
     if(index === "Wallet"){if(open.Wallet === true){setOpen(def)}else{setOpen(prev=>{return {...prev,Wallet:!prev[index]}})}}
     if(index === "Tools"){if(open.Tools === true){setOpen(def)}else{setOpen(prev=>{return {...prev,Tools:!prev[index]}})}}
     if(index === "Growth"){if(open.Growth === true){setOpen(def)}else{setOpen(prev=>{return {...prev,Growth:!prev[index]}})}}
     if(index === "Finance"){if(open.Finance === true){setOpen(def)}else{setOpen(prev=>{return {...prev,Finance:!prev[index]}})}}
     if(index === "NDR"){if(open.NDR === true){setOpen(def)}else{setOpen(prev=>{return {...prev,NDR:!prev[index]}})}}
     if(index === "Weight"){if(open.Weight === true){setOpen(def)}else{setOpen(prev=>{return {...prev,Weight:!prev[index]}})}}
     if(index === "Courier"){if(open.Courier === true){setOpen(def)}else{setOpen(prev=>{return {...prev,Courier:!prev[index]}})}}
};

  return {open,handleClick}

}