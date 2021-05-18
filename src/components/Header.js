const Header = () => {

  return (
    <nav class="uk-navbar uk-navbar-container">
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active">
            <a
              href="/"
              onClick={e =>  e.preventDefault()}
            >Posts</a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => e.preventDefault()}
            >Albums</a>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <div class="uk-navbar-item">
          <button
            class="uk-button uk-icon" type="button" uk-icon="icon: heart; ratio: 2" aria-expanded="false"
            // onClick={() => getLikedPosts()}
          >
            <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="heart">
              <path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"></path>
            </svg>
          </button>
          <div class="uk-width-large uk-dropdown" uk-dropdown="mode: click">
            <div class="uk-dropdown-grid uk-child-width-1-1@m uk-grid" uk-grid="">
              <div>
                <table class="uk-table uk-table-divider uk-table-justify">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th class="uk-text-right">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        <tr>
                          <td>title</td>
                          <td class="uk-text-right">
                            <button
                              class="uk-button uk-icon" type="button" uk-icon="icon: close;"
                              
                            >
                              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="close">
                                <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
                              </svg>
                            </button>
                          </td>
                        </tr>
                      }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;