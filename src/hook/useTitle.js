import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} || Skill Develop Training Center`
    },[title])
}

export default useTitle;