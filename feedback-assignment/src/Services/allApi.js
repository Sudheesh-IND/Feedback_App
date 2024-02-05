import { base_Url } from "./baseUrl"
import { commonApi } from "./commonApi"

export const getFeedback=async()=>{

    return await commonApi("get",`${base_Url}/feedback`,"")

}

export const getOneFeed=async(id)=>{
  return await commonApi("get",`${base_Url}/getonefeed/${id}`,"")
}

export const addComment=async(id,body)=>{
  return await commonApi("post",`${base_Url}/addcomment/${id}`,body,"")
}

export const addFeedback=async(body)=>{
  return await commonApi("post",`${base_Url}/addfeedback`,body,"")
}

export const getSpec=async(spec)=>{
  return await commonApi("get",`${base_Url}/specific/${spec}`,"")
}

export const editFeed=async(id,title,category,description)=>{
  const body={title,category,description}
  return await commonApi("post",`${base_Url}/edit/${id}`,body,"")
}

