import "./formstyles.css";

export default function SectionC({ handleChange }) {
  return (
    <form>
      <table border="1px solid black">
        <th colspan="7">Details of Insurance Person Hospitalized</th>
        <tr>
          <td>
            <label htmlFor="name">Name</label>
          </td>
          <td>
            <input type="text" name="name" id="name" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="gender">Gender</label>
          </td>
          <td>
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" />
              Male
            </label>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" />
              Female
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="age">Age Years</label>
          </td>
          <td>
            <input type="text" name="age-years" id="age-years" />
          </td>
          <td>
            <label htmlFor="months">Months</label>
          </td>
          <td>
            <input type="text" name="age-months" id="age-months" />
          </td>
          <td>
            <label htmlFor="dob">
              <input type="date" name="dob" id="dob" />
            </label>
          </td>
        </tr>
        <tr>
          <td>Relationship to Primary Insured:</td>
          <td>
            <label htmlFor="self">
              <input type="radio" name="rel-to-primary" id="self" />
              Self
            </label>
            <label htmlFor="spouse">
              <input type="radio" name="rel-to-primary" id="spouse" />
              Spouse
            </label>
            <label htmlFor="child">
              <input type="radio" name="rel-to-primary" id="child" />
              Child
            </label>
            <label htmlFor="father">
              <input type="radio" name="rel-to-primary" id="father" />
              Father
            </label>
            <label htmlFor="mother">
              <input type="radio" name="rel-to-primary" id="mother" />
              Mother
            </label>
          </td>
        </tr>
        <tr>
          <td>Occupation:</td>
          <td>
            <label htmlFor="service">
              <input type="radio" name="occupation" id="self" />
              Service
            </label>
            <label htmlFor="self-employed">
              <input type="radio" name="occupation" id="self-employed" />
              Self Employed
            </label>
            <label htmlFor="home-maker">
              <input type="radio" name="occupation" id="home-maker" />
              Home Maker
            </label>
            <label htmlFor="student">
              <input type="radio" name="occupation" id="student" />
              Student
            </label>
            <label htmlFor="other">
              <input type="radio" name="occupation" id="other" />
              Other
            </label>
          </td>
        </tr>
        <tr>
          <td colspan="1">
            <label htmlFor="address">Address</label>
          </td>
          <td>
            <textarea id="address" />
          </td>
        </tr>
        <tr>
          <td colspan="1">
            <label htmlFor="city">City</label>
          </td>
          <td>
            <input type="text" name="city" />
          </td>
          <td>
            <label htmlFor="state">State</label>
          </td>
          <td>
            <input type="text" name="state" id="state" />
          </td>
          <td>
            <label htmlFor="pincode">Pincode</label>
          </td>
          <td>
            <input type="number" name="pincode" id="pincode" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="phone-no">Phone No.</label>
          </td>
          <td>
            <input type="text" name="phone-no" id="phone-no" />
          </td>
          <td>
            <label htmlFor="email-id">Email</label>
          </td>
          <td>
            <input type="text" name="email-id" id="email-id" />
          </td>
        </tr>
      </table>
    </form>
  );
}
