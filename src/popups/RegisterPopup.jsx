import { useState } from "react";
import "../assets/css/components/popups/register-popup.css";
import PasswordInput from "../components/PasswordInput";

export default function RegisterPopup({ params }) {
  // params: {type: 'student'/'employer'}

  const [type, setType] = useState(params.type);
  const [inputs, setInputs] = useState({});

  return (
    <>
      <div className="type-chooser">
        <button
          className={type === "student" ? "selected" : ""}
          onClick={(e) => {
            setInputs({});
            setType("student");
          }}
        >
          STUDENT
        </button>
        <button
          className={type === "employer" ? "selected" : ""}
          onClick={(e) => {
            setInputs({});
            setType("employer");
          }}
        >
          EMPLOYER
        </button>
      </div>

      <div className="input-form">
        {type == "student" ? (
          <>
            <input
              type="text"
              placeholder="Student NIM"
              value={inputs.nim ?? ""}
              onChange={(e) => setInputs({ ...inputs, nim: e.target.value })}
            />
            <PasswordInput
              placeholder="Password"
              value={inputs.password ?? ""}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <PasswordInput
              placeholder="Confirm Password"
              value={inputs.confPassword ?? ""}
              onChange={(e) =>
                setInputs({ ...inputs, confPassword: e.target.value })
              }
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Email"
              value={inputs.email ?? ""}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={inputs.phone ?? ""}
              onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Company Name"
              value={inputs.company ?? ""}
              onChange={(e) =>
                setInputs({ ...inputs, company: e.target.value })
              }
            />
            <PasswordInput
              placeholder="Password"
              value={inputs.password ?? ""}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <PasswordInput
              placeholder="Confirm Password"
              value={inputs.confPassword ?? ""}
              onChange={(e) =>
                setInputs({ ...inputs, confPassword: e.target.value })
              }
            />
          </>
        )}
      </div>

      <button className="h-prim" style={{ width: "100%" }}>
        REGISTER
      </button>
    </>
  );
}
