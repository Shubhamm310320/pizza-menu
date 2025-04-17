import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={require("./jonas.jpeg")}
      alt="Jonas Schmedtmann"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1 style={{ fontSize: "24px", fontWeight: 700 }}>Jonas Schmedtmann</h1>
      <p style={{ fontSize: "14px", fontWeight: 500 }}>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or
        just enjoy the portuguese sun at beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" bgcolor="blue" emoji="💪" />
      <Skill skill="JavaScript" bgcolor="yellow" emoji="💪" />
      <Skill skill="Web Design" bgcolor="lightgreen" emoji="💪" />
      <Skill skill="Git and GitHub" bgcolor="orangered" emoji="👍" />
      <Skill skill="React" bgcolor="skyblue" emoji="💪" />
      <Skill skill="Svelte" bgcolor="red" emoji="👶" />
    </div>
  );
}

function Skill(prop) {
  return (
    <div style={{ backgroundColor: `${prop.bgcolor}` }} className="skill">
      <h3>{prop.skill}</h3>
      <span>{prop.emoji}</span>
    </div>
  );
}
