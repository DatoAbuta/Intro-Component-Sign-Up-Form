import './App.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type SubmitType = {
  email: string,
  name: string,
  lastname: string,
  password: string
}

const schema = yup.object().shape({
  name: yup.string().required('First Name is necessary'),
  lastname: yup.string().required("Last Name cannot be empty"),
  email: yup.string().required("Looks like this is not an email").email("Email Isn't Valid"),
  password: yup.string().required("Password cannot be empty").min(6, "Minimum 6 Symbol").max(20, "Too many")
})

function App() {

  
  const {register, handleSubmit, formState: {errors}} = useForm<SubmitType>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: SubmitType) => {

  console.log(data)

  }


  return (
  <>

  <div className="mtliani">

  

  <div className="zemot">

    
    <div className="garet">
      <h1 className='learn'>Learn to code by watching others</h1>
      <h5 className='see'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </h5>
    </div>



  </div>

<div className="boxebi">


  <div className="purplebox">
      <h3>Try it free 7 days <span className='meorespani'>then $20/mo. thereafter</span></h3>
  </div>
  
  <div className="whitebox">

    <form onSubmit={handleSubmit(onSubmit)}>

      <input 
      style={{
        borderColor: errors?.name?.message && 'red',
        backgroundImage: errors?.name?.message && 'url(/error.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '95% center'
      }}
      type="text" 
      placeholder='First Name'
      {...register("name")}
      />
      {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
      <input style={{
        borderColor: errors?.lastname?.message && 'red',
        backgroundImage: errors?.lastname?.message && 'url(/error.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '95% center'
      }} 
      type="text" placeholder='Last Name' {...register("lastname")}/>
      {errors.lastname && <p style={{color: "red"}}>{errors.lastname.message}</p>}
      <input style={{
        borderColor: errors?.email?.message && 'red',
        backgroundImage: errors?.email?.message && 'url(/error.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '95% center'
      }}
      type="text" placeholder='Email Address' {...register("email")}/>
      {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
      <input style={{
        borderColor: errors?.password?.message && 'red',
        backgroundImage: errors?.password?.message && 'url(/error.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '95% center'
      }}
      type="password" placeholder='Password' {...register("password")}/>
      {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}
      <button type='submit' >CLAIM YOUR FREE TRIAL</button>

      <h6>By clicking the button, you are agreeing to our <span>Terms and Services</span></h6>

    </form>
  </div>

  </div>
  
  </div>
    </>
  )
}

export default App
