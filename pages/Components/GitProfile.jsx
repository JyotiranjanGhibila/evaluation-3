import React from "react";
import Link from "next/link";
const GitProfile = ({ git }) => {
  console.log("got it:", git);
  return (
    <div>
      <div>
        <img src={git.avatar_url} alt="img" width={"200px"} />
        <h2>{git.name}</h2>
        <p style={{ color: "gray" }}>{git.login}</p>
        <br />
        <p>{git.bio}</p>
        <button>
          <Link href="https://drive.google.com/file/d/1H-SrVolTzFQc46VtZt5E1T_5GKgnfUz0/view?usp=share_link">
            Resume
          </Link>
        </button>
        <button>
          <Link href="https://github.com/JyotiranjanGhibila">Follow</Link>
        </button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const fdata = await fetch(`https://api.github.com/users/JyotiranjanGhibila`);
  const fres = await fdata.json();
  console.log(fres);
  return {
    props: {
      git: fres,
    },
  };
}
export default GitProfile;
