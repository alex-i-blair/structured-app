import { Link } from 'react-router-dom';

export default function AllPosts() {
  return (
    <>
      <div className="listView">
        <ul>
          <Link to="/details/:id">
            <p>user author</p>
            <img src="https://www.placecage.com/c/100/100" alt="" />
            <p>caption</p>
          </Link>
          {/* <Link>
            <p>user author</p>
            <img src="https://www.placecage.com/c/100/101" alt="" />
            <p>caption</p>
          </Link>
          <Link>
            <p>user author</p>
            <img src="https://www.placecage.com/c/100/102" alt="" />
            <p>caption</p>
          </Link> */}
        </ul>
      </div>
    </>
  );
}
