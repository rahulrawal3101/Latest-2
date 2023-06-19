import { useState } from 'react';
const def = {accountSetup:false,managebrand:false }

const useKYCModal = (kyc,setting) => {
const onSelect = {kyc:kyc,general:setting,manage:false,users:false,mails:false,settings:false,secure:false,tracking:false}
const onSelectDef = {tracking:false,kyc:false,general:false,manage:false,users:false,mails:false,settings:false,secure:false}
const [open, setOpen] = useState(def);
const [selected,setSelected] = useState(onSelect)

const handleClick = (index) => {setOpen(def)
if(index === "accountSetup"){if(open.accountSetup === true){setOpen(def)}else{setOpen(prev=>{return {...prev,accountSetup:!prev.accountSetup}})}}
if(index === "managebrand"){if(open.managebrand === true){setOpen(def)}else{setOpen(prev=>{return {...prev,managebrand:!prev.managebrand}})}
}}

const handleSelect = (select)=>{ setSelected(onSelectDef)
if(select === "tracking"){setSelected(prev=>{return {...prev,tracking:prev.tracking = true}})}
if(select === "general"){setSelected(prev=>{return {...prev,general:prev.general = true}})}
if(select === "kyc"){setSelected(prev=>{return {...prev,kyc:prev.kyc = true}})}
if(select === "manage"){setSelected(prev=>{return {...prev,manage:prev.manage = true}})}
if(select === "users"){setSelected(prev=>{return {...prev,users:prev.users = true}})}
if(select === "mails"){setSelected(prev=>{return {...prev,mails:prev.mails = true}})}
if(select === "settings"){setSelected(prev=>{return {...prev,settings:prev.settings = true}})}
if(select === "secure"){setSelected(prev=>{return {...prev,secure:prev.secure = true}})
}}
  return {handleClick,handleSelect,selected,open}
}

export default useKYCModal