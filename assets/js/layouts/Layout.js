import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-2'>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className='nav-link' href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' href="/items">Items Index</Link>
                        </li>

                        <li className="nav-item">
                            <Link className='nav-link' href="/items/different-action-same-component">Same Component</Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    {children}
                </div>
            </div>
        </div>
    )
}
