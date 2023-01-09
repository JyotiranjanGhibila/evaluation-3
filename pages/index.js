import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Projects from "./Components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ profile }) {
  return (
    <>
      <div>
        <div
          style={{
            width: "100%",
            height: "70px",
            border: "1px solid white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p>
            <Link href="/">Jyoti ranjan</Link>
          </p>
          <p>
            <Link href="/Components/Projects">Projects</Link>
          </p>
          <p>
            <Link href="/Components/Education">Education</Link>
          </p>
        </div>
        <div
          style={{ width: "20%", haight: "800px", border: "1px solid white" }}
        >
          <img
            src={profile.avatar_url}
            alt="img"
            width={"220px"}
            style={{ borderRadius: "50%" }}
          />
          <h2>{profile.name}</h2>
          <p style={{ color: "gray" }}>{profile.login}</p>
          <br />
          <p>{profile.bio}</p>
          <button style={{backgroundColor:"skyblue",padding:"10px",width:"30%",borderRadius:"20px"}}>
            <Link href="https://drive.google.com/file/d/1H-SrVolTzFQc46VtZt5E1T_5GKgnfUz0/view?usp=share_link">
              Resume
            </Link>
          </button>
          <button style={{backgroundColor:"skyblue",padding:"10px",width:"30%",borderRadius:"20px"}}>
            <Link href="https://github.com/JyotiranjanGhibila">Follow</Link>
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            width: "20%",
            border: "1px solid white",
            marginTop:"40px"
          }}
        >
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Typescript</p>
          <p>Next.JS</p>
          <p>NodeJS</p>
          <p>MongoDB</p>
          <p>Git</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(3,1fr)",
            width: "30%",
            border: "1px solid white",
            marginTop:"40px"
          }}
        >
          <h3>Full Stack Web Development Masai School</h3>
          <p>2022 May – present</p>
          <h3>Bachelor of Science in Physics Sambalpur University</h3>
          <p>2019 Sep – 2022 Nov</p>
          <h3>Higher Secondary(12th) science Sambalpur University</h3>
          <p>2017 Mar – 2019 Jun</p>
        </div>
        <div style={{display:"flex",border:"1px solid white",width:"30%",marginTop:"40px"}}>
      <Link href="/Components/Projects">My Projects</Link>
      </div>
      </div>
      {/* <Projects/> */}
      
    </>
  );
}

export async function getStaticProps() {
  const fetchAPI = await fetch(
    `https://api.github.com/users/JyotiranjanGhibila`
  );
  const finalResu = await fetchAPI.json();
  console.log(finalResu);
  return {
    props: {
      profile: finalResu,
    },
  };
}
