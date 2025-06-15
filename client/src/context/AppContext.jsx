import { createContext, useEffect, useState } from "react"
import { jobsData } from "../assets/assets"; // ✅ Correct name
import { useAuth, useUser } from "@clerk/clerk-react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {
  
  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: ''
  })
  const [isSearched, setIsSearched] = useState(false)
  const [jobs, setJobs] = useState([]) // ✅ FIXED: initialized as an array

  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)

  const [companyToken, setCompanyToken] = useState(null)
  const [companyData, setCompanyData] = useState(null)

  const fetchJobs = async () => {
    setJobs(jobsData)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  const value = {
    searchFilter, setSearchFilter,
    isSearched, setIsSearched,
    jobs, setJobs,
    showRecruiterLogin, setShowRecruiterLogin,
    companyToken, setCompanyToken,
    companyData, setCompanyData,
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
