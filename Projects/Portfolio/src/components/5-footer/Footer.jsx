import './footer.css';

const Footer = () =>  {
    return (
        <footer className="flex">
            <ul className='flex'>
                <li><a href="">About-Me</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Feedback</a></li>
            </ul>
            <p>© Amine 2023. All rights reserved.</p>
        </footer>
    )
}

export default Footer;