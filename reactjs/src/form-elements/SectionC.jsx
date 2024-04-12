export default function SectoinC() {
  return (
    <form>
      <table border="1px solid black">
        <tr>
          <td>
            <label htmlFor="name">Name</label>
          </td>
          <td>
            <input type="text" id="name" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="gender">Gender</label>
          </td>
          <td>
            <label htmlFor="male">
              Male
              <input type="radio" name="gender" />
            </label>
          </td>
          <td>
            <label htmlFor="female">
              Female
              <input type="radio" name="gender" />
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="age">
              Age Years
              <input type="text" id="age-years" />
            </label>
          </td>
          <td>
            <label htmlFor="months">
              Months
              <input type="text" id="age-months" />
            </label>
          </td>
          <td>
            <label htmlFor="dob">
              <input type="date" id="dob" />
            </label>
          </td>
        </tr>
        <tr>
          <td>Relationship to Primary Insured:</td>
          <td>
            <label htmlFor="self">
              Self
              <input type="radio" name="rel-to-primary" id="self" />
            </label>
            <label htmlFor="spouse">
              Spouse
              <input type="radio" name="rel-to-primary" id="spouse" />
            </label>
            <label htmlFor="child">
              Child
              <input type="radio" name="rel-to-primary" id="child" />
            </label>
            <label htmlFor="father">
              Father
              <input type="radio" name="rel-to-primary" id="father" />
            </label>
            <label htmlFor="mother">
              Mother
              <input type="radio" name="rel-to-primary" id="mother" />
            </label>
          </td>
        </tr>
        <tr>
          <td>Occupation:</td>
          <td>
            <label htmlFor="service">
              Service
              <input type="radio" name="occupation" id="self" />
            </label>
            <label htmlFor="self-employed">
              Self Employed
              <input type="radio" name="occupation" id="self-employed" />
            </label>
            <label htmlFor="home-maker">
              Home Maker
              <input type="radio" name="occupation" id="home-maker" />
            </label>
            <label htmlFor="student">
              Student
              <input type="radio" name="occupation" id="student" />
            </label>
            <label htmlFor="other">
              Other
              <input type="radio" name="occupation" id="other" />
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
            <input type="text" />
          </td>
          <td>
            <label htmlFor="state">State</label>
          </td>
          <td>
            <input type="text" id="state" />
          </td>
          <td>
            <label htmlFor="pincode">Pincode</label>
          </td>
          <td>
            <input type="number" id="pincode" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="phone-no">Phone No.</label>
          </td>
          <td>
            <input type="text" id="phone-no" />
          </td>
          <td>
            <label htmlFor="email-id">Email</label>
          </td>
          <td>
            <input type="text" id="email-id" />
          </td>
        </tr>
      </table>
    </form>
  );
}
