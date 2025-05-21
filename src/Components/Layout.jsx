import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Hjem</Link>
                    </li>
                    <li>
                        <Link to="/Color">Farger</Link>
                    </li>
                    <li>
                        <Link to="/Math">Matte</Link>
                    </li>
                    <li>
                        <Link to="/WorkoutList">Trening</Link>
                    </li>
                    <li>
                        <Link to="/InputInfo">Input</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}