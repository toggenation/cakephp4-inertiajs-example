import { Link } from '@inertiajs/react'

export default function Layout({ children }) {
    return (
        <div className='row'>
            <div className='col-2'>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className='nav-link' href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' href="/about">About</Link>
                    </li>
                    <li className="nav-item">

                        <Link className='nav-link' href="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' href="/items/red">Redirect</Link>
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
    )
}
