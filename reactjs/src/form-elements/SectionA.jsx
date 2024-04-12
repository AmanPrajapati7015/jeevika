export default function SectionA() {
  return (
    <form>
      <table border="1px solid black">
        <th colspan="6">Details of Primary Insured</th>
        <tr>
          <td colSpan="2">
            <label htmlFor="policy-no">Policy No.</label>
          </td>
          <td>
            <input type="number" id="policy-no" />
          </td>
          <td colspan="2">
            <label htmlFor="tpa-id-no">TPA ID No.</label>
          </td>
          <td>
            <input type="text" id="tpa-id-no" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label htmlFor="name">Name</label>
          </td>
          <td>
            <input type="text" id="name" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <label htmlFor="address">Address</label>
          </td>
          <td>
            <textarea id="address" />
          </td>
        </tr>
        <tr>
          <th colspan="1">
            <label htmlFor="city">City</label>
          </th>
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
