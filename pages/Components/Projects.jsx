import React from "react";

const Projects = ({ projects}) => {
  console.log(projects);
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",border:"0.2px solid white"}}>
      {
        projects.map((e,ind)=>(
          <div key={e.id} style={{border:"0.4px solid whitesmoke",display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
            <p>{e.full_name}</p>
            <p>{e.language}</p>
            <p> stargazers: {e.stargazers_count}</p>
            <p>watchers: {e.watchers_count}</p>
            <p> visibility: {e.visibility}</p>
          </div>
        ))
      }
    </div>
    
  );
};

export async function getStaticProps() {
  const fetchData = await fetch(
    `https://api.github.com/search/repositories?q=user:JyotiranjanGhibila+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const ress = await fetchData.json();

  return {
    props: {
      projects: ress.items,
    },
  };
}
export default Projects;
