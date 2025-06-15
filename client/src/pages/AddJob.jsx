import { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { JobCategories, JobLocations } from '../assets/assets'

const AddJob = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('Bangalore')
  const [category, setCategory] = useState('Programming')
  const [level, setLevel] = useState('Beginner level')
  const [salary, setSalary] = useState(0)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const onSubmitHandler = (e) => {
    e.preventDefault()

    const description = quillRef.current.root.innerHTML

    const newJob = {
      title,
      description,
      location,
      salary,
      category,
      level
    }

    console.log('Job Submitted:', newJob)

    // Reset form
    setTitle('')
    setSalary(0)
    quillRef.current.root.innerHTML = ''
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow'
      })
    }
  }, [])

  return (
    <form onSubmit={onSubmitHandler} className='container mx-auto p-4 max-w-4xl'>
      <div className='mb-4'>
        <label className='block mb-2 font-semibold'>Job Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Enter job title'
          required
          className='w-full border px-3 py-2 rounded'
        />
      </div>

      <div className='mb-4'>
        <label className='block mb-2 font-semibold'>Job Description</label>
        <div ref={editorRef} className='bg-white border rounded min-h-[150px]'></div>
      </div>

      <div className='grid sm:grid-cols-3 gap-4 mb-4'>
        <div>
          <label className='block mb-2 font-semibold'>Job Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className='w-full border px-3 py-2 rounded'>
            {JobCategories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
          </select>
        </div>

        <div>
          <label className='block mb-2 font-semibold'>Job Location</label>
          <select value={location} onChange={e => setLocation(e.target.value)} className='w-full border px-3 py-2 rounded'>
            {JobLocations.map((loc, idx) => <option key={idx} value={loc}>{loc}</option>)}
          </select>
        </div>

        <div>
          <label className='block mb-2 font-semibold'>Job Level</label>
          <select value={level} onChange={e => setLevel(e.target.value)} className='w-full border px-3 py-2 rounded'>
            <option>Beginner level</option>
            <option>Intermediate level</option>
            <option>Senior level</option>
          </select>
        </div>
      </div>

      <div className='mb-4'>
        <label className='block mb-2 font-semibold'>Salary</label>
        <input
          type="number"
          min={0}
          value={salary}
          onChange={e => setSalary(e.target.value)}
          placeholder='Enter salary'
          className='w-full border px-3 py-2 rounded'
        />
      </div>

      <button type="submit" className='bg-black text-white px-6 py-2 rounded'>
        Submit Job
      </button>
    </form>
  )
}

export default AddJob
