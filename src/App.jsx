import './App.css';
import logo from '../public/Logo.png';

export default function App() {
  return (
    <>
        <header className='header'>
      <nav>
        <img src={logo} alt="0" />
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li><button>Register Now</button></li>
        </ul>
      </nav>
    </header>
    <main className='main'>
      <section className='section-1'>
        <div>
          <h1 className='h1'>Lessons and insights <span>from 8 years</span></h1>
          <p>Where to grow your business as a photographer: site or social media?</p>
          <button>Register</button>
        </div>
        <img src="../public/Illustration.png" alt="0" />
      </section>
      <section className='section-2'>
          <h2 className='h2'>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
          <ul>
            <li><img src="../public/Logo (1).png" alt="0" /></li>
            <li><img src="../public/Logo (2).png" alt="0" /></li>
            <li><img src="../public/Logo (3).png" alt="0" /></li>
            <li><img src="../public/Logo (4).png" alt="0" /></li>
            <li><img src="../public/Logo (5).png" alt="0" /></li>
            <li><img src="../public/Logo (6).png" alt="0" /></li>
            <li><img src="../public/Logo (7).png" alt="0" /></li>
          </ul>
        </section>
        <section className='section-4'>
          <h2 className='h4'>Manage your entire community in a single system</h2>
          <ul>
            <li><div><img src="../public/Icon.png" alt="0" /><h2>Membership Organisations</h2><p>Our membership management software provides full automation of membership renewals and payments</p></div></li>
            <li><div><img src="../public/Icon (1).png" alt="0" /><h2>National Associations</h2><p>Our membership management software provides full automation of membership renewals and payments</p></div></li>
            <li><div><img src="../public/Icon (2).png" alt="0" /><h2 style={{ width: '200px', margin: '0 auto',}}>Clubs And Groups</h2><p>Our membership management software provides full automation of membership renewals and payments</p></div></li>
          </ul>
        </section>
        <section className='section-3'>
          <img src="../public/Frame 35.png" alt="0" />
          <div>
            <h2 className='h3'>The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button>Learn More</button>
          </div>
        </section>
    </main>
    </>
  )
};