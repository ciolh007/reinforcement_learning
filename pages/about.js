import Link from 'next/link'
export default function About() {
  return (
    <div>
      <div>About us</div>
      <p>This page includes information about my reinforcement learning 
         course.
      </p>
      <div>
        Back to{' '}
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}
