import { useEffect , useState } from "react";


function useCurrencyInfo(currecny){

    const [currency , setCurrency] = useState([])
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currecny}.json`)
    .then((res) =>{
        return res.json()
        
    })
    .then((data)=>{
        setCurrency(data[currecny])
    })
    .catch((err)=>[
        console.log(err)
        
    ])
    } ,[currecny])
    
    return currency ;
}

export default useCurrencyInfo