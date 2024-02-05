
import axios from 'axios'
export const commonApi=async(httpMethod,url,reqBody)=>{
    let reqConfig={
        method:httpMethod,
        url,
        data:reqBody,
        headers:{
            "content-type":"application/json"
        }
    }

   return await axios(reqConfig).then((response)=>{
        return response
    }).catch((err)=>{
        return err
    })
}