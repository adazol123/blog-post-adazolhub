// This is the customize 404 error landing page
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'



const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    })

    return ( 
        <div className="not-found">
            <h2>This page you trying to access is out of the box</h2>
            <Link href="/">Go Home</Link>
        </div>
     );
}
 
export default NotFound
