import Link from 'next/link';

const Menu = () => {
  return (
    <div className="navigation" role="navigation" aria-label="Main menu">
    <ul className="nav" role="menubar" aria-hidden="false">
      <li role="menuitem" aria-haspopup="true">
        <a href="../generic.html" name="Building knowledge">Building knowledge</a>
        <ul data-test="true" aria-hidden="false" role="menu" className="show-menu">
          <li role="menuitem">
            <Link name="Digital tools" href={{ pathname: '/report/0/[slug]', query: { slug: '0' } }} tabindex="0">
              Digital tools
            </Link>
          </li>
          <li role="menuitem">
            <Link href={{ pathname: '/report/0/[slug]', query: { slug: '1' } }} tabindex="0">
              Open data
            </Link>
          </li>
          <li role="menuitem">
            <Link href={{ pathname: '/report/0/[slug]', query: { slug: '2' } }}>
              The future
            </Link>
          </li>
        </ul>
      </li>
      <li role="menuitem" aria-haspopup="true">
        <a href="../generic.html">Change is possible</a>
        <ul data-test="true" aria-hidden="true" role="menu" className="">
          <li role="menuitem">
            <Link href={{ pathname: '/report/1/[slug]', query: { slug: '0' } }} tabindex="0">
              Collaboration
            </Link>
          </li>
          <li role="menuitem">
            <Link href={{ pathname: '/report/1/[slug]', query: { slug: '1' } }} tabindex="0">
              A place to be
            </Link>
          </li>
          <li role="menuitem">
            <Link href={{ pathname: '/report/1/[slug]', query: { slug: '2' } }} tabindex="0">
              Go faster
            </Link>
          </li>
        </ul>
      </li>
      <li role="menuitem" aria-haspopup="true">
        <a href="../generic.html">Working together</a>
        <ul data-test="true" aria-hidden="true" role="menu" className="">
          <li role="menuitem">
            <Link href={{ pathname: '/report/2/[slug]', query: { slug: '0' } }} tabindex="0">
              Detection
            </Link>
          </li>
          <li role="menuitem">
            <Link href={{ pathname: '/report/2/[slug]', query: { slug: '1' } }} tabindex="0">
              Supply chains
            </Link>
          </li>
          <li role="menuitem">
            <Link href={{ pathname: '/report/2/[slug]', query: { slug: '2' } }} tabindex="0">
              Covid action
            </Link>
          </li>
        </ul>
      </li>

      <li role="menuitem" aria-haspopup="false">
        <a href="https://www.vizzuality.com/">2020 by Vizzuality</a>
       </li>

      <li role="menuitem" aria-haspopup="false">
        <a href="">Download full report</a>
      </li>

      <li role="menuitem" aria-haspopup="true">
        <a href="../generic.html">Social media</a>
        <ul data-test="true" aria-hidden="true" role="menu" className="">
  
          <li role="menuitem">
            <a href="https://twitter.com/vizzuality" tabindex="0">Twitter</a>
          </li>

          <li role="menuitem">
            <a href="https://facebook.com/vizzuality/" tabindex="0">Facebook</a>
          </li>
          <li role="menuitem">
            <a href="https://linkedin.com/company/vizzuality" tabindex="0">Linkedin</a>
          </li>
          <li role="menuitem">
            <a href="https://github.com/Vizzuality" tabindex="0">GitHub</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
)};

export default Menu;


