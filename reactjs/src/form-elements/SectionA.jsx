import "./formstyles.css";

export default function SectionA({ handleChange }) {
  return (
    <form>
      <table border="2px solid black">
        <th colspan="6">Details of Primary Insured</th>
        <tr>
          <td colspan={2}>
            <label htmlFor="policy-no">Policy No.</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="number"
              name="policy-no"
              id="policy-no"
            />
          </td>
          <td colspan={2}>
            <label htmlFor="tpa-id-no">TPA ID No.</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="tpa-id-no"
              id="tpa-id-no"
            />
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <label htmlFor="name">Name</label>
          </td>
          <td colspan={3}>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="name"
              id="name"
            />
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <label htmlFor="address">Address</label>
          </td>
          <td colspan={3}>
            <textarea
              id="address"
              name="address"
              onChange={(e) => handleChange(e, e.currentTarget.name)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="city">City</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="city"
              id="city"
            />
          </td>
          <td>
            <label htmlFor="state">State</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="state"
              id="state"
            />
          </td>
          <td>
            <label htmlFor="pincode">Pincode</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="number"
              name="pincode"
              id="pincode"
            />
          </td>
        </tr>
        <tr>
          <td colspan={2}>
            <label htmlFor="phone-no">Phone No.</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="phone-no"
              id="phone-no"
            />
          </td>
          <td colspan={2}>
            <label htmlFor="email-id">Email</label>
          </td>
          <td>
            <input
              onChange={(e) => handleChange(e, e.currentTarget.name)}
              type="text"
              name="email-id"
              id="email-id"
            />
          </td>
        </tr>
      </table>
    </form>
  );
}
