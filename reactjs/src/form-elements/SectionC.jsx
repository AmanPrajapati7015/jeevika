import "./formstyles.css";
import useRunOnce from "../components/useRunOnce";

export default function SectionC({ state, handleChange }) {
  useRunOnce({
    fn: () => {
      const inputElements = document.querySelectorAll("input");
      inputElements.forEach((input) => {
        if (state[input.name] == undefined) return;
        input.value = state[input.name];
      });
    },
  });

  return (
    <form>
      <table border="1px solid black">
        <th colspan="6">Details of Insurance Person Hospitalized</th>
        <tr>
          <td colspan="2">
            <label htmlFor="name">Name</label>
          </td>
          <td colspan="4">
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="name-of-c"
              id="name-of-c"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label htmlFor="gender">Gender</label>
          </td>
          <td colspan="4">
            <label htmlFor="male">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                id="male"
                name="gender"
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                id="female"
                name="gender"
              />
              Female
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="age">Age Years</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="age-years"
              id="age-years"
            />
          </td>
          <td>
            <label htmlFor="months">Months</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="age-months"
              id="age-months"
            />
          </td>
          <td>
            <label htmlFor="dob-of-c">Date of Birth</label>
          </td>
          <td>
            <label htmlFor="dob">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="date"
                name="dob"
                id="dob"
              />
            </label>
          </td>
        </tr>
        <tr>
          <td colspan="3">Relationship to Primary Insured:</td>
          <td colspan="3">
            <label htmlFor="self">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="rel-to-primary"
                id="self"
              />
              Self
            </label>
            <label htmlFor="spouse">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="rel-to-primary"
                id="spouse"
              />
              Spouse
            </label>
            <label htmlFor="child">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="rel-to-primary"
                id="child"
              />
              Child
            </label>
            <label htmlFor="father">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="rel-to-primary"
                id="father"
              />
              Father
            </label>
            <label htmlFor="mother">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="rel-to-primary"
                id="mother"
              />
              Mother
            </label>
          </td>
        </tr>
        <tr>
          <td colspan="3">Occupation:</td>
          <td colspan="3">
            <label htmlFor="service">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="occupation"
                id="self"
              />
              Service
            </label>
            <label htmlFor="self-employed">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="occupation"
                id="self-employed"
              />
              Self Employed
            </label>
            <label htmlFor="home-maker">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="occupation"
                id="home-maker"
              />
              Home Maker
            </label>
            <label htmlFor="student">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="occupation"
                id="student"
              />
              Student
            </label>
            <label htmlFor="other">
              <input
                onChange={(e) => handleChange(e, e.currentTarget.name)}
                type="radio"
                name="occupation"
                id="other"
              />
              Other
            </label>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <label htmlFor="address-of-c">Address</label>
          </td>
          <td colspan="3">
            <textarea
              name="address-of-c"
              id="address-of-c"
              onChange={(e) => handleChange(e, e.currentTarget.name)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="city-of-c">City</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="city-of-c"
            />
          </td>
          <td>
            <label htmlFor="state-of-c">State</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="state-of-c"
              id="state-of-c"
            />
          </td>
          <td>
            <label htmlFor="pincode-of-c">Pincode</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="number"
              name="pincode-of-c"
              id="pincode-of-c"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label htmlFor="phone-no-of-c">Phone No.</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="phone-no-of-c"
              id="phone-no-of-c"
            />
          </td>
          <td colspan="2">
            <label htmlFor="email-id-of-c">Email</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="email-id-of-c"
              id="email-id-of-c"
            />
          </td>
        </tr>
      </table>
    </form>
  );
}
