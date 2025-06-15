import { useEffect, useState } from 'react'
import { viewApplicationsPageData, assets } from '../assets/assets'
import Loading from '../components/Loading'

const ViewApplications = () => {
  const [applicants, setApplicants] = useState(false)

  const fetchCompanyJobApplications = () => {
    setTimeout(() => {
      // Add default status 'Pending' to each for demo
      const withStatus = viewApplicationsPageData.map(app => ({ ...app, status: "Pending" }))
      setApplicants(withStatus)
    }, 500)
  }

  const changeJobApplicationStatus = (id, status) => {
    const updated = applicants.map(app => app._id === id ? { ...app, status } : app)
    setApplicants(updated)
  }

  useEffect(() => {
    fetchCompanyJobApplications()
  }, [])

  return applicants ? applicants.length === 0 ? (
    <div className='flex items-center justify-center h-[70vh]'>
      <p className='text-xl sm:text-2xl'>No Applications Available</p>
    </div>
  ) : (
    <div className='container mx-auto p-4'>
      <table className='w-full max-w-4xl bg-white border border-gray-200 max-sm:text-sm'>
        <thead>
          <tr className='border-b'>
            <th className='py-2 px-4 text-left'>#</th>
            <th className='py-2 px-4 text-left'>User name</th>
            <th className='py-2 px-4 text-left max-sm:hidden'>Job Title</th>
            <th className='py-2 px-4 text-left max-sm:hidden'>Location</th>
            <th className='py-2 px-4 text-left'>Resume</th>
            <th className='py-2 px-4 text-left'>Action</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr key={index} className='text-gray-700'>
              <td className='py-2 px-4 border-b text-center'>{index + 1}</td>
              <td className='py-2 px-4 border-b text-center flex items-center'>
                <img className='w-10 h-10 rounded-full mr-3 max-sm:hidden' src={applicant.imgSrc} alt="" />
                <span>{applicant.name}</span>
              </td>
              <td className='py-2 px-4 border-b max-sm:hidden'>{applicant.jobTitle}</td>
              <td className='py-2 px-4 border-b max-sm:hidden'>{applicant.location}</td>
              <td className='py-2 px-4 border-b'>
                <a href='#' className='bg-blue-50 text-blue-400 px-3 py-1 rounded inline-flex gap-2 items-center'>
                  Resume <img src={assets.resume_download_icon} alt="icon" />
                </a>
              </td>
              <td className='py-2 px-4 border-b relative'>
                {applicant.status === "Pending" ? (
                  <div className='relative inline-block text-left group'>
                    <button className='text-gray-500 action-button'>...</button>
                    <div className='z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block'>
                      <button onClick={() => changeJobApplicationStatus(applicant._id, 'Accepted')} className='block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100'>Accept</button>
                      <button onClick={() => changeJobApplicationStatus(applicant._id, 'Rejected')} className='block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100'>Reject</button>
                    </div>
                  </div>
                ) : (
                  <div>{applicant.status}</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : <Loading />
}

export default ViewApplications
