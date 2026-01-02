import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center justify-center my-10 lg:my-20' >
        <SignUp />
    </div>
  )
}