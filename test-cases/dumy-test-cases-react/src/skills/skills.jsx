import React, { useEffect, useState } from "react";

function Skills({ skills = [] }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setTimeout(() => setIsLogin(true), 500);
    setTimeout(() => setIsProfile(true), 1001);
  }, []);
  return (
    <>
      <label>List</label>
      {isLogin && <button>Logout</button>}
      {isProfile && <button>Profile</button>}

      <ul>
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    </>
  );
}

export default Skills;
